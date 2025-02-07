import { SingleBlogView } from "@/views/blog";
import React from "react";

export default async function MyBlogNotionSinglePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  if (typeof window === undefined) {
    return (
      <div className="">
        <div className="">Page Loading</div>
      </div>
    );
  }

  const { id, title } = (await searchParams) ?? {
    id: "0",
    title: "",
  };
  if (
    Array.isArray(id) ||
    id === undefined ||
    Array.isArray(title) ||
    title == undefined
  ) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="font-pretendard font-bold xl:text-5xl lg:text-3xl md:text-xl text-black">
          URL 이 잘못되었습니다.
        </span>
      </div>
    );
  }
  return <SingleBlogView id={id} title={title} />;
}
