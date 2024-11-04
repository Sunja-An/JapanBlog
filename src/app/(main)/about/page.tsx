"use client";

import React from "react";
import Image from "next/image";

// * Static Data
import Jitori from "/public/image/jitori.jpeg";

// * Another Package
import gsap from "gsap";

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
