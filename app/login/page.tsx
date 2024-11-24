"use client";

import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img src="/logo-orange.svg" alt="Vigilante Logo" className="w-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Iniciar Sesión</h1>
      <p className="text-gray-500 mb-6">
        Bienvenido. Ingresa tus credenciales.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md"
        />
        <Link
          href="/forgot"
          className="text-orange-500 hover:underline text-center text-sm mt-2"
        >
          ¿Olvidaste tu Contraseña?
        </Link>
        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 mt-2"
        >
          Iniciar Sesión
        </button>
      </form>
      <button className="flex items-center justify-center gap-2 mt-4 py-2 px-4 border rounded-md">
        <img src="/google-icon.svg" alt="Google Logo" className="w-5 h-5" />
        Continuar con Google
      </button>
      <p className="mt-6 text-sm">
        ¿No tienes una cuenta?{" "}
        <Link href="/register" className="text-orange-500 hover:underline">
          Regístrate
        </Link>
      </p>
    </div>
  );
};

export default Login;