// src/app/layout.tsx
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Bible Study Hub</title>
      </head>
      <body className="min-h-screen bg-black text-white flex flex-col items-center p-4">
        {children}
      </body>
    </html>
  );
}