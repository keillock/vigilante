"use client";

import React, { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <SplashScreen />
  ) : (
    <main className="welcome-container">
      <h1>Bienvenido a Vigilante</h1>
    </main>
  );
};

export default Home;
