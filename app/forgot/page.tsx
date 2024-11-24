"use client";

import React, { useState } from "react";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Correo de recuperación enviado");
    } else {
      alert("Por favor, ingresa tu correo electrónico.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 relative">
  <img
    src="/images/bg-grid.png"
    alt="Background Grid"
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  />
  
  <h1 className="text-2xl font-bold mb-2">¿Olvidaste tu Contraseña?</h1>
  <p className="text-gray-500 mb-6">
    No te preocupes. Puedes recuperar tu cuenta.
  </p>
  <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
    <input
      type="email"
      placeholder="Correo"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="p-2 border rounded-md"
    />
    <button
      type="submit"
      className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
    >
      Resetear Contraseña
    </button>
  </form>
  <Link href="/login" className="mt-6 text-sm text-orange-500 hover:underline">
    ← Regresar a Iniciar Sesión
  </Link>
</div>
  );
};

export default ForgotPassword;