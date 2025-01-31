import { BlogLayout } from "@/shared";
import { type ReactNode } from "react";

export default function MyBlogListLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <BlogLayout>{children}</BlogLayout>;
}
