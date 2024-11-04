"use client";

import React from "react";

import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

interface IPostEditor {
  content: string;
  onChangeContent: (content: string) => void;
}

export default function PostEditor({ content, onChangeContent }: IPostEditor) {
  const editor = useCreateBlockNote();

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    onChangeContent(markdown);
  };

  return (
    <div>
      <BlockNoteView editor={editor} />
      <div className="w-[1px] h-screen bg-slate-100 rounded-xl" />
      <div className=""></div>
    </div>
  );
}
