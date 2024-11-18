"use client";

import React, { useEffect, useState } from "react";

const SplashScreen: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500), // Transition to logo screen after 1.5 seconds
      setTimeout(() => setStep(2), 3000), // Transition to loading screen after another 1.5 seconds
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const logoSrc = step === 0 ? "/logo-white.svg" : "/logo-orange.svg";

  return (
    <div
      className={`splash-container ${step === 0 ? "orange-bg" : "white-bg"}`}
    >
      <div className="logo-container">
        <img
          src={logoSrc}
          alt="Vigilante Logo"
          className="logo"
          style={{ width: "150px", height: "150px" }}
        />
        <h1 className="logo-text">VIGILANTE</h1>
      </div>

      {step === 2 && <div className="spinner"></div>}
    </div>
  );
};

export default SplashScreen;
