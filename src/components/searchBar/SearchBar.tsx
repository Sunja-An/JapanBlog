"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// * Type
import { GlobalErrorType } from "@/types/ErrorType";

// * Server
import BlogAPI from "@/server/Axios_instance";

// * Static Data
import SearchIcon from "/public/svg/btns/searchIcon.svg";

export default function SearchBar() {
  const router = useRouter();
  const searchRef = React.useRef<HTMLInputElement>(null);
  const onSearchBar = async () => {
    if (searchRef.current) {
      const value = await PostSearchValue({
        keyValue: searchRef.current?.value,
      });
    } else {
      router.push("/tech");
    }
  };
  return (
    <div className="relative w-full flex justify-center items-center">
      <Image
        src={SearchIcon}
        alt="SearchIcon"
        width={25}
        height={25}
        className="absolute left-5"
      />
      <input
        type="text"
        ref={searchRef}
        placeholder="Search"
        onKeyDown={(e) => {
          if (e.key === "enter") {
            onSearchBar();
          }
        }}
        className="px-16 py-3 w-full h-14 rounded-xl border"
      />
    </div>
  );
}

interface ISearch {
  keyValue: string;
}

const PostSearchValue = async ({
  keyValue,
}: ISearch): Promise<GlobalErrorType> => {
  try {
    const res = await BlogAPI.post("");
    if (res.status === 200) {
      return res.data;
    } else {
      return false;
    }
  } catch (err) {
    return 404;
  }
};
