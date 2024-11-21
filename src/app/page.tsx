"use client";

import React from "react";

// * Components
import Header from "@/layout/header/Header";
import Client_PhotoCard from "@/app/Client_PhotoCard";
import Client_MostView from "@/app/Client_MostView";

export default function JapanBlog_Blog_Page() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="sticky top-0 z-10 w-full h-20 flex justify-center items-center">
        <Header />
      </div>
      <div className="px-3 pb-40 w-full h-fit flex flex-col justify-start items-start gap-20">
        <div
          className={`w-full h-screen flex justify-center items-center transition-all duration-200`}
        >
          <div className="relative w-11/12 h-full">
            <Client_PhotoCard
              cardInfos={[
                {
                  id: 1,
                  introduce: "asd",
                  pictureSrc: "asd",
                  title: "this is the test",
                  postId: 1,
                },
                {
                  id: 2,
                  postId: 2,
                  introduce: "asd",
                  pictureSrc: "asd",
                  title: "this is the test",
                },
              ]}
            />
          </div>
        </div>
        <div
          className={`w-full h-screen flex flex-col justify-center items-center shrink-0`}
        >
          <Client_MostView />
        </div>
      </div>
    </div>
  );
}
