"use client";

import React from "react";

export default function Client_List_Category() {
  return (
    <div className="w-80 rounded-xl flex flex-col justify-start items-start overflow-hidden">
      <div className="w-full h-20 flex justify-center items-center">
        <span className="">Category</span>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="">
          <span>Next.js</span>
        </div>
        <div className="">
          <span>Typescript</span>
        </div>
        <div className="">
          <span>Javascript</span>
        </div>
        <div className="">
          <span>React</span>
        </div>
        <div className="">
          <span>FrontEnd Software Structure</span>
        </div>
        <div className="">
          <span>BackEnd Software Structure</span>
        </div>
        <div className="">
          <span>Software Structure</span>
        </div>
        <div className="">
          <span>Develope Diary</span>
        </div>
      </div>
    </div>
  );
}
