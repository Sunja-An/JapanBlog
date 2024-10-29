"use client";

import Image from "next/image";
import React from "react";
import Jitori from "/public/image/jitori.jpeg";

export default function JapanBlog_About_Page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=""></div>
      <div className="">
        <Image
          src={Jitori}
          alt="picture"
          width={300}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
