"use server";

import { n2m, notionAPI } from "@/shared";

export const NotionList = async () => {
  try {
    const res = await notionAPI.blocks.children.list({
      block_id: process.env.NOTION_PAGE_ID ?? "",
    });
    return res;
  } catch (err) {
    return false;
  }
};

export const SingleNotionData = async (id: string) => {
  try {
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);
    const response = await notionAPI.blocks.children.list({
      block_id: id,
    });
    console.log(response);
    return mdString;
  } catch (err) {
    return false;
  }
};
