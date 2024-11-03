"use client";

import React from "react";

import { TPagination } from "@/types/PaginationType";

export default function Pagination({
  currPage,
  onChangePage,
  showItems,
  totalPage,
}: TPagination) {
  // Calculated Page
  let progressPage = totalPage / showItems + 1;

  // onClick Functions
  const onClickPrev = (e: any) => {
    e.preventDefault();
    if (currPage < progressPage && currPage > 1) {
      onChangePage((curr: number) => curr - 1);
    }
  };

  const onClickNext = (e: any) => {
    e.preventDefault();
    if (currPage < progressPage && currPage >= 1) {
      onChangePage((curr: number) => curr + 1);
    }
  };

  return (
    <div className="w-full h-12 flex justify-center items-center">
      <button
        type="button"
        className={`${
          currPage >= progressPage ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={onClickPrev}
      >
        {"<"}
      </button>
      <div className="">
        {/* show the Pages to click */}
        {Array.from({ length: progressPage }, (_, index) => (
          <button type="button" className="">
            <span className="font-pretendard font-normal text-black">
              {index + 1}
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className={`${
          currPage <= progressPage ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={onClickNext}
      >
        {">"}
      </button>
    </div>
  );
}
