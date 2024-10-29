"use client";

import Image from "next/image";
import React from "react";

import BG from "/public/image/BG.png";

interface ITechPostHeader {
  imageUrl: string;
}

export default function TechPostHeader({ imageUrl }: ITechPostHeader) {
  return (
    <section className="w-full h-fit">
      <div className="w-full h-fit overflow-hidden">
        <Image
          src={BG}
          alt={imageUrl}
          width={500}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
  );
}
