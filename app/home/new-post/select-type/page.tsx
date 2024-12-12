"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Warning,
  SpeakerHigh,
  FirstAid,
  CalendarBlank,
  CarSimple,
  Bandaids,
  CaretLeft
} from "phosphor-react";

const SelectPostType: React.FC = () => {
  const router = useRouter();

  const postTypes = [
    { label: "Delito", icon: <Warning weight="fill" size={32} /> },
    { label: "Anuncio", icon: <SpeakerHigh weight="fill" size={32} /> },
    { label: "Accidente", icon: <Bandaids weight="fill" size={32}/> },
    { label: "Emergencia", icon: <FirstAid weight="fill" size={32} /> },
    { label: "Evento", icon: <CalendarBlank weight="fill" size={32} /> },
    { label: "Tránsito", icon: <CarSimple weight="fill" size={32} /> },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      {/* Navigation */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="mr-4"
        >
          <CaretLeft size={23} ></CaretLeft>
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mt-0">Nuevo Post</h1>
      </div>
      <div><h2 className="text-xl w-full font-semibold pb-7 text-center items-center ">¿Que quieres comunicar?</h2></div>

      {/* Grid of options */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {postTypes.map((type, index) => (
          <button
            key={index}
            className="bg-orange-500 text-white p-11 rounded-lg flex flex-col items-center gap-2 shadow hover:bg-orange-600"
            onClick={() => router.push("/home/new-post/form")}
          >
            {type.icon}
            <span>{type.label}</span>
          </button>
        ))}
      </div>

      {/* "Otro" Button */}
      <button
        className="w-full py-3 bg-white border rounded-lg text-gray-700 shadow hover:bg-gray-100"
        onClick={() => router.push("/home/new-post/form")}
      >
        Otro
      </button>
    </main>
  );
};

export default SelectPostType;