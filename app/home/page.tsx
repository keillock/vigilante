"use client";

import React from "react";
import Post from "@/components/Post";
import Link from "next/link";
import { MegaphoneSimple } from "phosphor-react";

const posts = [
  {
    id: "1",
    imageSrc: "https://avanceingenierosgrupom.com/wp-content/uploads/2017/06/amenidades.jpg",
    title: "Mantenimiento de la Piscina",
    description:
      "Saludos vecinos, por este medio les informamos que la siguiente semana durante la noche la piscina estará en mantenimiento...",
    tag: "Anuncio Oficial",
    category: "Residentes El Sauce",
  },
  {
    id: "2",
    imageSrc: "https://blogs.iadb.org/ciudades-sostenibles/wp-content/uploads/sites/17/2019/05/DAIN2058.jpg",
    title: "Recolección de Basura",
    description:
      "Se les informa que la recolección de basura se realizará el miércoles en lugar del jueves debido a un feriado.",
    tag: "Aviso Importante",
    category: "Patronato Villas Naranja",
  },
  {
    id: "3",
    imageSrc: "https://www.mp.hn/wp-content/uploads/2024/03/photo1709321168-e1709324108450-768x476.jpeg",
    title: "Asamblea General",
    description:
      "La asamblea general de vecinos se llevará a cabo este sábado a las 6 PM en el salón comunitario.",
    tag: "Evento Comunitario",
    category: "Comunidad Los Cipreses",
  },
];

const Home: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
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

      {/* Floating Action Button */}
      <div className="fixed bottom-6 pb-20 right-6 z-20 ">
        <Link
          href="/home/new-post/select-type"
          className="bg-orange-500 p-4 rounded-full  hover:bg-orange-600 flex items-center justify-center shadow-xl"
          aria-label="Nuevo Post"
        >
          <MegaphoneSimple size={24} color="#FFFFFF" weight="fill" />
        </Link>
      </div>
    </main>
  );
};

export default Home;