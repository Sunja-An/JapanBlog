"use client";

import React from "react";

import Client_PhotoCard from "@/app/Client_PhotoCard";
import Client_Category from "@/app/Client_Category";

export default function JapanBlog_Blog_Page() {
  const [isScrollDown, setIsScrollDown] = React.useState<boolean>(false);
  React.useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currScrollY = window.scrollY;
      if (currScrollY > prevScrollY) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      prevScrollY = currScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="px-3 pb-40 w-full h-fit flex flex-col justify-start items-start">
      <section
        className={`w-full h-screen flex justify-center items-center transition-all duration-200 ${
          isScrollDown ? "" : ""
        }`}
      >
        <div className="relative w-11/12 h-full">
          <Client_PhotoCard sort="tech" linkId={0} pictureUrl="" />
        </div>
      </section>
      <section
        className={`w-full h-screen flex flex-col justify-center items-center shrink ${
          isScrollDown ? "" : ""
        }`}
      >
        <Client_Category />
      </section>
    </main>
  );
}
