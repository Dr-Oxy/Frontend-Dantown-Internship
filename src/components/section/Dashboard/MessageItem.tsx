"use client";
import React from "react";
import {
  avenirBold,
  avenirMedium,
  avenirRegular,
} from "../../../../public/assets/fonts";

const MessageItem = ({
  id,
  name,
  message,
  unRead,
  onClick,
}: MessageItemProps) => {
  const colors = ["bg-lightPurple", "bg-ligthBlue2", "bg-lightRed2"];
  const bgColor = colors[id % colors.length];

  return (
    <article
      onClick={onClick}
      className={`flex mb-4 items-center cursor-pointer`}
    >
      <div
        className={` h-10 w-10 md:w-14 md:h-14 rounded-full mr-4 rounded-ful bgColor ${bgColor} `}
      />

      <div
        className={`  flex-1 flex items-center ${
          id !== 4 && "border-b border-[#D6DCE0] pb-4"
        } `}
      >
        <div className="flex-1">
          <h4
            className={`${avenirBold.className} font-bold text-darkBlue text-base`}
          >
            {name}
          </h4>

          <p className={`${avenirMedium.className} text-sm text-gray1`}>
            {message}
          </p>
        </div>

        {unRead > 0 && (
          <div
            className={`${avenirRegular} h-6 w-6 rounded-full ml-6 bg-red text-xs text-white flex items-center justify-center`}
          >
            {unRead}
          </div>
        )}
      </div>
    </article>
  );
};

export default MessageItem;

interface MessageItemProps {
  id: number;
  name: string;
  message: string;
  unRead: number;
  onClick: () => void;
}
