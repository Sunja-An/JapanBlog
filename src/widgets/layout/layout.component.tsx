import React, { type ReactNode } from "react";

import { Header } from "@/widgets/layout/header/index";

function LayoutIncludeHeader({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col justify-start items-center">
      <section className="relative container">
        <Header />
        <div className="mx-20">{children}</div>
      </section>
    </main>
  );
}

export { LayoutIncludeHeader };
