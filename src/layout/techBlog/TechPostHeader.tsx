"use client";

import Image from "next/image";
import React from "react";

interface ITechPostHeader {
  imageUrl: string;
}

export default function TechPostHeader({ imageUrl }: ITechPostHeader) {
  return (
    <section className="w-full h-fit">
      <div className="w-full h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageUrl}
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
