"use client";

import { useRef } from "react";
import { useScroll, motion, useSpring } from "motion/react";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

function BlockChanger({ block }: { block: BlockObjectResponse }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "90% 90%"],
  });

  const opacity = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const BlockConverter = () => {
    if (block.type === "heading_1") {
      return (
        <span className="font-pretendard font-bold text-3xl text-foreground">
          {block.heading_1.rich_text[0].plain_text}
        </span>
      );
    }
    if (block.type === "heading_2") {
      return (
        <span className="font-pretendard font-bold text-2xl text-foreground">
          {block.heading_2.rich_text[0].plain_text}
        </span>
      );
    }
    if (block.type === "heading_3") {
      return (
        <span className="font-pretendard font-semibold text-xl text-foreground">
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
      return (
        <div className="px-10 py-8 w-full h-48 rounded-lg flex flex-col justify-start items-start bg-slate-50">
          <span className="font-pretendard font-bold text-xl text-foreground">
            {block.bookmark.url}
          </span>
        </div>
      );
    }
    if (block.type === "bulleted_list_item") {
      return (
        <div className="w-full flex justify-start items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-foreground" />
          <span className="font-pretendard font-medium text-lg text-foreground">
            {block.bulleted_list_item.rich_text[0].plain_text}
          </span>
        </div>
      );
    }
    if (block.type === "toggle") {
      return (
        <div className="w-full flex">
          <div className="">
            <div className=""></div>
            <span className="font-pretendard font-medium text-lg text-foreground">
              {block.toggle.rich_text[0].plain_text}
            </span>
          </div>
        </div>
      );
    }
    if (block.type === "callout") {
      return;
    }
    if (block.type === "numbered_list_item") {
      return (
        <div className="w-full flex justify-start items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-foreground" />
          <span className="font-pretendard font-medium text-lg text-foreground">
            {block.numbered_list_item.rich_text[0].plain_text}
          </span>
        </div>
      );
    }
    if (block.type === "divider") {
      return (
        <div className="my-2 w-full h-[1px] rounded-full bg-foreground opacity-50" />
      );
    }
  };

  return (
    <motion.div
      className="w-full flex justify-start items-start"
      ref={containerRef}
      style={{
        opacity,
      }}
    >
      {BlockConverter()}
    </motion.div>
  );
}

export { BlockChanger };
