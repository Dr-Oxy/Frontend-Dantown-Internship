"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import { avenirRegular, avenirBlack } from "../../../../public/assets/fonts";

interface DashCardProps {
  src: string | StaticImageData;
  heading: string;
  sub: string;
}

const DashCard: React.FC<DashCardProps> = ({ src, heading, sub }) => {
  return (
    <article className="rounded-lg bg-white">
      <div className=" bg-ligthBlue h-52 flex items-center justify-center  rounded-t-lg">
        <Image height={140} width={120} src={src} alt={heading} />
      </div>

      <div className="py-5 px-7 text-center">
        <h2
          className={`${avenirBlack.className} text-darkBlue  text-base font-bold`}
        >
          {heading}
        </h2>
        <p className={`${avenirRegular.className} text-sm text-gray1 mt-2.5 `}>
          {sub}
        </p>
      </div>
    </article>
  );
};

export default DashCard;
