// "use server";
// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

// import web3 from "../components/web3";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tama",
  description: "Tama data maketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navbar
          isWalletConnected={false}
          walletAddress={""}
          connectWallet={function (): void {
            throw new Error("Function not implemented.");
          }}
          disconnectWallet={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
