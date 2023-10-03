"use client";
import styles from "./page.module.css";
import Image from "next/image";
import SearchInput, { IOption } from "@/components/search-input";
import { useEffect, useState } from "react";
import { Contact } from "@/modules/Contact";
import { useImmer } from "use-immer";

export interface IContactOption extends IOption {
  avatar: string;
}

export default function ContactsPage() {
  const [options, setOptions] = useState<IContactOption[]>([]);
  const [contacts, setContacts] = useImmer<Contact[]>([]);

  const handleSearchContacts = async (keyword: string) => {
    const resp = await Contact.getContacts({
      keyword: keyword,
      page: 1,
      pageSize: 10,
    });

    setOptions(
      resp.results.map((contact) => {
        return {
          label: contact.getName(),
          value: contact.get("id"),
          avatar: contact.get("avatar"),
        };
      })
    );
  };

  const handleSelectContact = (value: string | number, option: IOption) => {};

  const renderContactOption = (option: IOption) => {
    return (
      <div className={styles.contactSearchOption}>
        <Image
          src={(option as IContactOption).avatar}
          className={styles.contactSearchOptionAvatar}
          width={40}
          height={40}
          alt={option.label}
        />
        <div className={styles.contactSearchOptionName} title={option.label}>
          {option.label}
        </div>
      </div>
    );
  };

  const init = async () => {
    const resp = await Contact.getContacts({
      page: 1,
      pageSize: 10,
      keyword: "",
    });

    setContacts(resp.results);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.contactPage}>
      <SearchInput
        width={800}
        options={options}
        search={handleSearchContacts}
        onSelect={handleSelectContact}
        renderOption={renderContactOption}
        placeholder={"Search contacts"}
      />
      <div className={styles.contactTable}>
        <div className={styles.contactTableHeader}>
          <div className={styles.contactName}>Name</div>
          <div className={styles.contactEmail}>Email</div>
          <div className={styles.contactTel}>Tel</div>
          <div className={styles.contactJobAndCompany}>Job And Company</div>
          <div className={styles.contactTags}>Tag</div>
        </div>
        <div className={styles.contacts}>
          {contacts.map((contact) => {
            return (
              <div className={styles.contact} key={contact.get("id")}>
                <div className={styles.contactName}>
                  <Image
                    src={contact.get("avatar")}
                    className={styles.contactAvatar}
                    width={40}
                    height={40}
                    alt={contact.getName()}
                  />
                  <div
                    title={contact.getName()}
                    className={styles.contactNameText}
                  >
                    {contact.getName()}
                  </div>
                </div>
                <div className={styles.contactEmail}>
                  {contact.get("emails")?.[0].email
                    ? contact.get("emails")?.[0].email
                    : ""}
                </div>
                <div className={styles.contactTel}>
                  {contact.get("telephones")?.[0].tel
                    ? contact.get("telephones")?.[0].tel
                    : ""}
                </div>
                <div className={styles.contactJobAndCompany}>
                  {contact.get("company")} {contact.get("jobTitle")}
                </div>
                <div className={styles.contactTags}>
                  {contact.get("tags")?.map((tag) => {
                    return (
                      <div key={tag} className={styles.contactTag}>
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
