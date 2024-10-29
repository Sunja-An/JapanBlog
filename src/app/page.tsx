"use client";

import React from "react";

import Client_PhotoCard from "@/app/Client_PhotoCard";
import Client_Category from "@/app/Client_Category";

const totalPageNumber = 2;

export default function JapanBlog_Blog_Page() {
  return (
    <main className="px-3 pb-40 w-full h-fit flex flex-col justify-start items-start">
      <div
        className={`w-full h-screen flex justify-center items-center transition-all duration-200`}
      >
        <div className="relative w-11/12 h-full">
          <Client_PhotoCard sort="tech" linkId={0} pictureUrl="" />
        </div>
      </div>
      <div
        className={`w-full h-screen flex flex-col justify-center items-center shrink-0`}
      >
        <Client_Category />
      </div>
    </main>
  );
}
