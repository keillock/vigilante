"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SplashScreen: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => router.push("/login"), 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [router]);

  const logoSrc = step === 0 ? "/logo-white.svg" : "/logo-orange.svg";

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-colors duration-1000 ${
        step === 0 ? "bg-orange-500" : "bg-white"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={logoSrc}
          alt="Vigilante Logo"
          className="w-32 h-32 mb-4 transition-opacity duration-1000"
        />
        <h1 className="logo-text text-2xl font-bold">VIGILANTE</h1>
      </div>
      {step === 2 && (
        <div className="fixed inset-x-0 bottom-44 mx-auto w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      )}
    </div>
  );
};

export default SplashScreen;