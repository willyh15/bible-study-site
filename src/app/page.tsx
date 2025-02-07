// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide">📖 Bible Study Hub</h1>
        <p className="text-lg mb-8 text-gray-300 leading-relaxed">
          Dive deep into Scripture with engaging lessons on prayer, faith, and restoration.
        </p>
        
        {/* Navigation Links */}
        <div className="mt-10">
          <Link
            href="/lesson-1"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:opacity-90 transition shadow-xl"
          >
            📖 Lesson 1: Jesus&apos; Prayer for Peter
          </Link>
        </div>
      </div>
      
      {/* Encouragement */}
      <div className="mt-16 text-center border-t border-gray-700 w-full max-w-3xl pt-6">
        <p className="text-lg font-light italic text-gray-400">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; – James 5:16</p>
      </div>
    </div>
  );
}