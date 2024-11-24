"use client";

import React, { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && dni && password) {
      alert("Registro exitoso");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img src="/logo-orange.svg" alt="Vigilante Logo" className="w-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Regístrate</h1>
      <p className="text-gray-500 mb-6">Crea una nueva cuenta.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Nombre*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Correo*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Número de DNI*"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Contraseña*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Crear Cuenta
        </button>
      </form>
      <button className="flex items-center justify-center gap-2 mt-6 py-2 px-4 border rounded-md">
        <img src="/google-icon.svg" alt="Google Logo" className="w-5 h-5" />
        Continuar con Google
      </button>
      <p className="mt-6 text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login" className="text-orange-500">
          Iniciar Sesión
        </Link>
      </p>
    </div>
  );
};

export default Register;