"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

interface IBigCard {
  id: number;
  picture: string;
  title: string;
  introduce: string;
  viewCount: number;
}

export function BigCard({
  id,
  picture,
  introduce,
  title,
  viewCount,
}: IBigCard) {
  const router = useRouter();

  const onClickButton = (e: any) => {
    e.preventDefault();
    router.push(`/${id}`);
  };

  return (
    <div
      className="px-5 py-5 w-full max-h-40 h-40 min-h-40 flex justify-start items-center rounded-lg shadow-md cursor-pointer"
      onClick={onClickButton}
    >
      <section className="picture w-1/5 h-full flex justify-center items-center">
        <Image
          src={picture}
          alt={picture}
          className="w-full h-full rounded-md"
        />
      </section>
      <section className="title-section w-1/5 flex justify-center items-center">
        <p className="font-Pretendard font-semibold text-lg text-black">
          {title}
        </p>
      </section>
      <section className="introduce-section w-2/5 flex justify-center items-center">
        <p className="font-Pretendard font-normal text-sm text-black">
          {introduce}
        </p>
      </section>
      <section className="viewcount-section w-1/5 flex justify-center items-center">
        <p className="font-Pretendard font-normal text-sm text-black">
          {viewCount}
        </p>
      </section>
    </div>
  );
}

import Jitori from "/public/image/jitori.jpeg";

interface ISmallCard {
  pictureUrl: string;
  id: number;
  title: string;
  content: string;
}

export function SmallCard({ pictureUrl, id, title, content }: ISmallCard) {
  const router = useRouter();

  const onClickPost = () => {
    router.push(`/tech/${id}`);
  };

  return (
    <div
      className="group w-60 min-w-60 h-80 min-h-80 flex flex-col justify-start items-center rounded-xl overflow-hidden border cursor-pointer"
      onClick={onClickPost}
    >
      <div className="picture-section w-full h-40 overflow-hidden">
        <Image
          src={Jitori}
          alt={pictureUrl}
          width={160}
          height={160}
          className="w-full h-full transition-all duration-300 group-hover:scale-110 rounded-t-xl"
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
