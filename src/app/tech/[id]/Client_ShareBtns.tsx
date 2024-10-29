"use client";

import BlogAPI from "@/server/Axios_instance";
import React from "react";
import Image from "next/image";

import NotFilledHeart from "/public/svg/btns/heart_icon.svg";
import FilledHeart from "/public/svg/btns/heart_filled_icon.svg";
import Message from "/public/svg/btns/message.svg";
import Share from "/public/svg/btns/share.svg";

interface IShareBtns {
  id: number;
}

export default function Client_ShareBtns({ id }: IShareBtns) {
  const onClickLike = (e: any) => {
    e.preventDefault();
  };
  const onClickMessage = (e: any) => {
    e.preventDefault();
  };
  const onClickShare = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="">
        <button type="button" onClick={onClickLike}>
          <Image
            src={NotFilledHeart}
            alt="notFilledHeart"
            width={30}
            height={30}
          />
        </button>
        <button type="button" onClick={onClickShare}>
          <Image src={Share} alt="Share" width={30} height={30} />
        </button>
        <button type="button" onClick={onClickMessage}>
          <Image src={Message} alt="Message" width={30} height={30} />
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
