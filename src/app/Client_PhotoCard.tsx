"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { TCardCarousel } from "@/types/CardCarousel";

const directionOffset = 800;

const variants = {
  enter: (direction: number) => ({
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
};

export default function Client_PhotoCard({ cardInfos }: TCardCarousel) {
  const cardCount = cardInfos.length;
  const [[page, direction], setPage] = React.useState<[number, number]>([0, 0]);
  const [activeDot, setActiveDot] = React.useState<number>(0);
  const carouselPagination = (newDirection: number) => {
    if (page + newDirection < cardCount && page + newDirection >= 0) {
      setPage([page + newDirection, 0]);
      setActiveDot(page + newDirection);
    } else if (page + newDirection === cardCount) {
      setPage([0, 0]);
      setActiveDot(0);
    } else if (page + newDirection === -1) {
      setPage([cardCount - 1, 0]);
      setActiveDot(cardCount - 1);
    }
  };

  return (
    <div className="relative w-full h-full rounded-xl bg-slate-300">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          variants={variants}
          key={page}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              type: "spring",
              stifness: 800,
              damping: 100,
              duration: 0.1,
            },
          }}
        >
          <div className="slider">
            <div className="card">
              <ShortCutButton linkId={cardInfos[page].id} />
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute px-10 py-20 w-full h-full flex justify-between items-center rounded-xl bg-inherit">
        <section className="w-1/3 h-full flex justify-start items-center">
          <button
            className="w-10 min-w-10 h-10 min-h-10 rounded-full bg-white group hover:scale-110 duration-300"
            onClick={() => carouselPagination(-1)}
          >
            <span className="group-hover:scale-110 duration-300">{"<"}</span>
          </button>
        </section>
        <section className="w-1/3 h-full flex justify-center items-end gap-10">
          {cardInfos.map((_, key: any) => {
            return (
              <button
                className={`w-6 min-w-6 h-6 min-h-6 flex justify-center items-center rounded-full bg-slate-50 hover:bg-blue-400 duration-300 ${
                  page === key ? "bg-blue-500" : ""
                }`}
                onClick={() => {
                  setPage([key, 0]);
                  setActiveDot(key - 1);
                }}
                key={key}
              />
            );
          })}
        </section>
        <section className="w-1/3 h-full flex justify-end items-center">
          <button
            className="w-10 min-w-10 h-10 min-h-10 rounded-full bg-white group hover:scale-110 duration-300"
            onClick={() => carouselPagination(1)}
          >
            <span className="group-hover:scale-110 duration-300">{">"}</span>
          </button>
        </section>
      </div>
    </div>
  );
}

interface IButton {
  linkId: number;
}

function ShortCutButton({ linkId }: IButton) {
  const router = useRouter();
  const onClickPicture = () => {
    router.push(`/${linkId}`);
  };
  return (
    <div
      className="z-20 bottom-40 left-10 absolute w-40 h-12 rounded-xl bg-white"
      onClick={onClickPicture}
    >
      <button
        type="button"
        className="relative w-full h-12 flex justify-center items-center rounded-xl bg-inherit group hover:scale-105 duration-300 overflow-hidden"
      >
        <span className="absolute left-5 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          바로가기
        </span>
        <svg
          width="12"
          height="20"
          viewBox="0 0 18 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-7 transition-transform duration-300 group-hover:translate-x-2"
        >
          <path
            d="M2.33333 0L0 2.5L12.3333 15L0 27.5L2.33333 30L17.3333 15L2.33333 0Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}
