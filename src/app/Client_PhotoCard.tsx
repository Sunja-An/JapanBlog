"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IPhotoCard {
  sort: "tech" | "blog";
  linkId: number;
  pictureUrl: string;
}

export default function Client_PhotoCard({
  sort,
  linkId,
  pictureUrl,
}: IPhotoCard) {
  const router = useRouter();

  const onClickPicture = () => {
    router.push(`/${sort}/${linkId}`);
  };

  return (
    <div className="relative w-full h-full rounded-xl bg-slate-300">
      <div className="">
        <Image src={""} alt={`${pictureUrl}`} />
      </div>
      <div
        className="bottom-40 left-10 absolute w-40 h-12 rounded-xl bg-white"
        onClick={onClickPicture}
      >
        <button
          type="button"
          className="relative w-full h-12 flex justify-center items-center rounded-xl bg-inherit group hover:scale-105 duration-300 overflow-hidden"
        >
          <span className="absolute left-5 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            바로가기
          </span>
          <svg
            width="12"
            height="20"
            viewBox="0 0 18 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-7 transition-transform duration-300 group-hover:translate-x-2"
          >
            <path
              d="M2.33333 0L0 2.5L12.3333 15L0 27.5L2.33333 30L17.3333 15L2.33333 0Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
