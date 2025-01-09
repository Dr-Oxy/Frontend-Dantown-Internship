"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, Smile } from "lucide-react";
import { avenirRegular, avenirBlack } from "../../../../public/assets/fonts";
import { sendIcon } from "../../../../public/assets/icons";

const ChartInterface = ({ currentChat }: { currentChat: Chat }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "When will the event be held?",
      time: "10:22 am",
      sender: "friend",
    },
    { text: "Tommorow at 4 pm", time: "10:24 am", sender: "user" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "user",
      },
    ]);
    setInput("");
  };

  return (
    <div
      className={`bg-white pb-8 lg:pb-0 rounded-lg shadow-sm ${avenirRegular.className}`}
    >
      <div className="bg-cyan4 py-4 px-6 rounded-t-2xl flex justify-between items-center">
        <h4
          className={`${avenirBlack.className} text-white text-base font-black`}
        >
          {currentChat?.name}
        </h4>

        <button className="text-white hover:bg-teal-500 rounded-full p-1">
          <X size={24} />
        </button>
      </div>

      <div className="p-4 space-y-4 h-48  bg-white overflow-y-auto">
        <div className="bg-[#072E75] flex items-center justify-center text-xs text-white px-4 py-1 rounded-full w-fit mx-auto">
          Today
        </div>

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex items-end gap-x-2 mb-4">
              <div
                className={`rounded-lg p-2.5 ${
                  message.sender === "user"
                    ? "bg-cyan4 text-white order-2"
                    : " bg-ligthBlue text-cyan4 order-1"
                } text-xs max-w-[70%]`}
              >
                {message.text}
              </div>
              <span
                className={`${
                  message.sender === "user" ? "order-1" : "order-2"
                } text-gray1 text-xs mt-1`}
              >
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t flex items-center gap-x-2">
        <div className="flex-1 flex items-center gap-2 bg-white border-[0.5px] border-[#D6DCE0] rounded-full px-4 py-3">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-1 bg-transparent outline-none text-xs"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="text-gray-400 hover:text-gray-600">
            <Smile size={24} />
          </button>
        </div>

        <button
          onClick={handleSend}
          className="bg-red h-10 w-10 text-white flex items-center justify-center rounded-full"
        >
          <Image src={sendIcon} height={16} width={16} alt="send message" />
        </button>
      </div>
    </div>
  );
};

export default ChartInterface;

interface Message {
  text: string;
  time: string;
  sender: "user" | "friend";
}

interface Chat {
  name: string;
}
