"use client";

import React from "react";
import Link from "next/link";

import { li_list } from "@/widgets/layout/header/consts/header.config";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <nav className="sticky top-0 z-50 h-32 flex justify-center items-center">
      <section className="w-1/4 h-full flex justify-center items-center">
        <p
          className="relative font-Pretendard font-bold text-4xl text-black uppercase cursor-pointer"
          onClick={onClickLogo}
        >
          sonu
          <div className="absolute -right-3 -top-2 w-3 min-w-3 h-3 min-h-3 rounded-full bg-black" />
        </p>
      </section>
      <ul className="w-3/4 flex justify-evenly items-center">
        {li_list.map((item, key) => {
          return (
            <li
              className="h-full list-none flex justify-center itmes-center"
              key={key}
            >
              <Link href={item.href}>
                <span className="uppercase font-Pretendard font-normal text-xl">
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Header };
