// src/app/lesson-1/page.tsx

import Link from "next/link";
import RefiningAnimation from "@/components/RefiningAnimation";

export default function Lesson1() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 text-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-400">Lesson 1: Jesus&apos; Prayer for Peter & The Refining Fire</h1>

      <p className="text-lg text-gray-300 text-center">
        In <strong>Luke 22:31-32</strong>, Jesus prays for Peter, knowing he will be tested. 
        This illustrates the power of intercessory prayer and faith refinement.
      </p>

      {/* Embedded Video (Locally Stored) */}
      <div className="flex justify-center my-6">
        <video className="rounded-lg shadow-lg" width="600" controls>
          <source src="/videos/gold-refining.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Refining Animation */}
      <RefiningAnimation />

      {/* Discussion Section */}
      <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-yellow-300">Reflection Questions</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>How does Jesus&apos; intercession shape our understanding of prayer?</li>
          <li>What impurities has God revealed in your faith through prayer?</li>
          <li>How can we make intercessory prayer a habit in our daily lives?</li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
