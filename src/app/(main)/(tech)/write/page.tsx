// Make a New Post
"use client";

import React from "react";

import Image from "next/image";

// * Components
import { Editor } from "@/components/editor/DynamicEditor";
import Client_WriteOptionBar from "@/app/(main)/(tech)/write/Client_WriteOptionBar";

// * Static Data
import BackTic from "/public/svg/btns/backtic.svg";
import { useRouter } from "next/navigation";

export default function JapanBlog_TechBlog_Write_Page() {
  const router = useRouter();
  const [title, setTitle] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement>(null);

  const [content, setContent] = React.useState<string>("Insert your text!");

  const onChangeContent = (content: string) => {
    setContent(content);
  };

  const onClickBackTic = (e: any) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="relative px-28 py-20 w-full h-full flex jusitfy-start items-start gap-6">
      <Image
        src={BackTic}
        alt="BackTic"
        width={30}
        height={30}
        onClick={onClickBackTic}
        className="absolute left-10 top-10 cursor-pointer"
      />
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="post-header w-full flex justify-start items-start">
          <textarea
            name="title"
            placeholder="Title"
            required
            className="px-5 py-5 w-full h-20 resize-none"
          />
        </div>
        <div className="w-full h-[1px] bg-slate-100 rounded-lg" />
        <div className="w-full">
          <Editor onChangeContent={onChangeContent} content={content} />
        </div>
        <Client_WriteOptionBar />
      </div>
    </div>
  );
}
