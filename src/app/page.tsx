import React from "react";

import { LayoutIncludeHeader } from "@/widgets/layout/index";
import { Introduce, ReleaseNewPost, TechStack } from "@/views/main/index";

export default function JapanBlog_Blog_Page() {
  return (
    <LayoutIncludeHeader>
      <div className="w-full flex flex-col justify-center items-center">
        <Introduce />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <TechStack />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <ReleaseNewPost />
      </div>
    </LayoutIncludeHeader>
  );
}
