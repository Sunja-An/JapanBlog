"use client";

import { BigCard } from "@/components/card/Card";
import React from "react";

export default function Client_MostView() {
  return (
    <div className="w-11/12 h-full flex flex-col justify-start items-start">
      <section className="title-wrapper w-full flex justify-center items-center">
        <p className="font-Pretendard font-bold text-4xl text-black">
          Most Viewed Posts
        </p>
      </section>
      <section className="card-wrapper w-full flex flex-col justify-start items-start gap-10">
        <div className="card-individual-wrapper w-full flex justify-center items-center">
          <BigCard
            id={1}
            introduce="this is the test post on the final project"
            picture=""
            title="this is the title"
            viewCount={5}
          />
        </div>
        <div className="card-individual-wrapper w-full flex justify-center items-center">
          <BigCard
            id={1}
            introduce="this is the test post on the final project"
            picture=""
            title="this is the title"
            viewCount={3}
          />
        </div>
      </section>
    </div>
  );
}
