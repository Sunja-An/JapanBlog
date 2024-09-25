"use client";

import React from "react";

export default function CasualBlogPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="">{children}</div>
    </div>
  );
}
