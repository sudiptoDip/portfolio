import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: `${profile.name} | ${profile.designation}`,
  description: `Portfolio of ${profile.name} - ${profile.designation}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
