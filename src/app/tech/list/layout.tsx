import React from "react";
import Client_List_Category from "@/app/tech/list/Client_List_Category";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="py-10 w-full h-fit flex justify-center items-start gap-20">
      <section className="w-11/12 h-fit flex justify-start items-start">
        {children}
      </section>
      <section className="w-60 h-fit flex justify-start items-start">
        <Client_List_Category />
      </section>
    </main>
  );
}
