/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "minio.smallbenji.tech",
				port: "",
				pathname: "/smallbenji.tech/**",
			},
		],
	},
};

export default nextConfig;
