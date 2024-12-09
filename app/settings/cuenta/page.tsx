"use client";

import React from "react";
import { ArrowLeft } from "phosphor-react";
import { useRouter } from "next/navigation";

const Cuenta: React.FC = () => {
  const router = useRouter();

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      {/* Page Title with Back Arrow */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.push("/settings")}
          aria-label="Regresar"
          className="mr-3"
        >
          <ArrowLeft size={24} color="#ED7600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Cuenta</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="username"
            placeholder="Escribe tu nombre de usuario"
            className="mt-1 block w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Biografía
          </label>
          <textarea
            id="bio"
            rows={4}
            placeholder="Escribe una breve descripción sobre ti"
            className="mt-1 block w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg"
        >
          Guardar cambios
        </button>
      </form>
    </main>
  );
};

export default Cuenta;