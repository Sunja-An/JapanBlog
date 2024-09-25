"use client";

import React from "react";

export default function TechBlogPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
