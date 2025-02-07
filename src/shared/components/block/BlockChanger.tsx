import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

function BlockChanger({ block }: { block: BlockObjectResponse }) {
  console.log(block.type);
  if (block.type === "heading_1") {
    <span className="font-pretendard font-medium text-3xl text-foreground">
      {block.heading_1.rich_text[0].plain_text}
    </span>;
  }
  if (block.type === "heading_2") {
    return (
      <span className="font-pretendard font-medium text-2xl text-foreground">
        {block.heading_2.rich_text[0].plain_text}
      </span>
    );
  }
  if (block.type === "heading_3") {
    return (
      <span className="font-pretendard font-medium text-xl text-foreground">
        {block.heading_3.rich_text[0].plain_text}
      </span>
    );
  }
  if (block.type === "paragraph") {
    if (block.paragraph.rich_text.length === 0) {
      return <br />;
    }
    return (
      <span className="font-pretendard font-medium text-lg text-foreground">
        {block.paragraph.rich_text[0].plain_text}
      </span>
    );
  }
  if (block.type === "code") {
    return <code>{block.code.rich_text[0].plain_text}</code>;
  }
  if (block.type === "table_of_contents") {
    return <span></span>;
  }
  if (block.type === "bookmark") {
    console.log(block.bookmark);
  }
  if (block.type === "bulleted_list_item") {
    return;
  }
  if (block.type === "toggle") {
    return;
  }
  if (block.type === "callout") {
    return;
  }
  if (block.type === "numbered_list_item") {
  }

  return <div>No Supported Block</div>;
}

export { BlockChanger };
