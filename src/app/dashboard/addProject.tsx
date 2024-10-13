"use client";

import React from "react";

import styles from "./addProject.module.css";

import { addProject } from "./actions";
import { Projects } from "@/components/db/schema";

const AddProject = () => {
	const [modal, setModal] = React.useState(false);

	const [projectName, setProjectName] = React.useState("");
	const [projectDescription, setProjectDescription] = React.useState("");
	const [projectImageUrl, setProjectImageUrl] = React.useState("");
	const [projectLink, setProjectLink] = React.useState("");
	const [sourceLink, setSourceLink] = React.useState("");

	const addProjectToDb = async () => {
		const project: Projects = {
			id: 0,
			projectName: projectName,
			projectDescription: projectDescription,
			projectImageUrl: projectImageUrl,
			projectLink: projectLink,
			sourceLink: sourceLink,
		};

		await addProject(project);

		setModal(false);
	};
	return (
		<div>
			<button onClick={() => setModal(true)}>Add Project</button>
			{modal && (
				<>
					<div className={styles.modal}>
						<div className={styles.modalContent}>
							<div className={styles.modalHeader}>
								<h1>Add Project</h1>
							</div>
							<div className={styles.modalBody}>
								<input
									type="text"
									placeholder="Project Name"
									value={projectName}
									onChange={(e) =>
										setProjectName(e.target.value)
									}
								/>
								<input
									type="text"
									placeholder="Project Description"
									value={projectDescription}
									onChange={(e) =>
										setProjectDescription(e.target.value)
									}
								/>
								<input
									type="text"
									placeholder="Project Image URL"
									value={projectImageUrl}
									onChange={(e) =>
										setProjectImageUrl(e.target.value)
									}
								/>
								<input
									type="text"
									placeholder="Project Link"
									value={projectLink}
									onChange={(e) =>
										setProjectLink(e.target.value)
									}
								/>
								<input
									type="text"
									placeholder="Source Link"
									value={sourceLink}
									onChange={(e) =>
										setSourceLink(e.target.value)
									}
								/>
								<button onClick={() => addProjectToDb()}>
									Add Project
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default AddProject;
