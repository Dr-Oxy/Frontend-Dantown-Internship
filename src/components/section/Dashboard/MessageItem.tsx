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
  return (
    <article
      onClick={onClick}
      className={`flex items-center pt-4 cursor-pointer`}
    >
      <div className="w-14 h-14 mr-4 rounded-full  bg-black" />

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
