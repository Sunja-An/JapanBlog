"use client";

import React from "react";

import { AnimatePresence, motion } from "motion/react";

import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlogListObject } from "@/shared/components/list";
import { isDatabaseObjectResponse } from "@/shared/utils/classValidator";
import { isDatabaseTitlePropertyType } from "@/shared";
import { DatabaseTitlePropertyType } from "@/entity/database/database";

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

function BlogList({ data }: { data: QueryDatabaseResponse }) {
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
            if (isDatabaseObjectResponse(item)) {
              if (item.properties["이름"].type === "title") {
                if (
                  isDatabaseTitlePropertyType(item.properties["이름"].title[0])
                ) {
                  const propData = item.properties["이름"]
                    .title[0] as DatabaseTitlePropertyType;
                  return (
                    <BlogListObject
                      id={item.id}
                      title={propData.plain_text ?? "undefined"}
                      last_edited_time={item.last_edited_time}
                      key={key}
                    />
                  );
                }
              }
            }
          })}
      </motion.div>
    </AnimatePresence>
  );
}

export { BlogList };
