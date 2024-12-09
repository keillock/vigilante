"use client";

import React, { useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
import Toggle from "@/components/Toggle";

const Notifications: React.FC = () => {
  const router = useRouter();
  const [postNotifications, setPostNotifications] = useState(false);
  const [groupMessagesNotifications, setGroupMessagesNotifications] =
    useState(false);
  const [commentsNotifications, setCommentsNotifications] = useState(true);

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      {/* Page Title with Back Arrow */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.push("/settings")}
          aria-label="Regresar"
          className="mr-3"
        >
          <ArrowLeft size={24} color="#ED7600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Notificaciones</h1>
      </div>

      {/* Notification Options */}
      <div className="space-y-4">
        {/* Notificación 1 */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="flex-1 pr-4">
            <h2 className="text-base font-semibold text-gray-800">
              Notificaciones para posts nuevos en grupos
            </h2>
            <p className="text-sm text-gray-600">
              Recibe notificaciones cuando haya un post nuevo en los grupos que
              estás.
            </p>
          </div>
          <Toggle
            enabled={postNotifications}
            onChange={setPostNotifications}
          />
        </div>

        {/* Notificación 2 */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="flex-1 pr-4">
            <h2 className="text-base font-semibold text-gray-800">
              Notificaciones para mensajes de grupos
            </h2>
            <p className="text-sm text-gray-600">
              Recibe notificaciones para mensajes nuevos en los grupos.
            </p>
          </div>
          <Toggle
            enabled={groupMessagesNotifications}
            onChange={setGroupMessagesNotifications}
          />
        </div>

        {/* Notificación 3 */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="flex-1 pr-4">
            <h2 className="text-base font-semibold text-gray-800">
              Notificaciones para nuevos comentarios
            </h2>
            <p className="text-sm text-gray-600">
              Recibe notificaciones cuando alguien comente en tus posts.
            </p>
          </div>
          <Toggle
            enabled={commentsNotifications}
            onChange={setCommentsNotifications}
          />
        </div>
      </div>
    </main>
  );
};

export default Notifications;