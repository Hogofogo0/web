"use client";
import React from "react";
import { zilla } from "@/app/assets/fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const links = [
    {
      name: "Knihy",
      href: "/dashboard/books",
    },
    {
      name: "Chat",
      href: "/dashboard/chat",
    },
    {
      name: "Pokladna",
      href: "/dashboard/sell",
    },
    {
      name: "Správa účtů",
      href: "/dashboard/accounts",
    },
  ];

  const pathname = usePathname();

  return (
    <div className={`${zilla.className} h-screen w-screen`}>
      <div className="w-screen border-b border-black sticky top-0 flex flex-row items-stretch justify-between text-2xl">
        <div className="flex flex-row items-center border-black">
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className={clsx(
                  " hover:bg-black hover:text-white transition duration-350 items-center flex h-full p-3 border-r",
                  { "bg-slate-950 text-white": pathname === link.href },
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="bg-black text-white p-3 text-right items-center flex">
          <div>Jméno Příjmení</div>
        </div>
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
