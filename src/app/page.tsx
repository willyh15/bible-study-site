// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-6 text-center">📖 Welcome to the Bible Study Hub</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Dive deep into Scripture with engaging lessons on prayer, faith, and restoration.
      </p>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        <Link
          href="/lesson-1"
          className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-xl font-semibold hover:opacity-90 transition text-center shadow-lg"
        >
          📖 Lesson 1: Jesus&apos; Prayer for Peter
        </Link>
      </div>

      {/* Encouragement */}
      <div className="mt-10 text-center">
        <p className="text-lg font-medium italic">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; – James 5:16</p>
      </div>
    </div>
  );
}