"use client";

import { User } from "phosphor-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    // Add logout functionality here if needed, like clearing session tokens
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <User size={64} color="#D1D5DB" />
      <h1 className="text-2xl font-bold mt-4">Esta es la página de Perfil</h1>
      <p className="text-gray-500 mt-2">En construcción...</p>

      <button
        onClick={handleLogout}
        className="mt-6 py-2 px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}