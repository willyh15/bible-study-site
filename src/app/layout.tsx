import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/lesson-1">Lesson 1</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
