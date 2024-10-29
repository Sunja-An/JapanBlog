import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="px-20 py-20 w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
