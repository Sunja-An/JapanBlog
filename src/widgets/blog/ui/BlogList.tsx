"use client";

import React from "react";

import { AnimatePresence, motion } from "motion/react";

import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlogListObject } from "@/shared/components/list";
import { isChildObjectResponse } from "@/shared";

const variants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  enter: {
    y: 0,
    duration: 1,
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,
  },
};

function BlogList({ data }: { data: ListBlockChildrenResponse }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={variants.initial}
        animate={variants.enter}
        exit={variants.exit}
        className="w-full flex flex-col justify-start items-start gap-8"
      >
        {data &&
          data.results.map((item, key) => {
            if (isChildObjectResponse(item)) {
              console.log(item);
              return (
                <BlogListObject
                  id={item.id}
                  title={item.child_page.title}
                  last_edited_time={item.last_edited_time}
                  key={key}
                />
              );
            }
          })}
      </motion.div>
    </AnimatePresence>
  );
}

export { BlogList };
