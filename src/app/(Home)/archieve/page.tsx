import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/components/db";
import { projectsTable } from "@/components/db/schema";
import { Button } from "@/components/ui/button";

export default async function Portfolio() {
	const projects = await db.select().from(projectsTable);

	return (
		<main>
			<Link href="/">
				<Button>{"<-"} Back</Button>
			</Link>
			<div className="w-full sm:w-1/2 sm:m-auto">
				{projects.map((project) => {
					return (
						<div
							className="w-11/12 bg-zinc-900 m-auto rounded-sm flex flex-col"
							key={project.id}
						>
							<div className="relative aspect-video object-cover m-5 rounded-sm pt-5">
								<Image
									src={project.projectImageUrl ?? ""}
									alt={`Picture of ${project.projectName}`}
									className="aspect-video object-cover rounded-sm"
									fill
									loading="eager"
								/>
							</div>
							<div className="m-5 mt-0">
								<h2 className="text-3xl">
									{project.projectName}
								</h2>
								<p>{project.projectDescription}</p>
								{project.projectLink ? (
									<>
										<a
											href={project.projectLink}
											className=""
										>
											<div className="pt-5">
												<Button>Visit</Button>
											</div>
										</a>
									</>
								) : null}
								{project.sourceLink ? (
									<>
										<a
											href={project.sourceLink}
											className=""
										>
											<div className="pt-5">
												<Button>Source</Button>
											</div>
										</a>
									</>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}
