"use client";

import { Users } from "phosphor-react";

export default function CommunityPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <Users size={64} color="#D1D5DB" />
      <h1 className="text-2xl font-bold mt-4">Esta es la página de Comunidad</h1>
      <p className="text-gray-500 mt-2">
        En construcción....
      </p>
    </div>
  );
}