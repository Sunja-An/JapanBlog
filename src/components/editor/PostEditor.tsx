"use client";

import React from "react";

import {
  BasicTextStyleButton,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  DefaultReactSuggestionItem,
  DragHandleButton,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  FormattingToolbarController,
  getDefaultReactSlashMenuItems,
  NestBlockButton,
  SideMenu,
  SideMenuController,
  SuggestionMenuController,
  TextAlignButton,
  UnnestBlockButton,
  useCreateBlockNote,
} from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { RemoveBlockButton } from "@/components/editor/RemoveBlockButton";
import {
  BlockNoteEditor,
  filterSuggestionItems,
  PartialBlock,
} from "@blocknote/core";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const getCustomSlashMenuItems = (
  editor: BlockNoteEditor
): DefaultReactSuggestionItem[] => [...getDefaultReactSlashMenuItems(editor)];

// Custom Slash Menu item to insert a block after the current one.
const insertHelloWorldItem = (editor: BlockNoteEditor) => ({
  title: "Insert Hello World",
  onItemClick: () => {
    // Block that the text cursor is currently in.
    const currentBlock = editor.getTextCursorPosition().block;

    // New block we want to insert.
    const helloWorldBlock: PartialBlock = {
      type: "paragraph",
      content: [{ type: "text", text: "Hello World", styles: { bold: true } }],
    };

    // Inserting the new block after the current one.
    editor.insertBlocks([helloWorldBlock], currentBlock, "after");
  },
  aliases: ["helloworld", "hw"],
  group: "Other",
  icon: <HiOutlineGlobeAlt size={18} />,
  subtext: "Used to insert a block with 'Hello World' below.",
});

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
    <BlockNoteView editor={editor} theme={"light"}>
      <SuggestionMenuController
        triggerCharacter={"/"}
        // Replaces the default Slash Menu items with our custom ones.
        getItems={async (query) =>
          filterSuggestionItems(getCustomSlashMenuItems(editor), query)
        }
      />
      <FormattingToolbarController
        formattingToolbar={() => (
          <FormattingToolbar>
            <BlockTypeSelect key={"blockTypeSelect"} />

            <FileCaptionButton key={"fileCaptionButton"} />
            <FileReplaceButton key={"replaceFileButton"} />

            <BasicTextStyleButton
              basicTextStyle={"bold"}
              key={"boldStyleButton"}
            />
            <BasicTextStyleButton
              basicTextStyle={"italic"}
              key={"italicStyleButton"}
            />
            <BasicTextStyleButton
              basicTextStyle={"underline"}
              key={"underlineStyleButton"}
            />
            <BasicTextStyleButton
              basicTextStyle={"strike"}
              key={"strikeStyleButton"}
            />
            {/* Extra button to toggle code styles */}
            <BasicTextStyleButton
              key={"codeStyleButton"}
              basicTextStyle={"code"}
            />

            <TextAlignButton
              textAlignment={"left"}
              key={"textAlignLeftButton"}
            />
            <TextAlignButton
              textAlignment={"center"}
              key={"textAlignCenterButton"}
            />
            <TextAlignButton
              textAlignment={"right"}
              key={"textAlignRightButton"}
            />

            <ColorStyleButton key={"colorStyleButton"} />

            <NestBlockButton key={"nestBlockButton"} />
            <UnnestBlockButton key={"unnestBlockButton"} />

            <CreateLinkButton key={"createLinkButton"} />
          </FormattingToolbar>
        )}
      />
      <SideMenuController
        sideMenu={(props) => (
          <SideMenu {...props}>
            {/* Button which removes the hovered block. */}
            <RemoveBlockButton {...props} />
            <DragHandleButton {...props} />
          </SideMenu>
        )}
      />
    </BlockNoteView>
  );
}
