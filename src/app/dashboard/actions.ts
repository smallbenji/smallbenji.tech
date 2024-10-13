"use server";

import { db } from "@/components/db";
import { projectsTable, Projects } from "@/components/db/schema";

export const addProject = async (project: Projects) => {
	await db.insert(projectsTable).values({
		projectName: project.projectName,
		projectDescription: project.projectDescription,
		projectImageUrl: project.projectImageUrl,
		projectLink: project.projectLink,
		sourceLink: project.sourceLink,
	});

	console.log(`Added project: ${project.projectName}`);
};
