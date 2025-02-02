"use client";

import Link from "next/link";
import React from "react";

type BlogListObjectType = {
  id: string;
  title?: string;
  last_edited_time?: string;
};

function BlogListObject({ id, title, last_edited_time }: BlogListObjectType) {
  return (
    <Link href={`/blog/notion?id=${id}`} className="w-full">
      <div className="w-full flex justify-between items-center">
        <span className="font-pretendard font-semibold text-lg text-white">
          {title ?? "test"}
        </span>
        <span className="font-pretendard font-semibold text-sm text-white">
          {last_edited_time ? last_edited_time.split("T")[0] : "No Data"}
        </span>
      </div>
    </Link>
  );
}

export { BlogListObject };
