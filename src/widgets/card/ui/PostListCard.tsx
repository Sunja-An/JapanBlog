"use client";

import Image from "next/image";
import React, { type ReactNode } from "react";

interface IPostListCard {
  title: string;
  content: string;
  ImageUrl: string;
  tag: ReactNode[];
}

function PostListCard(props: IPostListCard) {
  return (
    <div className="px-10 py-5 w-full flex justify-start items-center rounded-3xl">
      <section className="">
        <Image
          src={props.ImageUrl}
          alt={props.ImageUrl}
          className="rounded-3xl"
        />
      </section>
      <section className="text-box flex flex-col justify-start items-start">
        <div className="title-box flex justify-start items-center">
          <p className="">{props.title}</p>
        </div>
        <div className="content-box flex justify-start items-center">
          <span className="">{props.content}</span>
        </div>
        <div className="w-full">
          {props.tag.map((item, key) => {
            return (
              <div className="w-fit h-fit" key={key}>
                {item}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export { PostListCard };
