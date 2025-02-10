"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DarkModePrayer() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center mt-8">
      <motion.div
        className={`w-full h-64 p-6 rounded-lg shadow-lg transition-all duration-500 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
          Solitude in Prayer
        </h3>
        <p className="text-lg mb-4">
          Jesus often withdrew to lonely places and prayed (Luke 5:16). Click the button to experience how solitude in prayer removes distractions.
        </p>
      </motion.div>

      <button
        className="mt-4 px-6 py-3 text-lg font-semibold rounded transition bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? "Return to the World" : "Enter Solitude"}
      </button>
    </div>
  );
}
