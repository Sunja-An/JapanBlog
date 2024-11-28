import React from "react";
import { PostOption } from "@/widgets/postOption/index";
import { SearchBar } from "@/widgets/searchBar/index";

export default function JapanBlog_TechBlog_List_Page() {
  return (
    <div className="w-full flex justify-start items-center">
      <div className="w-7/12 flex flex-col justify-start items-center">
        <p className=""></p>
        <div className="">
          <SearchBar />
        </div>
      </div>
      <div className="w-5/12 flex justify-center items-center">
        <PostOption />
      </div>
    </div>
  );
}
