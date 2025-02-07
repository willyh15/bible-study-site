"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function RefiningAnimation() {
  const impuritiesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      impuritiesRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -50, duration: 2, repeat: -1 }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center my-8">
      <div
        className="absolute top-0 text-red-600 text-lg font-bold"
        ref={impuritiesRef}
      >
        Impurities Rising...
      </div>
      <div className="bg-yellow-500 p-10 rounded-full text-white font-bold">
        Pure Gold
      </div>
    </div>
  );
}
