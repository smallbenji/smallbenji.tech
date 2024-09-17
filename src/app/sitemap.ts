import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.smallbenji.tech",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: "https://www.smallbenji.tech/archieve",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.8,
		},
	];
}
