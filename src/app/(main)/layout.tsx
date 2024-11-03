import React from "react";

import Header from "@/layout/header/Header";

export default function JapanBlog_Main_Page_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="sticky top-0 z-10 w-full h-20 flex justify-center items-center">
        <Header />
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        {children}
      </div>
    </div>
  );
}
