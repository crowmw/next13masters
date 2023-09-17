import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NEXT13MASTERS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav className="flex flex-wrap items-center justify-between bg-slate-500 p-6">
					<ul className="mr-6 flex flex-shrink-0 items-center text-white">
						<li className="mr-8">
							<ActiveLink href="/">Home</ActiveLink>
						</li>
						<li className="mr-8">
							<ActiveLink href="/products">All</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md bg-slate-200 p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="py-8 text-center text-sm text-slate-500">
					<p>© 2023 of NEXT13MASTERS.</p>
				</footer>
			</body>
		</html>
	);
}
