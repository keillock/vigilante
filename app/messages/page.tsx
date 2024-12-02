"use client";

import { PaperPlaneTilt } from "phosphor-react";

export default function MessagesPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <PaperPlaneTilt size={64} color="#D1D5DB" />
      <h1 className="text-2xl font-bold mt-4">Esta es la página de Mensajes</h1>
      <p className="text-gray-500 mt-2">
        En construcción...
      </p>
    </div>
  );
}