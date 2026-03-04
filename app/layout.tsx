import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or Outfit if preferred
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import Preloader from "@/components/ui/preloader";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";
import { MouseTrail } from "@/components/ui/mouse-trail";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Abroad Consultancy - Your Gateway to Global Education",
  description: "Find the best universities for your study abroad journey in South Korea, Italy, Malta, Austria, and Hungary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Preloader />
        <SmoothScroll>
          <MouseTrail />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
