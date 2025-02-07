// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Welcome to the Bible Study Hub</h1>
      <p className="text-lg mb-6">
        Dive deep into Scripture with engaging lessons on prayer, faith, and restoration.
      </p>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          href="/lesson-1"
          className="block bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          📖 Lesson 1: Jesus' Prayer for Peter
        </Link>
      </div>

      {/* Encouragement */}
      <div className="mt-10 text-gray-700">
        <p>“The prayer of a righteous person is powerful and effective.” – James 5:16</p>
      </div>
    </div>
  );
}
