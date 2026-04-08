import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Onur Portfolio",
	description: "Personal portfolio and project showcase.",
	icons: {
		icon: "/icon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
