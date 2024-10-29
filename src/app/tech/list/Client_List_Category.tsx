"use client";

import React from "react";

export default function Client_List_Category() {
  const onClickCategoryButton = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="px-10 py-10 w-80 rounded-xl flex flex-col justify-start items-start overflow-hidden border gap-10">
      <div className="w-full h-14 flex justify-center items-center">
        <span className="font-pretendard font-semibold text-2xl text-black">
          Category
        </span>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <button
          type="button"
          name="nextjs"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            Next.js
          </span>
        </button>
        <button
          type="button"
          name="typescript"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            Typescript
          </span>
        </button>
        <button
          type="button"
          name="javascript"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            Javascript
          </span>
        </button>
        <button
          type="button"
          name="react"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            React
          </span>
        </button>
        <button
          type="button"
          name="festructure"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            FrontEnd Software Structure
          </span>
        </button>
        <button
          type="button"
          name="bestructure"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            BackEnd Software Structure
          </span>
        </button>
        <button
          type="button"
          name="swstructure"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            Software Structure
          </span>
        </button>
        <button
          type="button"
          name="diary"
          className="w-full flex h-12 justify-center items-center rounded-lg"
        >
          <span className="font-pretendard font-normal text-lg text-black">
            Develope Diary
          </span>
        </button>
      </div>
    </div>
  );
}
