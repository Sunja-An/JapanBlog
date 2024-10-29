"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// * Static Data
import Logo from "/public/image/LOGO.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Header() {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickList = (url: string) => {
    router.push(`/${url}`);
  };

  React.useEffect(() => {
    const showheader = gsap
      .fromTo(headerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showheader.play() : showheader.reverse();
      },
    });
  }, []);

  return (
    <header
      className="px-10 py-10 w-screen h-20 flex justify-between items-center shrink-0"
      ref={headerRef}
    >
      <div className="px-10 py-10 w-fit h-20 flex justify-center items-center overflow-hidden">
        <div
          className="w-fit h-20 flex justify-start items-center cursor-pointer"
          onClick={onClickLogo}
        >
          <span className="font-pretendard font-extrabold text-3xl">SONU</span>
          <div className="w-2 h-2 rounded-full bg-black" />
        </div>
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
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all duration-300"></span>
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
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all duration-300"></span>
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
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gray-600 group-hover:w-full group-hover:transition-all duration-300"></span>
            <span className="font-pretendard font-bold text-lg text-black">
              FAQ
            </span>
          </button>
          <button className="relative inline-block font-medium group py-1.5 px-2.5 "></button>
        </div>
      </div>
      <div className="w-40 h-full inline-flex justify-center items-center cursor-pointer">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="ms-3 text-lg font-semibold text-black">JPN</span>
        </label>
      </div>
    </header>
  );
}
