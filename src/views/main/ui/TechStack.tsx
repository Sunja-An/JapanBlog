"use client";

import React from "react";

import {
  TechFrontStackList,
  TechBackStackList,
} from "@/widgets/techStackList/index";
import { ProjectExplain } from "@/widgets/projectExplain/index";

function TechStack() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-20">
      <div className="w-full flex justify-center items-center">
        <p className="font-Pretendard font-bold text-4xl text-black">
          TECH STACK & Projects
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-10">
        <div className="w-1/2 flex justify-center items-center">
          <TechFrontStackList />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <TechBackStackList />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <ProjectExplain />
      </div>
    </div>
  );
}

export { TechStack };
