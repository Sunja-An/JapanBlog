"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import Jitori from "/public/image/jitori.jpeg";

interface ISmallCard {
  pictureUrl: string;
  id: number;
  title: string;
  content: string;
}

export default function SmallCard({
  pictureUrl,
  id,
  title,
  content,
}: ISmallCard) {
  const router = useRouter();

  const onClickPost = () => {
    router.push(`/tech/${id}`);
  };

  return (
    <div
      className="w-60 h-80 flex flex-col justify-start items-center rounded-xl border cursor-pointer"
      onClick={onClickPost}
    >
      <div className="picture-section w-full h-40 overflow-hidden">
        <Image
          src={Jitori}
          alt={pictureUrl}
          width={160}
          height={160}
          className="transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="texture-section mt-5 w-full h-20 flex flex-col justify-start items-center">
        <h3 className="font-pretendard font-semibold text-xl text-black">
          {title}
        </h3>
        <div className="px-5 w-full flex flex-wrap justify-start items-start">
          <span className="font-pretendard font-normal text-lg text-black">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
