"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// * Static Data
import Logo from "/public/image/LOGO.png";
import Hamburger from "/public/svg/Hamburger.svg";
import XIcon from "/public/svg/xIcon.svg";

export default function Header() {
  const router = useRouter();
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const onClickHamburger = () => {
    setIsClicked((prev) => !prev);
  };

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickList = (url: string) => {
    router.push(`/${url}`);
  };

  return (
    <div className="py-10 w-screen h-20 flex justify-between items-center shrink">
      <div className="px-10 py-10 w-fit h-20 flex justify-center items-center">
        <Image
          src={Logo}
          alt="logo"
          width={150}
          height={120}
          className="cursor-pointer"
          onClick={onClickLogo}
        />
      </div>
      <div className="w-1/2 h-full flex justify-evenly items-center">
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("about")}
        >
          <button className="relative w-40 group text-black">
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all duration-300"></span>
            <span className="font-pretendard font-bold text-lg text-black">
              About
            </span>
          </button>
          <button className="relative inline-block font-medium group py-1.5 px-2.5 "></button>
        </div>
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("blog")}
        >
          <button className="relative w-40 group text-black">
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all"></span>
            <span className="font-pretendard font-bold text-lg text-black">
              Casual Blog
            </span>
          </button>
          <button className="relative inline-block font-medium group py-1.5 px-2.5 "></button>
        </div>
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("tech")}
        >
          <button className="relative w-40 group text-black">
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all"></span>
            <span className="font-pretendard font-bold text-lg text-black">
              Tech Blog
            </span>
          </button>
          <button className="relative inline-block font-medium group py-1.5 px-2.5 "></button>
        </div>
        <div
          className="w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => onClickList("FAQ")}
        >
          <button className="relative w-40 group text-black">
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all"></span>
            <span className="font-pretendard font-bold text-lg text-black">
              FAQ
            </span>
          </button>
          <button className="relative inline-block font-medium group py-1.5 px-2.5 "></button>
        </div>
      </div>
      <div className="w-fit h-full inline-flex justify-center items-center cursor-pointer">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="ms-3 text-sm font-medium text-black">JPN</span>
        </label>
      </div>
      <div className="relative top-0 right-0 px-20 w-fit flex justify-center items-center">
        <div
          className={`${
            isClicked
              ? "w-60 transition-all duration-300 flex flex-col justify-start items-start"
              : "w-40 h-full flex flex-col justify-center items-center"
          }`}
        >
          {isClicked ? (
            <div className="w-full h-full flex flex-col justify-start items-start bg-slate-100">
              <Image
                src={XIcon}
                alt="x"
                width={40}
                height={40}
                className="absolute left-5 top-5 cursor-pointer"
                onClick={onClickHamburger}
              />
              <div className="w-full flex flex-col justify-start items-start">
                <h1 className="">Japan</h1>
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
              </div>
              <div className="w-full flex flex-col justify-start items-start">
                <h1 className="">FrontEnd</h1>
                <span className="">React.js</span>
                <span className="">Typescript</span>
                <span className="">Next.js</span>
              </div>
              <div className="w-full flex flex-col justify-start items-start">
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
      </div>
    </div>
  );
}
