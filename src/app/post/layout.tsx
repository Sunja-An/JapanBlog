"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function JapanBlog_Post_List_Page() {
  const router = useRouter();
  React.useEffect(() => {
    if (!Check_Authorization()) {
      alert("페이지 접근 권한이 없습니다.");
      router.push("/");
    }
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
}

import Cookies from "js-cookie";

const Check_Authorization = () => {
  try {
    if (Cookies.get("access-token")) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
