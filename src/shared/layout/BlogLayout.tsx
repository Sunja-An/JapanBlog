import { type ReactNode } from "react";
import { Header } from "@/shared";

function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-screen min-h-screen w-screen flex flex-col justify-start items-start">
      <section className="max-w-screen w-screen flex justify-start items-center">
        <Header />
      </section>
      <section className="px-60 w-full flex justify-center items-center gap-4">
        {children}
      </section>
    </main>
  );
}

export { BlogLayout };
