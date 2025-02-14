"use client";

import { useState, useEffect } from "react";

const LandscapeWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobileOrTablet = window.innerWidth <= 769;
      const isPortrait = window.innerHeight > window.innerWidth;
      setShowWarning(isMobileOrTablet && isPortrait);
    };

    // Cek saat pertama kali render
    checkOrientation();

    // Tambahkan event listener saat resize & orientasi berubah
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-center p-5 z-50">
      <div className="bg-red-600 px-6 py-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">Rotate Your Device</h2>
        <p className="text-sm">For the best experience, please switch to landscape mode.</p>
      </div>
    </div>
  );
};

export default LandscapeWarning;
