"use client";

import { House } from "phosphor-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <House size={64} color="#D1D5DB" />
      <h1 className="text-2xl text-gray-600 mt-4">Esta es la página de Home</h1>
    </div>
  );
};

export default Home;