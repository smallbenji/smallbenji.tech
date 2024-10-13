import React from "react";

import Image from "next/image";
import styles from "./page.module.css";

import "./Home.scss";
import Link from "next/link";

import PFP from "../../../public/smallbenji.jpg";
import { Metadata } from "next";
import LogInButton from "@/components/ui/LogInButton";
import Header from "@/components/header";

export const metadata: Metadata = {
	title: "smallbenji ✨",
	description: "smallbenji's personal portfolio website",
};

export default async function Home() {
	return (
		<>
			<main className={styles.main}>
				<div className="p-0">
					<section>
						<div className="flex flex-col-reverse sm:flex-row sm:w-2/5 sm:m-auto">
							<div className="m-auto sm:w-1/2 sm:m-0">
								<div>
									<h1 className="text-5xl font-bold">
										smallbenji✨
									</h1>
									<h3 className="text-xl font-bold">
										{"<Code is life />"}
									</h3>
									<p className="text-sm sm:text-base">
										A simple guy with a big passion for
										programming🚀
									</p>
								</div>
							</div>
							<div className="sm:w-1/2">
								<Image
									src={PFP}
									alt=""
									placeholder="blur"
									className="rounded-full aspect-square object-cover w-full p-10 sm:aspect-auto sm:rounded-sm sm:p-0 sm:w-4/5 sm:m-auto"
								/>
							</div>
						</div>
					</section>
					<section>
						<div className="flex flex-col pt-10 sm:w-3/5 m-auto">
							<h2 className="m-auto text-xl pb-5 sm:m-0">
								My preferred languages
							</h2>
							<div className="m-auto w-full grid grid-cols-3 gap-2 sm:grid-cols-11 sm:gap-1">
								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
									alt="JavaScript"
									className="m-auto"
									width={50}
									height={50}
								/>
								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
									alt="TypeScript"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
									alt="Python"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
									alt="C#"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
									alt="C++"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
									alt="React"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
									alt="Sass"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
									alt="Firebase"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
									alt="Git"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
									alt="MaterialUI"
									className="m-auto"
									width={50}
									height={50}
								/>

								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
									alt="cloudflare"
									className="m-auto"
									width={50}
									height={50}
								/>
							</div>
						</div>
					</section>
					<section>
						<div className="w-full sm:w-3/5 m-auto mt-10 p-5 rounded-sm bg-white text-black">
							<h3 className="text-3xl font-bold">About me:</h3>
							<p>
								Eight years ago, I began my programming journey
								with batch scripting. It was a simple yet
								powerful way to automate tasks, and it sparked
								my interest in the world of coding. As I honed
								my skills and explored new languages and
								frameworks, my passion for programming grew.
								<br />
								<br />
								Recently, I took on a major project: developing
								a website for a scout camp involving 400 people.
								I built the site using React, a powerful
								JavaScript library that allowed me to create a
								dynamic, user-friendly interface. This project
								was both challenging and fulfilling, as it
								required careful planning and execution to
								ensure the site could handle everything from
								registration to real-time updates. Looking back,
								it’s incredible to see how far I’ve come—from
								batch scripting to building a robust web
								application that serves a large community.
							</p>
						</div>
					</section>

					<LogInButton />
				</div>
			</main>
		</>
	);
}
