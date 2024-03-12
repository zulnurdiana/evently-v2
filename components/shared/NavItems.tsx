"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex flex-col items-start md:flex-row w-full gap-5">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive ? "text-primary-500" : ""
            } flex p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} key={link.label}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
