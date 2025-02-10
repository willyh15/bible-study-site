"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FaithBridge() {
  const [steps, setSteps] = useState(0);
  const maxSteps = 6;

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h3 className="text-xl font-semibold text-yellow-300 mb-4">Faith Builds the Bridge</h3>
      <p className="text-gray-300 mb-4">Click "Pray" to build the bridge between you and God.</p>

      <div className="flex items-center space-x-2 mb-6">
        <span className="text-yellow-400 text-xl">You</span>
        <div className="flex space-x-2">
          {Array.from({ length: steps }, (_, i) => (
            <motion.div
              key={i}
              className="w-10 h-4 bg-yellow-500 rounded shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        <span className="text-yellow-400 text-xl">God</span>
      </div>

      <button
        className={`px-6 py-3 text-lg font-semibold rounded transition ${
          steps < maxSteps ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600 cursor-not-allowed"
        }`}
        onClick={() => setSteps((prev) => (prev < maxSteps ? prev + 1 : prev))}
      >
        Pray (Build the Bridge)
      </button>

      {steps === maxSteps && (
        <motion.p className="text-green-400 text-lg mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          The bridge is complete! Your faith connects you to God.
        </motion.p>
      )}
    </div>
  );
}