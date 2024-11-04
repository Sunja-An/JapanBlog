"use client";

import useIsVisible from "@/hooks/useIsVisible";
import React from "react";

interface ITechBlogContent {
  content: string;
}

export default function Client_TechBlog_Content() {
  const contentRef = React.useRef<HTMLSpanElement>(null);
  const contentIsVisible = useIsVisible(contentRef);
  return (
    <div className="w-full h-fit flex flex-col shrink-0 flex-wrap justify-start items-start">
      <span
        ref={contentRef}
        className={`font-pretendard text-lg text-black 
          transition-opacity
          ease-in
          duration-700
          ${contentIsVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        L'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'
        esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'
        esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasdL'esadsasd
      </span>
    </div>
  );
}
