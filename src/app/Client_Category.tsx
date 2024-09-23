"use client";

import Image from "next/image";
import React from "react";

import Japan from "/public/svg/Japan.svg";
import Front from "/public/svg/FrontEnd.svg";
import Server from "/public/svg/Server.svg";

type TCategory = "Japan" | "Web" | "Server";
// 1 - Japan | 2 - FrontEnd | 3 - BackEnd

export default function Client_Category() {
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
            {isSort === "Japan" && (
              <Image
                src={Japan}
                alt="Japan"
                width={40}
                height={40}
                className="animate-fadeinup duration-200"
              />
            )}
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
            {isSort === "Web" && (
              <Image
                src={Front}
                alt="Front"
                width={40}
                height={40}
                className="animate-fadeinup duration-200"
              />
            )}
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
            {isSort === "Server" && (
              <Image
                src={Server}
                alt="Server"
                width={40}
                height={40}
                className="animate-fadeinup duration-200"
              />
            )}
          </div>
        </div>
      </section>
      <section className="mt-20 w-full h-80 flex justify-center items-start">
        <div className="w-full flex flex-col justify-start items-center">
          <span className="font-pretendard font-semibold text-3xl text-black">
            {isSort} Information
          </span>
          <div className="mt-10 w-full snap-x snap-mandatory flex justify-center items-center">
            <CategoryPhotoCard />
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryPhotoCard() {
  return (
    <div className="w-60 h-80 flex flex-col justify-start items-start bg-slate-100 rounded-xl">
      <div className=""></div>
    </div>
  );
}
