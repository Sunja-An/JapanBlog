"use client";

import React from "react";
import Image from "next/image";

import Up from "/public/svg/btns/upArrow.svg";

export default function UpBtn() {
  return (
    <button type="button" className="fixed right-5 bottom-5">
      <Image src={Up} alt="UpButton" width={25} height={25} />
    </button>
  );
}
