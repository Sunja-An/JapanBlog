import { type ReactNode } from "react";

import { LayoutIncludeHeader } from "@/widgets/layout/index";

export default function layout({ children }: { children: ReactNode }) {
  return <LayoutIncludeHeader>{children}</LayoutIncludeHeader>;
}
