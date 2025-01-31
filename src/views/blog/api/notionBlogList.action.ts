"use server";

import { notionAPI } from "@/shared";

export const NotionList = async () => {
  try {
    const res = await notionAPI.blocks.children.list({
      block_id: process.env.NOTION_PAGE_ID ?? "",
    });
    console.log(res);
    return res;
  } catch (err) {
    return false;
  }
};
