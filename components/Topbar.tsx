"use client";

import React, { useState } from "react";
import {
  List,
  House,
  Users,
  PaperPlaneTilt,
  Lifebuoy,
  Gear,
  UserCircle,
} from "phosphor-react";

const Topbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Topbar */}
      <div className="flex justify-between items-center bg-white shadow-md px-4 py-3 fixed top-0 left-0 w-full z-50">
        <img src="/logo-orange.svg" alt="Logo" className="h-8" />
        <button onClick={toggleSidebar} aria-label="Menu">
          <List size={28} color="#000" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Búsqueda"
            className="w-full px-3 py-2 mb-4 border rounded"
          />
          {/* Main Links */}
          <ul className="space-y-4">
            <li>
              <a
                href="/home"
                className="flex items-center gap-2 text-gray-700"
              >
                <House size={20} color="#000" />
                Home
              </a>
            </li>
            <li>
              <a
                href="/community"
                className="flex items-center gap-2 text-gray-700"
              >
                <Users size={20} color="#000" />
                Grupos
              </a>
            </li>
            <li>
              <a
                href="/messages"
                className="flex items-center gap-2 text-gray-700"
              >
                <PaperPlaneTilt size={20} color="#000" />
                Mensajes
              </a>
            </li>
          </ul>
          <hr className="my-4" />
          {/* Support & Settings */}
          <ul className="space-y-4">
            <li>
              <a
                href="/support"
                className="flex items-center gap-2 text-gray-700"
              >
                <Lifebuoy size={20} color="#000" />
                Soporte
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="flex items-center gap-2 text-gray-700"
              >
                <Gear size={20} color="#000" />
                Ajustes
              </a>
            </li>
          </ul>
          {/* User Info */}
          <div className="mt-6 flex items-center gap-2">
            <UserCircle size={40} color="#000" />
            <div>
              <p className="text-gray-800 font-medium">Carlos Umanzor</p>
              <p className="text-gray-500 text-sm">@carlosumi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </>
  );
};

export default Topbar;