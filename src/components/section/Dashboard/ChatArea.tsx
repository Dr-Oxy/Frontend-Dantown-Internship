"use client";

import React, { useState } from "react";
import MessageItem from "./MessageItem";
import ChartInterface from "./ChartInterface";

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

const messages = [
  {
    id: 1,
    name: "Ironmen",
    message: "When will the event be held?",
    unRead: 1,
  },
  {
    id: 2,
    name: "Ariana Grande",
    message: "Alright then. See you there",
    unRead: 0,
  },
  {
    id: 3,
    name: "Shakira Wakawaka",
    message: "When will the event be held?",
    unRead: 0,
  },
  {
    id: 4,
    name: "Trent Alexander Arnold",
    message: "When will the event be held?",
    unRead: 0,
  },
];

interface ItemProps {
  id: number;
  name: string;
  message: string;
  unRead: number;
}
