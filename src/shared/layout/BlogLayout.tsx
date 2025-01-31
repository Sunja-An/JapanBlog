import { type ReactNode } from "react";

function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-screen min-h-screen w-screen flex flex-col justify-start items-start">
      <section></section>
      <section className="">{children}</section>
    </main>
  );
}

export { BlogLayout };
