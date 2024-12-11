"use client";

import React from "react";
import { ArrowLeft, DotsThreeVertical, Lock } from "phosphor-react";
import { useRouter } from "next/navigation";

const GroupDetails: React.FC = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50  pb-20">
      {/* Header */}
      <div className="relative">
        <img
          src="https://avanceingenierosgrupom.com/wp-content/uploads/2017/06/amenidades.jpg"
          alt="Group Cover"
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-full cursor-pointer" onClick={() => router.back()}>
          <ArrowLeft size={24}></ArrowLeft>
        </div>
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full ">
          <DotsThreeVertical size={24} />
        </div>
      </div>

      {/* Group Info */}
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">Residentes El Sauce</h1>
        <p className="text-sm text-gray-500">chomin y 1.3k miembros más</p>
        <div className="flex text-center gap-4">
        <Lock weight="fill"></Lock>
        <p className="text-sm text-gray-600 ">  Grupo Privado</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold mb-2">Posts Recientes</h2>
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h3 className="text-orange-500 font-bold">Mantenimiento de la Piscina</h3>
          <p className="text-gray-600 text-sm">
            Saludos vecinos, por este medio les informamos que la siguiente semana...
          </p>
        </div>
      </div>
    </main>
  );
};

export default GroupDetails;