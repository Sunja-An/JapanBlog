import { Client } from "@notionhq/client";

const notionAPI = new Client({
  auth: process.env.NOTION_KEY,
});

export { notionAPI };
