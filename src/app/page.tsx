import Image from "next/image";
import styles from "./page.module.css";

import "./Home.scss";
import Link from "next/link";

import PFP from "../../public/smallbenji.jpg";
import { Metadata } from "next";
import { db } from "@/db";
import { userTable } from "@/db/schema";

export const metadata: Metadata = {
	title: "smallbenji ✨",
	description: "smallbenji's personal portfolio website",
};

const test = () => {
	const test = db.query.userTable.findMany();
	console.log(test);
};

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="MainFrame">
				<section>
					<div className="Frame">
						<div className="left">
							<div className="TitleBox">
								<h1>smallbenji✨</h1>
								<h3>{"<Code is life />"}</h3>
								<p>
									A simple guy with a big passion for
									programming🚀
								</p>
							</div>
							<Link href="/archieve">
								<div className="ArchieveButton">
									<h2>Archieve</h2>
								</div>
							</Link>
							<a href="https://www.github.com/smallbenji">
								<Image
									src="/github-mark-white.svg"
									alt="GitHub"
									className="GithubIcon"
									width={50}
									height={50}
								/>
							</a>
						</div>
						<div className="right">
							<Image src={PFP} alt="" placeholder="blur" />
						</div>
					</div>
				</section>
				<section>
					<div className="Languages">
						<h2>My preferred technologies</h2>
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
							alt="JavaScript"
							className={styles.Image}
							width={50}
							height={50}
						/>
						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
							alt="TypeScript"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
							alt="Python"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
							alt="C#"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
							alt="C++"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
							alt="React"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
							alt="Sass"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
							alt="Firebase"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
							alt="Git"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
							alt="MaterialUI"
							className={styles.Image}
							width={50}
							height={50}
						/>

						<Image
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
							alt="cloudflare"
							width={50}
							height={50}
						/>
					</div>
				</section>
				<section>
					<div className="InformationBox">
						<article>
							<h1>About me</h1>
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
						</article>
					</div>
				</section>
			</div>
		</main>
	);
}
