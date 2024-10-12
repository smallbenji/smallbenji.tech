import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Fynsdistrikt from "../../../public/fynsdistrikt.png";
import { db } from "@/db";
import { projectsTable } from "@/db/schema";

export default async function Portfolio() {
	const projects = await db.select().from(projectsTable);

	console.log(projects);

	return (
		<main>
			<Link href="/">
				<p>{"<-"} Back</p>
			</Link>
			<div className={styles.Projects}>
				{projects.map((project) => {
					return (
						<div className={styles.Project} key={project.id}>
							<div className={styles.imageContainer}>
								<Image
									src={project.projectImageUrl ?? ""}
									alt={`Picture of ${project.projectName}`}
									className={styles.image}
									width={800}
									height={450}
								/>
								{/* <img
									src={project.projectImageUrl ?? ""}
									alt={`Picture of ${project.projectName}`}
									className={styles.image}
								/> */}
							</div>
							<div className={styles.descriptionBox}>
								<h2>{project.projectName}</h2>
								<p>{project.projectDescription}</p>
								{project.projectLink ? (
									<>
										<a
											href={project.projectLink}
											className={styles.Link}
										>
											<div className={styles.Button}>
												<h3>Visit</h3>
											</div>
										</a>
									</>
								) : null}
								{project.sourceLink ? (
									<>
										<a
											href={project.sourceLink}
											className={styles.Link}
										>
											<div className={styles.Button}>
												<h3>Visit</h3>
											</div>
										</a>
									</>
								) : null}
							</div>
						</div>
					);
				})}
				<div className={styles.Project}>
					<div className={styles.imageContainer}>
						<Image
							src={Fynsdistrikt}
							className={styles.image}
							alt="Picture of fynsdistrikt website"
						/>
					</div>
					<div className={styles.descriptionBox}>
						<h2>Fynsdistrikt</h2>
						<p>
							A scout website for a summer scout camp. It has a
							activity system and registration system. It is built
							in React with firebase as an backend and auth
							server.
						</p>
						<a
							href="https://fynsdistrikt.smallbenji.tech"
							className={styles.Link}
						>
							<div className={styles.Button}>
								<h3>Visit</h3>
							</div>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
