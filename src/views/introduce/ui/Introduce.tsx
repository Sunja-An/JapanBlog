"use client";

import React from "react";
import JapanMap from "/public/svg/map/JapanMap.svg";
import Image from "next/image";

function Introduce() {
  return (
    <div className="relative">
      <div className="absolute" />
      <section className="">
        <div>
          <span className=""></span>
        </div>
        <div className="">
          <Image src={JapanMap} alt="JapanMap" className="" />
        </div>
      </section>
      <section className="">
        <div className=""></div>
      </section>
    </div>
  );
}

export { Introduce };
