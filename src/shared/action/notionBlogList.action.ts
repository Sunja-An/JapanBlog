"use server";

import { notionAPI } from "@/shared";

export const NotionFrontEndBlogDatabase = async () => {
  try {
    const res = await notionAPI.databases.query({
      database_id: process.env.NOTION_FRONTEND_DATABASE_ID ?? "",
    });
    return res;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const SingleNotionData = async (id: string) => {
  try {
    const response = await notionAPI.blocks.children.list({
      block_id: id,
    });
    return response;
  } catch (err) {
    console.error(err);
    return false;
  }
};
