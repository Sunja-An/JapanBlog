"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Drawer from "/public/svg/write/drawer.svg";
import Sent from "/public/svg/write/sent.svg";

export default function Client_WriteOptionBar() {
  const router = useRouter();
  const onClickDrawer = async () => {
    router.push("/tech");
  };
  return (
    <div className="fixed left-0 top-1/2 w-20 h-60 flex flex-col justify-center items-center gap-10">
      <div
        className="w-20 h-20 rounded-full flex justify-center items-center bg-slate-100 group"
        onClick={onClickDrawer}
      >
        <Image
          src={Drawer}
          alt="drawer"
          width={30}
          height={30}
          className="group-hover:scale-110 duration-300"
        />
      </div>
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-slate-100 group">
        <Image
          src={Sent}
          alt="sent"
          width={30}
          height={30}
          className="group-hover:scale-110 duration-300"
        />
      </div>
    </div>
  );
}

interface IModalPublicPost {
  title: string;
  content: string;
  isModal: boolean;
  setIsModal: (isModal: boolean | ((isModal: boolean) => boolean)) => void;
}

export function ModalPublicPost({
  title,
  content,
  isModal,
  setIsModal,
}: IModalPublicPost) {
  const router = useRouter();

  const [thunbNail, setThumbNail] = React.useState<File | null>(null);
  const imageRef = React.useRef<HTMLInputElement>(null);

  const onChangeFile = () => {};

  const onClickImageBtn = () => {
    if (!imageRef.current) {
      return false;
    }
    imageRef.current.click();
  };

  const onClickCancel = () => {
    setIsModal((prev) => !prev);
  };

  const onClickPublish = async () => {
    const formdata = new FormData();
    const res = await PostMyPublish({ body: formdata });
    if (res === 201) {
      router.push("/tech");
    } else {
      alert("파일 형식이 올바르지 않습니다!");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center gap-5">
      <div className="w-1/2 h-full flex justify-center items-center">
        <span className="">썸네일 미리보기</span>
        <div className="w-full flex justify-center items-center">
          <div className="">
            <button
              type="button"
              onClick={onClickImageBtn}
              className="w-40 h-14 flex justify-center items-center"
            >
              {/* <Image> */}
            </button>
            <input type="file" ref={imageRef} className="hidden" />
          </div>
        </div>
      </div>
      <div className="w-[1px] h-full bg-slate-50 rounded-xl" />
      <div className="w-1/2 h-full flex justify-center items-center">
        <button
          type="button"
          name="cancel"
          onClick={onClickCancel}
          className=""
        >
          <span className="font-pretendard font-semibold text-lg text-black">
            Cancel
          </span>
        </button>
        <button
          type="button"
          name="publish"
          onClick={onClickPublish}
          className=""
        >
          <span className="font-pretendard font-semibold text-lg text-black">
            Publish
          </span>
        </button>
      </div>
    </div>
  );
}

//  Post Action

// * API
import BlogAPI from "@/server/Axios_instance";

// * Type
import { GlobalErrorType } from "@/types/ErrorType";

interface IPostPublishing {
  body: FormData;
}

const PostMyPublish = async ({
  body,
}: IPostPublishing): Promise<GlobalErrorType> => {
  try {
    const res = await BlogAPI.post("/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status === 201) {
      return res.data;
    } else {
      return false;
    }
  } catch (err: any) {
    if (err.status === 400) {
      return 400;
    } else {
      return 500;
    }
  }
};

const PostMyTempPublish = async (): Promise<GlobalErrorType> => {
  try {
    const res = await BlogAPI.post("/");
    if (res.status === 201) {
      return res.data;
    } else {
      return false;
    }
  } catch (err: any) {
    if (err.status === 400) {
      return 400;
    } else {
      return 500;
    }
  }
};
