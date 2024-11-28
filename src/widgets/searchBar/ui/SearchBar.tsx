"use client";

import React from "react";

import SearchImg from "/public/svg/input/search.svg";
import Image from "next/image";

function SearchBar() {
  return (
    <div className="relative w-96 h-14 rounded-3xl">
      <Image src={SearchImg} alt="SearchImg" className="absolute left-5" />
      <input
        type="text"
        name="input"
        id="input"
        placeholder="Search what you want"
        className="px-5 py-3 font-Pretendard text-black focus:outline-none overflow-hidden"
      />
    </div>
  );
}

export { SearchBar };
