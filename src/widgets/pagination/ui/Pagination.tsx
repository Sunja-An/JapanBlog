"use client";

import React from "react";
import Image from "next/image";

import LeftArrow from "/public/svg/button/LeftArrow.svg";
import RightArrow from "/public/svg/button/RightArrow.svg";

function Pagination() {
  return (
    <div className="w-full h-20 flex justify-center items-center gap-5">
      <section className="">
        <button type="button" className="">
          <Image src={LeftArrow} alt={LeftArrow} width={20} height={40} />
        </button>
      </section>
      <section className=""></section>
      <section className="">
        <button type="button" className="">
          <Image src={RightArrow} alt={RightArrow} width={20} height={40} />
        </button>
      </section>
    </div>
  );
}

export { Pagination };
