import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/components/db";
import { projectsTable } from "@/components/db/schema";
import { Button } from "@/components/ui/button";

export default async function Portfolio() {
	const projects = await db.select().from(projectsTable);

	return (
		<main className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
			{
				projects.map(x => {
					return (
						<div className="w-full h-full bg-zinc-900 p-5 rounded-md flex flex-col">
							<div className="relative w-full aspect-video p-5">
								<Image
									src={x.projectImageUrl ?? ""}
									fill
									alt={x.projectName ?? ""}
								/>
							</div>
							<div className="mt-2">
								<h2 className="text-2xl">{x.projectName}</h2>
								{x.projectDescription}
							</div>
							<div className="flex-1"></div>
							<div className="flex gap-4">
								{
									x.projectLink && (
										<a href={x.projectLink}>
											<Button >
												Visit
											</Button>
										</a>
									)
								}
								{
									x.sourceLink && (
										<a href={x.sourceLink}>
											<Button>
												Source
											</Button>
										</a>
									)
								}
							</div>
						</div>
					)
				})
			}
		</main>
	);
}
