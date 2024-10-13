import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

import styles from "./dashboard.module.css";

import { getServerSession } from "next-auth";
import { db } from "@/components/db";
import { projectsTable } from "@/components/db/schema";
import AddProject from "./addProject";

const Dashboard = async () => {
	const session = await getServerSession(authOptions);

	if (!session?.user.roles?.includes("admin")) {
		return <p>Access denied...</p>;
	}

	const projects = await db.select().from(projectsTable);

	const addProject = async () => {
		"use server";
		console.log("hey there");
	};

	return (
		<>
			<h1>Dashboard</h1>

			<div>
				<h2>Projects</h2>
				<div className={styles.dashboardProjects}>
					{projects.map((project) => {
						return (
							<div className={styles.dashboardProject}>
								<div className={styles.projectImg}>
									<img
										src={project.projectImageUrl ?? ""}
										alt={`Picture of ${project.projectName}`}
									/>
								</div>
								<div className={styles.projectDesc}>
									<p className={styles.large}>
										{project.projectName}
									</p>
									<p className={styles.default}>
										{project.projectDescription}
									</p>
									<p>{project.projectLink}</p>
									<p>{project.sourceLink}</p>
								</div>
								<div className={styles.projectButtons}>
									<button>Update</button>
									<button>Delete</button>
								</div>
							</div>
						);
					})}
				</div>
				<AddProject />
			</div>
		</>
	);
};

export default Dashboard;
