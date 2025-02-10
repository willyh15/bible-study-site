"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PrayerIncense() {
  const [prayers, setPrayers] = useState(0);
  const maxPrayers = 7;

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Prayers Rising Like Incense</h3>
      <p className="text-gray-300 mb-4">
        Click &quot;Pray&quot; to release incense, symbolizing your prayers reaching heaven.
      </p>

      <div className="relative w-40 h-60 flex justify-center items-end bg-gray-800 rounded-lg p-4 shadow-lg">
        {Array.from({ length: prayers }, (_, i) => (
          <motion.div
            key={i}
            className="w-3 h-10 bg-yellow-300 rounded-full opacity-80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -i * 10 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      <button
        className={`mt-4 px-6 py-3 text-lg font-semibold rounded transition ${
          prayers < maxPrayers ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 cursor-not-allowed"
        } text-white`}
        onClick={() => setPrayers((prev) => (prev < maxPrayers ? prev + 1 : prev))}
      >
        Pray (Release Incense)
      </button>

      {prayers === maxPrayers && (
        <motion.p className="text-green-400 text-lg mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Your prayers have reached heaven!
        </motion.p>
      )}
    </div>
  );
}