import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        </body>
    </html>
  );
}
