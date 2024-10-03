"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

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
        <Image src={pictureUrl} alt={pictureUrl} width={160} height={160} />
      </div>
      <div className="texture-section w-full h-20 flex flex-col justify-start items-center">
        <h3 className="font-pretendard font-semibold text-xl text-black">
          {title}
        </h3>
        <span className="font-pretendard font-normal text-lg text-black">
          {content}
        </span>
      </div>
    </div>
  );
}
