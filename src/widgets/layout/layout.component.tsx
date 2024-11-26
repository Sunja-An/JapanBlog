import React, { type ReactNode } from "react";

import { Header } from "@/widgets/layout/header/index";

function LayoutIncludeHeader({ children }: { children: ReactNode }) {
  return (
    <main className="absolute w-screen">
      <Header />
      <div className="grid-section w-3/4">{children}</div>
    </main>
  );
}

export { LayoutIncludeHeader };
