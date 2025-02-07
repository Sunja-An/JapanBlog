"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IMG_GITHUB, IMG_INSTA, IMG_LINKED } from "@/shared/constants";
import Image from "next/image";
import { cn } from "@/shared/utils/clsx";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const scrollScanner = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", scrollScanner);

    return () => {
      window.removeEventListener("scroll", scrollScanner);
    };
  }, []);

  return (
    <header
      className={cn(
        "px-60 w-full flex justify-between itmes-center duraiton-300 rounded-b-xl",
        isScrolled && "h-24 bg-secondary",
        !isScrolled && "h-32 bg-transparent"
      )}
    >
      <nav className="w-1/2 h-full flex justify-start items-center">
        <ul className="w-full h-full flex justify-center items-center gap-4">
          <li className="w-1/3 h-full flex justify-center items-center">
            <Link
              href={"/introduce"}
              className="min-w-28 w-28 py-4 flex justify-center items-center rounded-full duration-300 hover:border-2 border-white font-pretendard font-extralight text-lg text-white uppercase"
            >
              Introduce
            </Link>
          </li>
          <li className="w-1/3 h-full flex justify-center items-center">
            <Link
              href={"/portfolio"}
              className="min-w-28 w-28 py-4 flex justify-center items-center rounded-full duration-300 hover:border-2 border-white font-pretendard font-extralight text-lg text-white uppercase"
            >
              PortFolio
            </Link>
          </li>
          <li className="w-1/3 h-full flex justify-center items-center">
            <Link
              href={"/blog"}
              className="min-w-24 w-24 py-4 flex justify-center items-center rounded-full duration-300 hover:border-2 border-white font-pretendard font-extralight text-lg text-white uppercase"
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icon-box w-1/2 h-full flex justify-end items-center gap-4">
        <div className="w-10 min-w-10 h-10 min-h-10 flex rounded-md justify-center items-center hover:bg-gray-100 duration-300">
          <Link href={"https://github.com/Sunja-An"}>
            <Image
              src={IMG_GITHUB}
              alt="github"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-10 min-w-10 h-10 min-h-10 flex rounded-md justify-center items-center hover:bg-gray-100 duration-300">
          <Link href={"www.instagram.com"}>
            <Image
              src={IMG_INSTA}
              alt="instagram"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-10 min-w-10 h-10 min-h-10 flex rounded-md justify-center items-center hover:bg-gray-100 duration-300">
          <Link href={"www.instagram.com"}>
            <Image
              src={IMG_LINKED}
              alt="linkedin"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
