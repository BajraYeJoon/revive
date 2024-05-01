import { footerLinks } from "@/app/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 md:mt-20 lg:mt-24 px-4 ">
      <nav className="mx-auto mb-10 flex max-w-lg flex-col gap-4 md:gap-10 text-center sm:flex-row sm:text-left">
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.href} className="font-medium text-white">
            {link.text}
          </Link>
        ))}
      </nav>
      <p className="pb-8 pt-0 md:py-10 text-center text-gray-300">
        © 2024 Revive | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
