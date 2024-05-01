import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/Navbar/Navbar";
import { MaxWidthWrapper } from "./components/MaxWidthWrapper/MaxWidthWrapper";
import Footer from "./sections/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revive - A Sustainable Sneaker",
  description:
    "Revive is a sustainable sneaker brand that makes eco-conscious sneakers from waste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MaxWidthWrapper>
          <Navbar />
          {children}
          <Footer />
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
