import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const poppinsBold = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "openSUSE ­— Freedom for your desktop",
  description: "openSUSE is an opensource operating system based on Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppinsBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
