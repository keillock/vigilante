"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LockSimple, Plus } from "phosphor-react";

const NewPostForm: React.FC = () => {
  const router = useRouter();
  const [tags, setTags] = useState(["Accidente"]);

  const handlePublish = () => {
    // Lógica para publicar el post
    router.push("/home"); // Redirige al homepage
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      {/* Navegación */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mt-0">Nuevo Post</h1>
      </div>

      {/* Agregar Media */}
      <div className="bg-gray-100 border-dashed border-2 border-gray-300 h-48 rounded-lg flex flex-col items-center justify-center mb-6">
        <Plus size={32} weight="bold" color="#ED7600" />
        <span className="text-orange-500 font-medium mt-2">Agregar Media</span>
      </div>

      {/* Formulario */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Título del Post */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Título del Post
          </label>
          <input
            type="text"
            placeholder="Título del Post"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Etiquetas del Post */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Etiquetas del Post
          </label>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-pink-100 text-pink-600 px-3 border-pink-600  py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
            <button
              type="button"
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              onClick={() => setTags([...tags, "Nuevo Tag"])}
            >
              +
            </button>
          </div>
        </div>

        {/* Descripción del Post */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Descripción del Post
          </label>
          <textarea
            placeholder="Descripción del Post"
            className="w-full p-3 border rounded-lg"
          ></textarea>
        </div>

        {/* Visible en */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Visible en
          </label>
          <div className="flex bg-white items-center border rounded-lg overflow-hidden">
            <div className="flex-1 p-3 border-r">
              <span className="text-gray-600">Residentes El Sauce</span>
            </div>
            <div className="flex items-center gap-2 px-3 text-orange-500">
              <LockSimple weight="fill" />
              <span className="text-sm font-semibold">Grupo Privado</span>
            </div>
          </div>
        </div>

        {/* Botón Publicar */}
        <button
          type="button"
          onClick={handlePublish}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Publicar
        </button>
      </form>
    </main>
  );
};

export default NewPostForm;