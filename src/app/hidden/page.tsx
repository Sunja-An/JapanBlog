"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();

  const selectedRef = React.useRef<HTMLInputElement>(null);

  const onSubmitCorrection = (e: any) => {
    e.preventDefault();
    if (selectedRef.current) {
      const value = selectedRef.current.value;
      const foundItem = data.find((item) => item.key === value);
      if (foundItem) {
        onClickWeb(value);
      } else {
        alert("you noob");
        window.location.reload();
      }
    }
  };

  const onClickWeb = (key: string) => {
    router.push(`/hidden/${key}`);
  };

  return (
    <div className="px-10 py-10 w-80 h-80 flex flex-col justify-start items-start gap-10">
      <div className="w-full h-10 flex justify-center items-center">
        <span className="font-pretendard text-3xl text-black">
          Input your Key..
        </span>
      </div>
      <div className="w-full h-60 flex justify-center items-center">
        <form className="w-full h-full flex justify-center items-center gap-5">
          <input
            type="text"
            ref={selectedRef}
            required
            className="px-5 py-5 w-5/6 h-12 hover:outline-none rounded-lg"
          />
          <button
            type="submit"
            onClick={onSubmitCorrection}
            className="w-1/6 h-12 rounded-lg bg-slate-400"
          ></button>
        </form>
      </div>
    </div>
  );
}

const data = [
  {
    name: "seiya",
    key: "eigohetakuso",
  },
  {
    name: "tanaka",
    key: "omaemajidarui",
  },
  {
    name: "riol",
    key: "MMOdaisukiojisan",
  },
  {
    name: "pomu",
    key: "ponponpuringasuki",
  },
  {
    name: "asan",
    key: "asantteiuhanasi",
  },
  {
    name: "ram",
    key: "ituasobinikuruno",
  },
];
