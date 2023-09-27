import { BaseModule } from "@/modules/base.module";
import { IContact } from "../src/types/contact.type";
import * as ContactAPI from "./api/contact.api";
import { IPaginationReq } from "@/types/pagination.type";

export class Contact extends BaseModule<IContact, never> {
  async deleteContact() {
    await ContactAPI.deleteContact({ contact_id: this.get("id") });
  }

  static async getContacts(params: { keyword: string } & IPaginationReq) {
    const resp = await ContactAPI.getContacts(params);

    return {
      ...resp,
      results: resp.results.map((item) => new Contact(item)),
    };
  }
}
