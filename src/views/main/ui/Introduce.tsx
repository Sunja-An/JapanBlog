"use client";

import React from "react";
import JapanMap from "/public/svg/map/JapanMap.svg";
import Image from "next/image";

function Introduce() {
  return (
    <div className="relative py-10 w-full flex justify-center items-center gap-10">
      <div className="absolute -left-72 -bottom-12 w-96 h-96 bg-red-500 rounded-full blur-border" />
      <div className="w-1/2 flex flex-col justify-start items-center">
        <div className="w-full flex flex-wrap justify-center items-center">
          <span className="font-Pretendard font-semibold text-3xl text-black">
            I am a Korean who came as a Japanese exchange student This blog is
            based on 2024-2025
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image src={JapanMap} alt="JapanMap" />
        </div>
      </div>
      <div className="w-1/2 flex justify-center itmes-center">
        <div className="image-container w-full h-96 min-h-96 rounded-3xl bg-slate-100"></div>
      </div>
    </div>
  );
}

export { Introduce };
