"use client";

import React from "react";

interface IClientShowFAQ {
  id: number;
  title: string;
  setSelectedId: (id: number) => void;
}

export default function Client_ShowFAQ({
  id,
  title,
  setSelectedId,
}: IClientShowFAQ) {
  const onClickCard = () => {
    setSelectedId(id);
  };
  return (
    <div
      className="px-10 py-5 w-full h-16 flex justify-start items-center border rounded-2xl cursor-pointer"
      onClick={onClickCard}
    >
      <span className="font-pretendard font-semibold text-xl text-black">
        {title ?? "일본 유학가기 위해서 어떤 과정을 거쳤나요?"}
      </span>
    </div>
  );
}
