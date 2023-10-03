import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import LeftNav from "@/components/leftnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Google Contacts",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeftNav />
        <main className={"main-content"}>{children}</main>
      </body>
    </html>
  );
}
