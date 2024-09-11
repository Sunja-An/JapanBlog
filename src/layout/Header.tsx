"use client";

import React from "react";

export default function Header() {
  return (
    <div className="px-10 py-10 w-full h-40 flex justify-center items-center">
      <div className="relative w-1/3 h-full flex justify-center items-center">
        <span>SONU</span>
        <div className="dot w-4 h-4 rounded-full bg-black" />
      </div>
      <div className="w-1/3 h-full flex justify-start items-center">
        <div className="w-1/4"></div>
        <div className="w-1/4"></div>
        <div className="w-1/4"></div>
        <div className="w-1/4"></div>
      </div>
      <div className=""></div>
    </div>
  );
}
