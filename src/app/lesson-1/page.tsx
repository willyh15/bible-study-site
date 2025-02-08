"use client";  // Ensures this file is treated as a client component

import Link from "next/link";
import { useState, useEffect } from "react";
import RefiningAnimation from "@/components/RefiningAnimation";
import { motion } from "framer-motion";

export default function Lesson1() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isBlurred, setIsBlurred] = useState([true, true, true, true]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".snap-item");
      let index = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          index = i;
        }
      });
      setCurrentSection(index);

      // Unlock next sections as they scroll into view
      setIsBlurred((prev) => prev.map((_, i) => i <= index));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="snap-container">
      {/* Pagination Dots */}
      <div className="pagination-dots">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`dot ${currentSection === i ? "active" : ""}`} />
        ))}
      </div>

      {/* Section 1: Lesson Introduction */}
      <motion.section 
        className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-8 text-yellow-400">
            Lesson 1: Jesus&apos;s Prayer for Peter &amp; The Refining Fire
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            <strong>Luke 22:31-32</strong> - "Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat, but I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers."
            <br />
            This illustrates the power of intercessory prayer and faith refinement.
          </p>
        </div>
      </motion.section>

      {/* Section 2: Deep Dive into Jesus' Prayer */}
      <motion.section 
        className={`snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10 ${isBlurred[1] ? "blurred" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isBlurred[1] ? 0.3 : 1, y: isBlurred[1] ? 50 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">The Power of Prayer &amp; Spiritual Refinement</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Jesus Knew Satan’s Plans</strong>
            <br /><strong>Luke 22:31-32</strong> - "Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat."
            <br /> Satan wanted to shake Peter’s faith, just as he does with us. God remains in control, even in spiritual battles.
          </p>
        </div>
      </motion.section>

      {/* Section 3: Video & Refining Fire */}
      <motion.section 
        className={`snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10 ${isBlurred[2] ? "blurred" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isBlurred[2] ? 0.3 : 1, y: isBlurred[2] ? 50 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Gold Refining &amp; Spiritual Growth</h2>
        
        {/* Video with AutoPlay, Preload, and Preview Image */}
        <video
          className="rounded-lg shadow-lg w-full max-w-2xl"
          controls
          muted
          autoPlay
          playsInline
          loop
          preload="auto"
          poster="/images/gold-preview.jpg"
        >
          <source src="/videos/gold-refining.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Refining Animation */}
        <RefiningAnimation />
      </motion.section>

      {/* Section 4: Reflection Questions */}
      <motion.section 
        className={`snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10 ${isBlurred[3] ? "blurred" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isBlurred[3] ? 0.3 : 1, y: isBlurred[3] ? 50 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
          <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
            <li>How does Jesus&apos;s intercession shape our understanding of prayer?</li>
            <li>What impurities has God revealed in your faith through prayer?</li>
            <li>How can we make intercessory prayer a habit in our daily lives?</li>
            <li>Have you experienced a time where trials refined and strengthened your faith?</li>
            <li>How does the process of gold refinement reflect our spiritual journey?</li>
          </ul>
        </div>
      </motion.section>

      {/* Navigation Links */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}