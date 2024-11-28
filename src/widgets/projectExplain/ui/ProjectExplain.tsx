"use client";

import Image from "next/image";
import React from "react";

import LeftArrow from "/public/svg/button/LeftArrow.svg";
import RightArrow from "/public/svg/button/RightArrow.svg";

function ProjectExplain() {
  const [isNumber, setIsNumber] = React.useState<number>(0);
  return (
    <div className="w-full flex justify-center items-center gap-10">
      <div className="w-1/12">
        <button type="button">
          <Image src={LeftArrow} alt={LeftArrow} width={20} height={20} />
        </button>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <div className="w-full h-80 rounded-3xl bg-slate-100"></div>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <div className="px-10 py-10 w-full h-80 flex flex-col justify-start items-center rounded-3xl bg-slate-100">
          <p className="font-Pretendard font-semibold text-2xl text-black">
            Project Name
          </p>
        </div>
      </div>
      <div className="w-1/12">
        <button type="button">
          <Image src={RightArrow} alt={RightArrow} width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

export { ProjectExplain };
