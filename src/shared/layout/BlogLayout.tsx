import { type ReactNode } from "react";
import { Header } from "@/shared";

function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative max-w-screen min-h-screen w-screen flex flex-col justify-start items-start">
      <Header />
      <section className="mt-32 px-60 w-full flex justify-center items-center gap-4">
        {children}
      </section>
    </main>
  );
}

export { BlogLayout };
