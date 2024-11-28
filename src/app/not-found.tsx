"use client";

import React from "react";
import Image from "next/image";

import Logo from "/public/image/logo/LOGO.png";
import { useRouter } from "next/navigation";

export default function Client_Not_Found() {
  const router = useRouter();
  const onClickBack = (e: any) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className="w-full h-screen flex flex-col justify-start items-start">
      <div className="w-full flex justify-center items-center">
        <Image src={Logo} alt="Logo" width={300} height={300} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <span className="font-pretendard font-bold text-5xl text-black">
          404 Error
        </span>
        <button
          type="button"
          className="w-40 h-12 flex justify-center items-center rounded-md bg-slate-50 hover:scale-110 duration-300"
          onClick={onClickBack}
        >
          <span className="font-pretendard font-semibold text-xl text-black">
            Go Back
          </span>
        </button>
      </div>
    </div>
  );
}
