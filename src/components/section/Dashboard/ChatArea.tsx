"use client";

import React, { useState } from "react";
import MessageItem from "./MessageItem";
import ChartInterface from "./ChartInterface";

import { messages } from "@/utils/dummyData";

const ChatArea = () => {
  const [currentChat, setCurrentChat] = useState(messages[0]);

  const handleChangeCurrent = (item: ItemProps) => {
    setCurrentChat(item);
  };

  return (
    <div>
      {messages?.map((item) => (
        <MessageItem
          onClick={() => handleChangeCurrent(item)}
          key={item.id}
          {...item}
        />
      ))}

      <div className="mt-10">
        <ChartInterface currentChat={currentChat} />
      </div>
    </div>
  );
};

export default ChatArea;

interface ItemProps {
  id: number;
  name: string;
  message: string;
  unRead: number;
}
