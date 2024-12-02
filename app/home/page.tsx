"use client";

import React from "react";
import Post from "@/components/Post";

const posts = [
  {
    id: "1", // Unique ID
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
    imageSrc: "https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/468215896_122177643716161398_3815249929707379810_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mGAcpqnexvIQ7kNvgHVf8-I&_nc_zt=23&_nc_ht=scontent.ftgu1-3.fna&_nc_gid=AfldhH0_2BfzkZn6kUJVF3F&oh=00_AYBf6Cb19gyhnNQ24sda1RV_M3Pr6G15f_RHeZ5TqzAttw&oe=67530283",
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
    </main>
  );
};

export default Home;