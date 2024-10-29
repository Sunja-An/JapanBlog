"use client";

import Image from "next/image";
import React from "react";

import Japan from "/public/svg/home/Japan.svg";
import Front from "/public/svg/home/FrontEnd.svg";
import Server from "/public/svg/home/Server.svg";

type TCategory = "Japan" | "Web" | "Server";
// 1 - Japan | 2 - FrontEnd | 3 - BackEnd

export default function Client_Category() {
  let JapanRef = React.useRef<HTMLDivElement>(null);
  let webRef = React.useRef<HTMLDivElement>(null);
  let ServerRef = React.useRef<HTMLDivElement>(null);

  const [centerIdx, setCenterIdx] = React.useState<number>(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const onClickCarousel = (id: number) => {
    setCenterIdx(id);
    const container = carouselRef.current;
    const elementWidth = container!.clientWidth / 3;
    const scrollPosition = id * elementWidth;

    container?.scrollTo({
      left:
        scrollPosition -
        (container.clientWidth / 2 - container.clientHeight / 2),
      behavior: "smooth",
    });
  };

  const [isSort, setIsSort] = React.useState<TCategory>("Japan");
  const onClickSort = (id: TCategory) => {
    setIsSort(id);
  };

  return (
    <div className="w-full h-full flex-col justify-center items-center">
      <div className="w-full h-40 flex flex-col justify-center items-center shrink">
        <span className="font-pretendard font-bold text-4xl text-black">
          TOPIC
        </span>
        <div className="mt-5" />
        <span className="font-pretendard font-semibold text-2xl text-black">
          클릭해서 관련 정보를 얻어보세요!
        </span>
      </div>
      <section className="w-full h-36 flex justify-center items-center shrink">
        <div className="w-1/5 h-36 flex justify-center items-center">
          <div
            className="min-w-40 max-w-40 min-h-40 max-h-40 flex flex-col justify-center items-center rounded-full border transition-all duration-300 relative z-0 hover:scale-110"
            onClick={() => onClickSort("Japan")}
          >
            <span className="font-pretendard font-bold text-2xl text-black">
              JAPAN
            </span>
            <Image
              src={Japan}
              alt="Japan"
              width={40}
              height={40}
              className={`${
                isSort !== "Japan" &&
                "animate-fadeoutdown duration-300 opacity-0"
              } animate-fadeinup duration-200`}
            />
          </div>
        </div>
        <div className="w-1/5 h-36 flex justify-center items-center shrink">
          <div
            className="min-w-40 max-w-40 min-h-40 max-h-40 flex flex-col justify-center items-center rounded-full border transition-all duration-300 relative z-0 hover:scale-110"
            onClick={() => onClickSort("Web")}
          >
            <span className="font-pretendard font-bold text-2xl text-black">
              Web
            </span>
            <Image
              src={Front}
              alt="Front"
              width={40}
              height={40}
              className={`${
                isSort !== "Web" && "animate-fadeoutdown duration-300 opacity-0"
              } animate-fadeinup duration-300`}
            />
          </div>
        </div>
        <div className="w-1/5 h-36 flex justify-center items-center">
          <div
            className="min-w-40 max-w-40 min-h-40 max-h-40 flex flex-col justify-center items-center rounded-full border transition-all duration-300 relative z-0 hover:scale-110"
            onClick={() => onClickSort("Server")}
          >
            <span className="font-pretendard font-bold text-2xl text-black">
              SERVER
            </span>
            <Image
              src={Server}
              alt="Server"
              width={40}
              height={40}
              className={`${
                isSort !== "Server" &&
                "animate-fadeoutdown duration-300 opacity-0"
              } animate-fadeinup duration-200`}
            />
          </div>
        </div>
      </section>
      <section className="mt-20 w-full h-80 flex justify-center items-start">
        <div className="w-full flex flex-col justify-start items-center">
          <span className="font-pretendard font-semibold text-3xl text-black">
            {isSort} Information
          </span>
          <div
            className="mt-10 w-full flex justify-start items-center overflow-scroll transition-all duration-300 snap-x snap-mandatory gap-10"
            ref={carouselRef}
          >
            <div className="w-1/2 shrink-0" />
            <CategoryPhotoCard />
            <CategoryPhotoCard />
            <CategoryPhotoCard />
            <div className="w-1/2 shrink-0" />
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryPhotoCard() {
  return (
    <div className="w-60 h-80 snap-always flex flex-col justify-start items-start snap-center shrink-0 bg-slate-100 rounded-xl transition-all duration-300 hover:w-96">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="font-pretendard font-semibold text-xl text-black">
          Here
        </span>
        <span className="font-pretendard font-semibold text-xl text-black">
          Here
        </span>
      </div>
    </div>
  );
}
