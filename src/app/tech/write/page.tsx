// Make a New Post

"use client";
import React from "react";

import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

export default function JapanBlog_TechBlog_Write_Page() {
  const editor = useCreateBlockNote();

  return (
    <div className="w-full h-full flex flex-col jusitfy-start items-start">
      <BlockNoteView editor={editor} />
    </div>
  );
}
