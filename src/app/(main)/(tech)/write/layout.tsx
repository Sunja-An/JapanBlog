import React from "react";

import Client_Preview from "@/app/(main)/(tech)/write/Client_Preview";

export default function JapanBlog_TechBlog_Post_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex justify-center items-start divide-x">
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
