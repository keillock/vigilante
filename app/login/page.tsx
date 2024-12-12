"use client";

import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.currentTarget.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    // Validación del correo
    if (!email.includes("@")) {
      setEmailError("Por favor, ingresa un correo válido.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validación de la contraseña
    if (!password) {
      setPasswordError("Por favor, ingresa una contraseña.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      
      // Redirigir a la página de inicio
      window.location.href = "/home";
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
        <div>
          <input
            type="text"
            placeholder="Correo"
            value={email}
            onClick={handleInputClick}
            onChange={(e) => setEmail(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              emailError ? "border-red-500" : ""
            }`}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onClick={handleInputClick}
            onChange={(e) => setPassword(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              passwordError ? "border-red-500" : ""
            }`}
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>
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
      <button
  className="flex items-center justify-center gap-2 mt-6 w-80 py-2 bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:border-gray-400 transition-all"
>
  <img src="/google.svg" alt="Google Logo" className="w-5 h-5" />
  <span className="text-gray-700 font-medium">Continuar con Google</span>
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