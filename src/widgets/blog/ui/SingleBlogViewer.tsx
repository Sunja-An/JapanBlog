"use client";

import { BlockChanger, isBlockObjectResponse } from "@/shared";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

function SingleBlogViewer({
  items,
}: {
  items: BlockObjectResponse[] | PartialBlockObjectResponse[];
}) {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start origin-top gap-2">
      {items.map((item, key) => {
        if (isBlockObjectResponse(item)) {
          return <BlockChanger block={item} key={key} />;
        }
      })}
    </div>
  );
}

export { SingleBlogViewer };
