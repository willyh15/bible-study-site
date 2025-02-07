// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">Welcome to the Bible Study Hub</h1>
      <p className="text-xl text-gray-700 mb-8 text-center">
        Dive deep into Scripture with engaging lessons on prayer, faith, and restoration.
      </p>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        <Link
          href="/lesson-1"
          className="block bg-blue-600 text-white p-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition text-center shadow-md"
        >
          📖 Lesson 1: Jesus&apos; Prayer for Peter
        </Link>
      </div>

      {/* Encouragement */}
      <div className="mt-10 text-gray-700 text-center">
        <p className="text-lg font-medium">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; – James 5:16</p>
      </div>
    </div>
  );
}