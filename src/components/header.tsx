"use client";

import React from "react";
import { ModeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full">
			<div className="flex h-14 items-center px-4 gap-2">
				<Link href="/">
					<h1>Smallbenji ✨</h1>
				</Link>
				<div className="flex-grow"></div>
				<Link href="/archieve">
					<Button>Archieve</Button>
				</Link>
				<ModeToggle />
			</div>
		</header>
	);
};

export default Header;
