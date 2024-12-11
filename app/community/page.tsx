"use client";

import React, { useState } from "react";
import { Plus } from "phosphor-react";
import { useRouter } from "next/navigation";
import Post from "@/components/Post"; // Assuming you have a reusable Post component

const groups = [
  {
    name: "Residentes El Sauce",
    newPosts: 4,
    imageSrc: "https://avanceingenierosgrupom.com/wp-content/uploads/2017/06/seguridad.jpg", // Replace with your actual image URL
  },
  {
    name: "Tegucigalpa Zona Sur",
    newPosts: 8,
    imageSrc: "https://mejoreszonas.com/wp-content/uploads/2019/06/D%C3%B3nde-alojarse-en-Tegucigalpa-Honduras.jpg",
  },
  {
    name: "Tegucigalpa CITY",
    newPosts: 3,
    imageSrc: "https://d26m4ikkajfmz.cloudfront.net/wp-content/uploads/2023/09/Tegucigalpa-FM-Honduras.jpg",
  },
];

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

const GroupsList: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("myGroups");

  return (
    <main className="min-h-screen bg-gray-50 pt-6 pb-20 px-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Grupos</h1>

      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-300 mb-4">
        <button
          className={`flex-1 py-2 ${
            activeTab === "myGroups"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("myGroups")}
        >
          Mis Grupos
        </button>
        <button
          className={`flex-1 py-2 ${
            activeTab === "posts"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
      </div>

      {/* Content */}
      {activeTab === "myGroups" ? (
        <>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Buscar"
            className="w-full p-3 border rounded-lg mb-6"
          />
          {/* Groups List */}
          <ul className="space-y-4">
            {groups.map((group, index) => (
              <li
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow cursor-pointer"
                onClick={() => router.push(`/community/${group.name}`)} // Navigate to group details
              >
                {/* Group Image */}
                <img
                  src={group.imageSrc}
                  alt={group.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                {/* Group Info */}
                <div className="flex-1">
                  <h2 className="text-gray-800 font-semibold">{group.name}</h2>
                  <p className="text-sm text-orange-500">
                    {group.newPosts} nuevos posts
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          {/* Posts Tab */}
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      )}

      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg">
        <Plus size={24} />
      </button>
    </main>
  );
};

export default GroupsList;