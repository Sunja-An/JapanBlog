"use client";

import BlogAPI from "@/server/Axios_instance";
import React from "react";
import Image from "next/image";

import NotFilledHeart from "/public/svg/btns/heart_icon.svg";
import FilledHeart from "/public/svg/btns/heart_filled_icon.svg";
import Share from "/public/svg/btns/share.svg";

interface IShareBtns {
  id: number;
}

export default function Client_ShareBtns({ id }: IShareBtns) {
  const [like, setLike] = React.useState<boolean>(false);
  const onClickLike = (e: any) => {
    e.preventDefault();
    setLike((prev) => !prev);
  };
  const onClickMessage = (e: any) => {
    e.preventDefault();
  };
  const onClickShare = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-40 flex flex-col justify-center items-center gap-10">
      <div className="w-full h-1 bg-gray-50 rounded-lg" />
      <div className="w-full flex justify-center items-center gap-10">
        <button
          type="button"
          onClick={onClickLike}
          className="group w-20 h-20 flex flex-col justify-center items-center border rounded-full duration-300"
        >
          {like ? (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Image
                src={NotFilledHeart}
                alt="notFilledHeart"
                width={30}
                height={30}
                className="group-hover:scale-110 duration-300"
              />
              <span className="font-pretendard font-semibold text-lg text-black">
                5
              </span>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Image
                src={FilledHeart}
                alt="FilledHeart"
                width={25}
                height={25}
                className="group-hover:scale-110 duration-300"
              />
              <span className="font-pretendard font-semibold text-lg text-black">
                5
              </span>
            </div>
          )}
        </button>
        <button
          type="button"
          onClick={onClickShare}
          className="group w-20 h-20 flex flex-col justify-center items-center border rounded-full"
        >
          <Image
            src={Share}
            alt="Share"
            width={30}
            height={30}
            className="group-hover:scale-110 duration-300"
          />
        </button>
      </div>
    </div>
  );
}

import { GlobalErrorType } from "@/types/ErrorType";

const PostLike = async (id: number): Promise<GlobalErrorType> => {
  try {
    const res = await BlogAPI.post(`/${id}`);
    if (res.status === 200) {
      return 200;
    } else {
      return false;
    }
  } catch (err: any) {
    if (err.status === 400) {
      alert("서버 문제입니다.");
      return 400;
    } else if (err.status === 500) {
      alert("서버 문제입니다.");
      return 500;
    } else {
      return false;
    }
  }
};
