"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// * Components
import { ReactTag } from "@/components/tag/Tag";

// * Static Data
import BG from "/public/image/BG.png";
import BlackHeart from "/public/svg/btns/blackHeart.svg";
import Calendar from "/public/svg/btns/calendar.svg";
import Eye from "/public/svg/btns/eye.svg";

interface IPostSource {
  id: number;
  title: string;
  author: string;
  viewCount: number;
  likedCount: number;
  atModified: string;
}

export default function Client_Post_Source({
  id,
  title,
  author,
  viewCount,
  likedCount,
  atModified,
}: IPostSource) {
  const router = useRouter();
  const onClickMoveToPost = (e: any) => {
    e.preventDefault();
    router.push(`/tech/${id}`);
  };
  return (
    <div
      className="px-2 py-3 w-full h-fit flex justify-start items-start border-b cursor-pointer gap-8 group"
      onClick={onClickMoveToPost}
    >
      <div className="w-2/3 h-60 flex-col justify-start items-start">
        <div className="relative w-full h-10 flex justify-start itmes-start">
          <ReactTag />
        </div>
        <div className="mt-5" />
        <div className="w-full flex justify-start items-start">
          <span className="font-pretendard font-bold text-2xl text-black">
            {title}
          </span>
        </div>
        <div className="mt-5" />
        <div className="w-full flex justify-start items-center">
          <div className="w-full flex justify-start items-start">
            <span className="font-pretendard font-normal text-xl text-black">
              {author}
            </span>
          </div>
        </div>
        <div className="mt-10" />
        <div className="w-full h-10 flex justify-start items-start gap-5">
          <div className="w-20 flex justify-center items-center gap-1">
            <Image src={Calendar} alt="Calendar" width={25} height={25} />
            <span className="font-pretendard font-normal text-lg text-black">
              {atModified}
            </span>
          </div>
          <button
            type="button"
            className="w-12 flex justify-start items-center"
          >
            <Image src={Eye} alt="Eye" width={25} height={25} />
            <span className="font-pretendard font-normal text-lg text-black">
              {viewCount}
            </span>
          </button>
          <button
            type="button"
            className="w-12 flex justify-start items-center"
          >
            <Image src={BlackHeart} alt="BlackHeart" width={25} height={25} />
            <span className="font-pretendard font-normal text-lg text-black">
              {likedCount}
            </span>
          </button>
        </div>
      </div>
      <div className="w-1/3 h-60 flex justify-center items-center">
        <Image
          src={BG}
          alt="BG"
          width={300}
          height={200}
          className="rounded-lg overflow-hidden group-hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
}
