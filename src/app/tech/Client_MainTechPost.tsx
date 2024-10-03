"use client";

import React from "react";
import Image from "next/image";

import LogoImage from "/public/image/LogoImage.png";

interface IMainTechPost {
  imageUrl: string;
  title: string;
  content: string;
}

export default function Client_MainTechPost({
  imageUrl,
  title,
  content,
}: IMainTechPost) {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-center gap-10">
      <div className="w-full h-80 flex justify-center items-center">
        <h1 className="font-pretendard font-bold text-4xl text-black">
          Recent Blog
        </h1>
      </div>
      <div className="w-full h-60 flex justify-center items-center gap-10 border">
        <div className="w-1/2 h-full flex justify-center items-center">
          <Image src={LogoImage} alt={imageUrl} width={200} height={200} />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-5">
          <h2 className="font-pretendard font-semibold text-3xl text-black">
            {title}
          </h2>
          <span className="font-pretendard text-lg text-black">{content}</span>
        </div>
      </div>
    </div>
  );
}
