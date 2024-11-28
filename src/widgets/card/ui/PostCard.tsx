"use client";

import React, { type ReactNode } from "react";
import Image from "next/image";

import ImageSkeleton from "/public/svg/button/image.svg";

interface IPostCard {
  photoUrl?: string;
  title: string;
  content: string;
  tag?: ReactNode;
}

function PostCard(props: IPostCard) {
  return (
    <div className="px-10 py-5 w-80 h-[450px] flex flex-col justify-start items-start rounded-3xl shadow-sm bg-slate-100 gap-5">
      <div className="card-image-section w-full h-52 flex justify-center items-center">
        <div className="w-80 h-40 flex justify-center items-center rounded-3xl bg-slate-300">
          <Image src={ImageSkeleton} alt={ImageSkeleton} />
        </div>
      </div>
      <div className="post-title-section w-full flex justify-center items-center">
        <p className="font-Pretendard font-semibold text-2xl text-black">
          {props.title}
        </p>
      </div>
      <div className="content-section w-full flex justify-start items-center">
        <p className="font-Pretendard font-normal text-lg text-black">
          {props.content}
        </p>
      </div>
      <div className="tag-section w-full h-10 flex justify-start items-center">
        {props.tag}
      </div>
    </div>
  );
}

export { PostCard };
