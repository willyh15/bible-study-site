"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MustardSeedFaith() {
  const [growth, setGrowth] = useState(0);
  const maxGrowth = 5;

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Faith Like a Mustard Seed</h3>
      <p className="text-gray-300 mb-4">
        Click &quot;Grow Faith&quot; to see how even a small seed of faith can grow into something great.
      </p>

      <div className="relative flex flex-col items-center mb-6">
        <motion.div
          className="w-10 h-10 bg-yellow-500 rounded-full"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 + growth * 0.2 }}
          transition={{ duration: 0.5 }}
        />
        <p className="text-yellow-300 mt-2">
          {growth === maxGrowth ? "Faith Fully Grown!" : "Mustard Seed of Faith"}
        </p>
      </div>

      <button
        className={`px-6 py-3 text-lg font-semibold rounded transition ${
          growth < maxGrowth ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 cursor-not-allowed"
        } text-white`}
        onClick={() => setGrowth((prev) => (prev < maxGrowth ? prev + 1 : prev))}
      >
        Grow Faith
      </button>
    </div>
  );
}