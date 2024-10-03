/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "summagold.com",
				port: "",
				pathname: "/wp-content/uploads/**",
			},
			{
				protocol: "https",
				hostname: "reqlut2.s3.amazonaws.com",
				port: "",
				pathname: "/uploads/logos/**",
			},
		],
	},
};

export default nextConfig;
