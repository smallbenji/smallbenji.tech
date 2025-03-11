import Header from "@/components/header";
import Particle from "@/components/particles";
import React from "react";
import "./Globals.scss";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Header />
			{/* <Particle /> */}
			{children}
		</>
	);
}
