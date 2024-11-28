"use client";

import React from "react";
import Image from "next/image";

import { leftOptionBar, rightOptionBar } from "@/shared/consts/language-images";
import { ViewButton } from "@/shared/button/index";

function PostOption() {
  return (
    <div className="py-5 w-96 h-[500px] flex flex-col justify-start items-start rounded-3xl bg-slate-200">
      <section className="w-full h-40 flex flex-col justify-start items-center">
        <div className="w-full h-20 flex justify-center items-center">
          <p className="font-Pretendard font-semibold text-2xl text-black">
            TechBlog Option
          </p>
        </div>
        <div className="w-full h-20 flex justify-center items-center">
          <ViewButton content="View All Post" />
        </div>
      </section>
      <section className="w-full flex justify-evenly items-center">
        <div className="flex flex-col justify-start items-center gap-10">
          {leftOptionBar.map((item, key) => {
            return (
              <div key={key} className="">
                <Image src={item} alt={item} width={40} height={40} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-center gap-10">
          {rightOptionBar.map((item, key) => {
            return (
              <div key={key} className="">
                <Image src={item} alt={item} width={40} height={40} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export { PostOption };
