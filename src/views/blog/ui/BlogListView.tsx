import React from "react";
import { NotionList } from "@/views/blog/api/notionBlogList.action";

async function BlogListView() {
  const data = await NotionList();
  return <div className=""></div>;
}

export { BlogListView };
