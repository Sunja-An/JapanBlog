"use client";

import React from "react";

import Client_PhotoCard from "@/app/Client_PhotoCard";
import Client_Category from "@/app/Client_Category";

const totalPageNumber = 2;

export default function JapanBlog_Blog_Page() {
  const [windowObject, setWindowObject] = React.useState<Window>();
  const [currPage, setCurrPage] = React.useState<number>(0);
  const pageRef = React.useRef<HTMLDivElement[]>([]);

  // 창이 떠있지 않을 경우에는, window 를 설정하지 않음.
  React.useEffect(() => {
    if (window !== undefined) {
      setWindowObject(window);
    }
  }, []);

  const onHandlePage = (event: Event) => {
    let scroll = windowObject?.scrollY!;
    for (let i = 1; i <= totalPageNumber; i++) {
      if (
        scroll > pageRef.current[i].offsetTop - windowObject!.outerHeight / 3 &&
        scroll <
          pageRef.current[i].offsetTop -
            windowObject!.outerHeight +
            pageRef.current[i].offsetHeight
      ) {
        windowObject?.scrollTo({
          top: pageRef.current[currPage].offsetTop,
          behavior: "smooth",
        });
        break;
      }
    }
  };

  React.useEffect(() => {
    windowObject?.addEventListener("scroll", onHandlePage);
    return () => {
      windowObject?.removeEventListener("scroll", onHandlePage);
    };
  }, [windowObject]);

  return (
    <main className="px-3 pb-40 w-full h-fit flex flex-col justify-start items-start">
      <div
        className={`w-full h-screen flex justify-center items-center transition-all duration-200`}
        ref={(element) => {
          pageRef.current[1] = element!;
        }}
      >
        <div className="relative w-11/12 h-full">
          <Client_PhotoCard sort="tech" linkId={0} pictureUrl="" />
        </div>
      </div>
      <div
        className={`w-full h-screen flex flex-col justify-center items-center shrink-0`}
        ref={(element) => {
          pageRef.current[2] = element!;
        }}
      >
        <Client_Category />
      </div>
    </main>
  );
}
