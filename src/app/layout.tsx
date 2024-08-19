import { Inter } from "next/font/google";
import "./globals.css";
import Particle from "./(Components)/Particles";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "smallbenji ✨",
  description: "smallbenji's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Particle />
        <main>{children}</main>
      </body>
    </html>
  );
}
