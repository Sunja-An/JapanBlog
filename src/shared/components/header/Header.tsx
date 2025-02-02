"use client";

import Link from "next/link";
import React from "react";

import { IMG_GITHUB, IMG_INSTA, IMG_LINKED } from "@/shared/constants";
import Image from "next/image";

function Header() {
  return (
    <header className="px-20 w-full h-32 flex justify-between itmes-center">
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
      <div className="icon-box w-1/2 h-full flex justify-end items-center gap-8">
        <Image
          src={IMG_GITHUB}
          alt="github"
          width={32}
          height={32}
          className="cursor-pointer"
        />
        <Image
          src={IMG_INSTA}
          alt="instagram"
          width={32}
          height={32}
          className="cursor-pointer"
        />
        <Image
          src={IMG_LINKED}
          alt="linkedin"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}

export { Header };
