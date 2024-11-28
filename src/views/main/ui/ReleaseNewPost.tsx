"use client";

import React from "react";

import { PostCard } from "@/widgets/card";
import { Photos } from "@/views/main/consts/cardInfos";

function ReleaseNewPost() {
  return (
    <div className="">
      <div className="title-section py-10 w-full flex justify-center items-center">
        <p className="uppercase font-Pretendard font-semibold text-4xl text-black">
          new release posts
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-10">
        {Array.from({ length: 3 }).map((_, key) => {
          return (
            <PostCard
              // photoUrl=[Photos[key]]
              title="test"
              content="test of this web"
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export { ReleaseNewPost };
