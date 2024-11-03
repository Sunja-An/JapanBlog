"use client";

import React from "react";
import Client_ShowFAQ from "@/app/(main)/FAQ/Client_ShowFAQ";

export default function JapanBlog_FAQ_Page() {
  const [selectedId, setSelectedId] = React.useState<number>(0);
  return (
    <main className="w-screen py-20 h-full flex justify-start items-start">
      <section className="mx-10 w-1/2 h-full flex flex-col justify-start items-start">
        <div className="px-20 py-10 w-full h-full flex flex-col justify-start items-start border gap-10 overflow-y-scroll">
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
          <Client_ShowFAQ id={0} title="hi" setSelectedId={setSelectedId} />
        </div>
      </section>
      <section className="mx-10 w-1/2 h-full flex flex-col justify-start items-start">
        <div className="px-20 w-full h-full flex flex-col justify-center items-center border"></div>
      </section>
    </main>
  );
}
