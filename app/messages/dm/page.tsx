"use client";

import React, { useState } from "react";
import { ArrowLeft, PaperPlaneTilt } from "phosphor-react";
import { useRouter } from "next/navigation";

const messages = [
  { sender: "Marcela Gutierrez", text: "Hola cómo estás?", time: "Jueves 11:40am" },
  { sender: "You", text: "Bien y usted?", time: "Jueves 11:41am" },
  {
    sender: "Marcela Gutierrez",
    text: "Tranquila, fíjese que me interesa el perrito",
    time: "Jueves 11:44am",
  },
  { sender: "You", text: "Claro! Dígame que quiere saber de él", time: "Jueves 11:45am" },
  { sender: "Marcela Gutierrez", text: "Cuantos años tiene el perrito disculpe?", time: "Friday 2:20pm" },
];

const ChatDM: React.FC = () => {
  const [newMessage, setNewMessage] = useState("");
  const router = useRouter();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      messages.push({ sender: "You", text: newMessage, time: "Ahora" });
      setNewMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-20">
      {/* Page Title */}
      <div className="flex items-center px-4 mb-4">
        <button
          onClick={() => router.push("/messages")}
          aria-label="Back to Chats"
          className="mr-3"
        >
          <ArrowLeft size={24} color="#ED7600" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1669563306643-8bff78e48942?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Marcela Gutierrez"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">Marcela Gutierrez</h1>
        </div>
      </div>

      {/* Messages */}
      <div className="px-4 space-y-4 ">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === "You"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 text-right">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="fixed pb-24 bottom-0 left-0 w-full bg-white p-4 flex items-center gap-4">
        <input
          type="text"
          placeholder="Message"
          className="flex-1 p-3 border rounded-lg"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600"
        >
          <PaperPlaneTilt size={20} />
        </button>
      </div>
    </main>
  );
};

export default ChatDM;