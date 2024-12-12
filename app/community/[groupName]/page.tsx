"use client";

import React from "react";
import { ArrowLeft, DotsThreeVertical, Lock } from "phosphor-react";
import { useRouter } from "next/navigation";
import Post from "@/components/Post"; // Reuse the Post component

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

const GroupDetails: React.FC = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="relative">
        <img
          src="https://avanceingenierosgrupom.com/wp-content/uploads/2017/06/amenidades.jpg"
          alt="Group Cover"
          className="w-full h-40 object-cover"
        />
        <div
          className="absolute top-4 left-4 bg-white p-2 rounded-full cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft size={24} />
        </div>
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
          <DotsThreeVertical size={24} />
        </div>
      </div>

      {/* Group Info */}
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">Residentes El Sauce</h1>
        <p className="text-sm text-gray-500">chomin y 1.3k miembros más</p>
        <div className="flex justify-center items-center gap-2 mt-2">
          <Lock weight="fill" className="text-gray-600" />
          <p className="text-sm text-gray-600">Grupo Privado</p>
        </div>
      </div>

      {/* Posts Section */}
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold mb-2">Posts Recientes</h2>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </main>
  );
};

export default GroupDetails;