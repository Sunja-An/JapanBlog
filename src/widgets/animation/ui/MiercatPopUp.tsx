"use client";

import React from "react";
import { IMG_MIERCAT } from "@/shared/constants";
import Image from "next/image";

function MiercatPopUp() {
  return (
    <div className="absolute w-full h-96 flex justify-center items-center -bottom-10">
      <div className="w-full flex justify-center items-center">
        <Image
          src={IMG_MIERCAT}
          alt="mierCat"
          className=" w-80 h-80 object-cover"
        />
      </div>
    </div>
  );
}

export { MiercatPopUp };
