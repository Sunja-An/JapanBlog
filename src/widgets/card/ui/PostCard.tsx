"use client";

import React, { type ReactNode } from "react";

interface IPostCard {
  photoUrl: string;
  title: string;
  content: string;
  tag: ReactNode;
}

function PostCard(props: IPostCard) {
  return (
    <div className="px-10 py-5 w-80 h-[450px] flex flex-col justify-start items-start rounded-3xl shadow-sm">
      <section className="card-image-section"></section>
      <section className="post-title-section">
        <p className="">{props.title}</p>
      </section>
      <section className="content-section">
        <p className="">{props.content}</p>
      </section>
      <section className="tag-section w-full h-10 flex justify-start items-center">
        <div className="">{props.tag}</div>
      </section>
    </div>
  );
}

export { PostCard };
