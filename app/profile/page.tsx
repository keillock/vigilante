"use client";

import React, { useState } from "react";
import { DotsThreeVertical, Star, UserPlus } from "phosphor-react"; // Import Phosphor icon
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

const friendsList = [
  { name: "Juan Pérez", username: "@juanperez", image: "https://pbs.twimg.com/profile_images/876854939343089664/FQHh8yI-_400x400.jpg" },
  { name: "María López", username: "@marialopez", image: "https://lh6.googleusercontent.com/proxy/SXu-1ebXelLVOCsdj0seKih4Fn7bJbzInoka_8JfoBirjzyK8hCDvjh-x33a3pvyF-NxQJfpZLtdqwVVjZEjWbI0EL5iVfrqb0E7svdghkA0G2K3T_LyIphbXQ" },
];

const Perfil: React.FC = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // Track active dropdown menu

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index); // Toggle menu visibility
  };

  const closeMenu = () => {
    setActiveMenu(null); // Close all dropdown menus
  };

  return (
    <main className="min-h-screen bg-gray-100 relative">
      {/* Cover Photo */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1581655915246-c4db17980549?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cover"
          className="w-full h-36 object-cover"
        />
        {/* Profile Picture */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <img
            src="https://s.yimg.com/ny/api/res/1.2/cwdnzwo3gCHBoUPS5jxKdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU5OA--/https://media.zenfs.com/en/the_telegraph_258/b31137799a45df85662086fc2540e6d9"
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-16 text-center px-4">
        <h1 className="text-xl font-bold text-gray-800">Carlos Umanzor</h1>
        <p className="text-gray-500">@carlosumi</p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-white flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700">
            <UserPlus></UserPlus><span>Compartir Perfil</span>
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Editar Perfil
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-gray-300">
        <div className="flex justify-center">
          <button
            className={`flex-1 py-2 ${
              activeTab === "posts"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            Mis Posts
          </button>
          <button
            className={`flex-1 py-2 ${
              activeTab === "friends"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("friends")}
          >
            Mis Amigos
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "posts" ? (
          <div>
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div>
            {friendsList.map((friend, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow mb-4 flex items-center justify-between relative"
              >
                {/* Friend Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={friend.image}
                    alt={friend.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-gray-800 font-semibold">{friend.name}</h2>
                    <p className="text-gray-600 text-sm">{friend.username}</p>
                  </div>
                </div>
                {/* Options Menu */}
                <div className="relative">
                  <button
                    onClick={() => toggleMenu(index)}
                    className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full"
                    aria-label="Manage Friend"
                  >
                    <DotsThreeVertical size={20} color="#4B5563" />
                  </button>
                  {activeMenu === index && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-1 z-10">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        
                      >
                        Remover Amigo
                      </button>
                      <button
                        className="block flex w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        
                      >
                         Guardar como Favorito
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Close all menus when clicking outside */}
      {activeMenu !== null && (
        <div onClick={closeMenu} className="fixed inset-0 z-0"></div>
      )}
    </main>
  );
};

export default Perfil;