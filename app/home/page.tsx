"use client";

import React from "react";
import Post from "@/components/Post";

const posts = [
  {
    imageSrc: "https://via.placeholder.com/412x240",
    title: "Mantenimiento de la Piscina",
    description:
      "Saludos vecinos, por este medio les informamos que la siguiente semana durante la noche la piscina estará en mantenimiento...",
    tag: "Anuncio Oficial",
    category: "Residentes El Sauce",
  },
  {
    imageSrc: "https://via.placeholder.com/412x240",
    title: "Recolección de Basura",
    description:
      "Se les informa que la recolección de basura se realizará el miércoles en lugar del jueves debido a un feriado.",
    tag: "Aviso Importante",
    category: "Patronato Villas Naranja",
  },
  {
    imageSrc: "https://via.placeholder.com/412x240",
    title: "Asamblea General",
    description:
      "La asamblea general de vecinos se llevará a cabo este sábado a las 6 PM en el salón comunitario.",
    tag: "Evento Comunitario",
    category: "Comunidad Los Cipreses",
  },
];

const Home: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen  pb-20">
      <div className="mb-6 p-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Buen día, <span className="text-orange-600">Carlos 🌤️</span>
        </h1>
        <p className="text-gray-600 text-base mt-1">
          Aquí tienes lo que está pasando...
        </p>
      </div>

      <div>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </main>
  );
};

export default Home;