"use client";

import React from "react";

interface ICasualBlogLayout {
  carouselComponent: React.ReactNode[];
  children: React.ReactNode;
}

export default function CasualBlogPanelLayout({
  carouselComponent,
  children,
}: ICasualBlogLayout) {
  return (
    <main className="w-screen h-full flex flex-col justify-center items-center">
      <section className="">
        {carouselComponent.map((item, key) => {
          return (
            <div className="" key={key}>
              {item}
            </div>
          );
        })}
      </section>
      <section className="">
        <div className="">{children}</div>
      </section>
    </main>
  );
}
