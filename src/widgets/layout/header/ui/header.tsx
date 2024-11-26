"use client";

import React from "react";
import { li_list } from "@/widgets/layout/header/consts/header.config";

function Header() {
  return (
    <nav className="w-screen h-48 flex justify-center items-center">
      <section className="">
        <span className="uppercase text-5xl text-black">sonu</span>
        <div className="w-5 h-5 rounded-full bg-black" />
      </section>
      <section className="">
        <ul className="">
          {li_list.map((item, key) => {
            return (
              <li className="" key={key}>
                <span className="uppercase font-Pretendard font-normal text-xl">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
}

export { Header };
