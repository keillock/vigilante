"use client";

import React, { useState } from "react";
import { ArrowLeft, Eye, EyeSlash } from "phosphor-react";
import { useRouter } from "next/navigation";

const Seguridad: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isButtonDisabled =
    !currentPassword || !newPassword || !confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    router.push("/settings");
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      {/* Título con flecha para regresar */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.push("/settings")}
          aria-label="Regresar"
          className="mr-3"
        >
          <ArrowLeft size={24} color="#ED7600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Seguridad</h1>
      </div>

      {/* Formulario */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Contraseña actual */}
        <div className="relative">
          <label
            htmlFor="current-password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña actual
          </label>
          <input
            type={showCurrentPassword ? "text" : "password"}
            id="current-password"
            placeholder="Escribe tu contraseña actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute pt-1 top-8 right-3"
            aria-label="Mostrar contraseña actual"
          >
            {showCurrentPassword ? (
              <EyeSlash size={20} color="#888" />
            ) : (
              <Eye size={20} color="#888" />
            )}
          </button>
        </div>

        {/* Nueva contraseña */}
        <div className="relative">
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700"
          >
            Nueva contraseña
          </label>
          <input
            type={showNewPassword ? "text" : "password"}
            id="new-password"
            placeholder="Escribe tu nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute pt-1 top-8 right-3"
            aria-label="Mostrar nueva contraseña"
          >
            {showNewPassword ? (
              <EyeSlash size={20} color="#888" />
            ) : (
              <Eye size={20} color="#888" />
            )}
          </button>
        </div>

        {/* Confirmar nueva contraseña */}
        <div className="relative">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirmar nueva contraseña
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            placeholder="Confirma tu nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute pt-1 top-8 right-3"
            aria-label="Mostrar confirmación de contraseña"
          >
            {showConfirmPassword ? (
              <EyeSlash size={20} color="#888" />
            ) : (
              <Eye size={20} color="#888" />
            )}
          </button>
        </div>

        {/* Botón Guardar Cambios */}
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full py-2 font-semibold rounded-lg ${
            isButtonDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          Guardar cambios
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">¡Éxito!</h2>
            <p className="text-gray-600">Tu contraseña fue cambiada exitosamente.</p>
            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 bg-orange-500 text-white font-semibold rounded-lg"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Seguridad;