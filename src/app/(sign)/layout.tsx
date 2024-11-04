import React from "react";

export default function JapanBlog_Sign_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex justify-start items-start">
      {children}
    </div>
  );
}
