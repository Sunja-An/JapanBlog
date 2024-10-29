"use client";

import React from "react";

interface ITechPanelLayout {
  children: React.ReactNode;
}

export default function TechBlogPanelLayout({ children }: ITechPanelLayout) {
  return (
    <main className="w-screen flex flex-col justify-start items-start gap-40">
      <section className="px-40 pb-40 w-full flex flex-col justify-center items-start">
        {children}
      </section>
    </main>
  );
}
