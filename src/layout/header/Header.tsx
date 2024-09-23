"use client";

import React from "react";
import Logo from "/public/image/LOGO.png";
import Image from "next/image";
import Hamburger from "/public/svg/Hamburger.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickList = (url: string) => {
    router.push(`/${url}`);
  };

  return (
    <div className="py-10 w-screen h-20 flex justify-between items-center shrink border-b border-black">
      <div className="px-10 py-10 w-1/3 h-20 flex justify-center items-center">
        <Image
          src={Logo}
          alt="logo"
          width={150}
          height={120}
          className="cursor-pointer"
          onClick={onClickLogo}
        />
      </div>
      <div className="w-1/3 h-full flex justify-evenly items-center">
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("about")}
        >
          <button className="relative w-40 group text-black">
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all"></span>
            <span className="font-pretendard font-bold text-xl text-black">
              About
            </span>
          </button>
          <button className="relative inline-block font-medium group py-1.5 px-2.5 "></button>
        </div>
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("blog")}
        >
          <span className="font-pretendard font-bold text-xl text-black">
            Casual Blog
          </span>
        </div>
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("tech")}
        >
          <span className="font-pretendard font-bold text-xl text-black">
            Tech Blog
          </span>
        </div>
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("FAQ")}
        >
          <span className="font-pretendard font-bold text-xl text-black">
            FAQ
          </span>
        </div>
      </div>
      <div className="px-20 w-1/3 h-full flex justify-center items-center">
        <Client_Hamburger />
      </div>
    </div>
  );
}

import XIcon from "/public/svg/xIcon.svg";

function Client_Hamburger() {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const onClickHamburger = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <div
      className={`${
        isClicked
          ? "relative top-0 h-fit transition-all duration-300 w-60 "
          : "w-40 h-full flex flex-col justify-center items-center"
      }`}
    >
      {isClicked ? (
        <div className="flex flex-col justify-start items-start bg-slate-100">
          <Image
            src={XIcon}
            alt="x"
            width={40}
            height={40}
            className="absolute left-5 top-5 cursor-pointer"
            onClick={onClickHamburger}
          />
          <div className="">
            <h1 className="">Japan</h1>
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
          <div className="">
            <h1 className="">FrontEnd</h1>
            <span className="">React.js</span>
            <span className="">Typescript</span>
            <span className="">Next.js</span>
          </div>
          <div className="">
            <h1 className="">Server</h1>
            <span className="">Nest.js</span>
            <span className="">Docker</span>
            <span className="">Kubernetes</span>
          </div>
        </div>
      ) : (
        <Image
          src={Hamburger}
          alt="hamburger"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={onClickHamburger}
        />
      )}
    </div>
  );
}
