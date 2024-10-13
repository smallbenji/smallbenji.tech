import { Inter } from "next/font/google";
import React from "react";
import SessionProviderWrapper from "@/components/sessionProviderWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head></head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SessionProviderWrapper>{children}</SessionProviderWrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}
