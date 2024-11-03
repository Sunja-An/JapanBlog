import React from "react";
import TechBlogPanelLayout from "@/layout/techBlog";
import Client_List_Category from "@/app/(main)/tech/Client_List_Category";

export default function JapanBlog_Tech_Blog_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TechBlogPanelLayout>
      <main className="py-10 w-full h-fit flex justify-center items-start gap-20">
        <section className="w-11/12 h-fit flex justify-start items-start">
          {children}
        </section>
        <aside className="w-60 flex flex-grow-0 flex-shrink-0 xl:block justify-start items-start md:hidden">
          <Client_List_Category />
        </aside>
      </main>
    </TechBlogPanelLayout>
  );
}
