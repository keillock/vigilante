"use client";

import React from "react";
import { ArrowLeft, User, Bell, Lock, SignOut } from "phosphor-react";
import { useRouter } from "next/navigation";

const Settings: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Aquí podrías agregar lógica para limpiar el estado del usuario (opcional)
    router.push("/login"); // Redirige a la página de login
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      {/* Page Title with Back Arrow */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => router.back()}
          aria-label="Regresar"
          className="mr-3"
        >
          <ArrowLeft size={24} color="#ED7600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Ajustes</h1>
      </div>

      {/* Settings Options */}
      <div className="space-y-4">
        {/* Account Section */}
        <div
          className="bg-white shadow rounded-lg p-4 flex items-center gap-4 cursor-pointer"
          onClick={() => router.push("/settings/cuenta")}
        >
          <User size={32} color="#ED7600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Cuenta</h2>
            <p className="text-sm text-gray-600">Gestiona la información de tu cuenta.</p>
          </div>
        </div>

        {/* Notifications Section */}
        <div
          className="bg-white shadow rounded-lg p-4 flex items-center gap-4 cursor-pointer"
          onClick={() => router.push("/settings/notificaciones")}
        >
          <Bell size={32} color="#ED7600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Notificaciones</h2>
            <p className="text-sm text-gray-600">
              Configura tus preferencias de notificación.
            </p>
          </div>
        </div>

        {/* Privacy Section */}
        <div
          className="bg-white shadow rounded-lg p-4 flex items-center gap-4 cursor-pointer"
          onClick={() => router.push("/settings/seguridad")}
        >
          <Lock size={32} color="#ED7600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Seguridad</h2>
            <p className="text-sm text-gray-600">Controla la seguridad de tu cuenta.</p>
          </div>
        </div>

        {/* Logout Button */}
        <div
          className="bg-red-50 shadow rounded-lg p-4 flex items-center gap-4 cursor-pointer"
          onClick={handleLogout}
        >
          <SignOut size={32} color="#FF0000" />
          <div>
            <h2 className="text-lg font-semibold text-red-700">Cerrar sesión</h2>
            <p className="text-sm text-red-600">Cierra sesión en tu cuenta.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;