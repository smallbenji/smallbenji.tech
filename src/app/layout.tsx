import { Inter } from "next/font/google";
import "./globals.css";
import Particle from "./(Components)/Particles";
import SessionProviderWrapper from "@/app/(Components)/SessionProviderWrapper";
import { AppProps } from "next/app";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<SessionProviderWrapper>
			<html lang="en">
				<head>
					<link rel="icon" href="/favicon.ico" />
				</head>
				<body className={inter.className}>
					<Particle />
					<main>{children}</main>
				</body>
			</html>
		</SessionProviderWrapper>
	);
}
