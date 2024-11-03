import React from "react";

export default function JapanBlog_Sign_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-20 py-10 w-full flex flex-col justify-start items-start">
      <div className="w-full flex justify-start items-start">{children}</div>
    </div>
  );
}
