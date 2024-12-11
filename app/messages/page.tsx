"use client";

import React from "react";
import { CaretRight } from "phosphor-react";
import { useRouter } from "next/navigation";

const chats = [
  {
    id: "1",
    name: "Marcela Gutierrez",
    lastMessage: "Cuantos años tiene el perrito disculpe?",
    image: "https://images.unsplash.com/photo-1669563306643-8bff78e48942?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/messages/dm", // Route for Marcela's chat
  },
  {
    id: "2",
    name: "Yahaira Portillo",
    lastMessage: "Ojalá le encuentre dueño pronto...",
    image: "https://plus.unsplash.com/premium_photo-1664910898215-26478e2ba2bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "#", // Placeholder for others
  },
  {
    id: "3",
    name: "Fabiana Maradiaga",
    lastMessage: "Hola! Estoy interesada en el perrito",
    image: "https://images.unsplash.com/photo-1727470287932-cdd5e4784bb1?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "#", // Placeholder for others
  },
  {
    id: "4",
    name: "Gustavo Bolivar",
    lastMessage: "Yo ya tengo 3 perros en mi casa 😅",
    image: "https://images.unsplash.com/photo-1604689460199-b5ca5e45be06?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "#", // Placeholder for others
  },
];

const Chats: React.FC = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 pt-4 pb-20 px-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Chats</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Buscar"
        className="w-full p-3 border rounded-lg mb-6"
      />

      {/* Chat List */}
      <ul className="space-y-4">
        {chats.map((chat, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow cursor-pointer"
            onClick={() => router.push(chat.route)} // Navigate on click
          >
            <div className="flex items-center gap-4">
              <img
                src={chat.image}
                alt={chat.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="text-gray-800 font-semibold">{chat.name}</h2>
                <p className="text-gray-600 text-sm truncate">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
            <CaretRight size={20} color="#4B5563" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Chats;