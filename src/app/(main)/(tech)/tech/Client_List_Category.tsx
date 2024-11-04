"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import NextJS from "/public/svg/logo/nextjs.svg";
import AppleMAC from "/public/svg/logo/AppleMac.svg";
import Desktop from "/public/svg/logo/Desktop.svg";
import Github from "/public/svg/logo/github.svg";
import Javascript from "/public/svg/logo/Javascript.svg";
import NestJS from "/public/svg/logo/nestjs.svg";
import OS from "/public/svg/logo/os.svg";
import reactLogo from "/public/svg/logo/react.svg";
import Structure from "/public/svg/logo/structure.svg";
import typescriptLogo from "/public/svg/logo/typescript.svg";
import nodeJsLogo from "/public/svg/logo/nodeJs.svg";
import Diary from "/public/svg/logo/Diary.svg";
import { useIfAccess } from "@/utils/user";

const svgList = [
  NextJS,
  AppleMAC,
  Desktop,
  Github,
  Javascript,
  NestJS,
  OS,
  reactLogo,
  Structure,
  typescriptLogo,
  nodeJsLogo,
  Diary,
];

export default function TechCategory() {
  const isAccess = useIfAccess();
  const [topicNum, setTopicNum] = React.useState<number>(0);

  const router = useRouter();

  const onClickTotalPost = (e: any) => {
    e.preventDefault();
    router.push("/tech");
  };

  const onClickWrite = (e: any) => {
    e.preventDefault();
    router.push("/write");
  };

  const onClickCategoryButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setTopicNum(e);
    router.push(`/tech/?tag=`);
  };

  return (
    <div className="sticky px-5 py-5 w-60 min-w-60 flex flex-col justify-start items-start border-l overflow-y-scroll gap-6">
      <div className="w-full flex justify-start items-start">
        <p className="font-pretendard font-semibold text-2xl text-black">
          Topics
        </p>
      </div>
      <div className="w-full">
        <button
          type="button"
          className="w-full h-12 flex justify-center items-center rounded-md hover:scale-105 hover:bg-slate-100 duration-300"
          onClick={onClickTotalPost}
        >
          <span className="font-pretendard font-semibold text-xl text-black">
            전체 글 보기
          </span>
        </button>
      </div>
      {!isAccess && (
        <div className="w-full">
          <button
            type="button"
            className="w-full h-12 flex justify-center items-center rounded-md hover:scale-105 hover:bg-slate-100 duration-300"
            onClick={onClickWrite}
          >
            <span className="font-pretendard font-semibold text-xl text-black">
              포스트 작성
            </span>
          </button>
        </div>
      )}
      <div className="w-full flex flex-wrap justify-center items-center gap-5">
        {svgList.map((item, key) => {
          return (
            <button
              type="button"
              name={`${item}`}
              className={`w-16 h-16 flex justify-center items-center duration-300 hover:scale-110 hover:bg-slate-100 rounded-md`}
              onClick={onClickCategoryButton}
              key={key}
            >
              <Image src={item} alt={`${item}`} width={36} height={36} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Client_List_Category() {
  return (
    <div className="">
      <div></div>
    </div>
  );
}
