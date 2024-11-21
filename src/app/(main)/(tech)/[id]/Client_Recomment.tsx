"use client";

import { SmallCard } from "@/components/card/Card";
import React from "react";

export default function Client_Recomment() {
  return (
    <div className="w-full flex justify-start items-center gap-16 overflow-x-scroll">
      <SmallCard title="Next.js" id={1} content="hello?" pictureUrl="" />
      <SmallCard title="Next.js" id={1} content="hello?" pictureUrl="" />
      <SmallCard title="Next.js" id={1} content="hello?" pictureUrl="" />
      <SmallCard title="Next.js" id={1} content="hello?" pictureUrl="" />
      <SmallCard title="Next.js" id={1} content="hello?" pictureUrl="" />
      <SmallCard title="Next.js" id={1} content="hello?" pictureUrl="" />
      <SmallCard title="Next.js" id={1} content="hello?" pictureUrl="" />
    </div>
  );
}
