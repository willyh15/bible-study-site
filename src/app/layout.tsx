import "../styles/globals.css"; // Corrected import

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Bible Study Hub</title>
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-4">
        {children}
      </body>
    </html>
  );
}
