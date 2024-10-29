import React from "react";
import Client_List_Category from "@/app/tech/list/Client_List_Category";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-40 py-20 w-full h-fit flex justify-center items-start gap-20">
      <section className="w-80 h-fit flex justify-start items-start">
        <Client_List_Category />
      </section>
      <section className="w-4/5 h-fit flex justify-start items-start">
        {children}
      </section>
    </main>
  );
}
