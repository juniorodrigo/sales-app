import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configura la fuente Inter
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Portal de administración de compras de Summa Gold Corporation",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>{children}</body>
		</html>
	);
}
