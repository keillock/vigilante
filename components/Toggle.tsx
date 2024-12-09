"use client";

import React, { useState } from "react";

interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ enabled, onChange }) => {
  return (
    <div
      onClick={() => onChange(!enabled)}
      className={`relative w-14 h-8 flex items-center rounded-full cursor-pointer transition-colors ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          enabled ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </div>
  );
};

export default Toggle;