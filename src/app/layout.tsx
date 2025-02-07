// src/app/layout.tsx
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Bible Study Hub</title>
      </head>
      <body className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center p-6">
        {children}
      </body>
    </html>
  );
}