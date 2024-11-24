"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Para manejar la navegación

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  // Estados para los errores
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dniError, setDniError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter(); // Hook para navegar

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    // Validación del nombre
    if (!name.trim()) {
      setNameError("Por favor, ingresa tu nombre.");
      valid = false;
    } else {
      setNameError("");
    }

    // Validación del correo
    if (!email.trim() || !email.includes("@")) {
      setEmailError("Por favor, ingresa un correo válido.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validación del DNI
    if (!dni.trim()) {
      setDniError("Por favor, ingresa tu número de DNI.");
      valid = false;
    } else {
      setDniError("");
    }

    // Validación de la contraseña
    if (!password.trim()) {
      setPasswordError("Por favor, ingresa una contraseña.");
      valid = false;
    } else {
      setPasswordError("");
    }

    // Si todos los campos son válidos, redirigir a la página de inicio
    if (valid) {
      router.push("/home");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img src="/logo-orange.svg" alt="Vigilante Logo" className="w-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Regístrate</h1>
      <p className="text-gray-500 mb-6">Crea una nueva cuenta.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <div>
          <input
            type="text"
            placeholder="Nombre*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              nameError ? "border-red-500" : ""
            }`}
          />
          {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        </div>
        <div>
          <input
            
            placeholder="Correo*"
            value={email}
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
            type="text"
            placeholder="Número de DNI*"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              dniError ? "border-red-500" : ""
            }`}
          />
          {dniError && <p className="text-red-500 text-sm mt-1">{dniError}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`p-2 border rounded-md w-full ${
              passwordError ? "border-red-500" : ""
            }`}
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Crear Cuenta
        </button>
      </form>
      <button
  className="flex items-center justify-center gap-2 mt-6 w-80 py-2 bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg hover:border-gray-400 transition-all"
>
  <img src="/google.svg" alt="Google Logo" className="w-5 h-5" />
  <span className="text-gray-700 font-medium">Continuar con Google</span>
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