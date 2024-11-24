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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md w-80"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md w-80"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Entrar
        </button>
      </form>
      <div className="mt-6 flex flex-col items-center">
        <p>
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-orange-500 hover:underline">
            Regístrate
          </Link>
        </p>
        <p className="mt-2">
          ¿Olvidaste tu contraseña?{" "}
          <Link href="/forgot" className="text-orange-500 hover:underline">
            Recupérala aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;