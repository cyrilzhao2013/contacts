"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

export default function LeftNav() {
  const pathname = usePathname();

  console.info("cyril pathname: ", pathname);

  return (
    <nav className={styles.leftNav}>
      <Link
        className={`${styles.link} ${
          pathname === "/contact" ? styles.linkActive : ""
        }`}
        href={`/contact`}
      >
        contacts
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/group" ? styles.linkActive : ""
        }`}
        href={`/group`}
      >
        groups
      </Link>
    </nav>
  );
}
