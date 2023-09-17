"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import clsx from "clsx";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
	children,
	href,
	className = "hover:text-red-400",
	activeClassName = "underline",
	exact = true,
}: {
	children: ReactNode;
	href: Route<T> | URL;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const isActive = !exact ? pathname.startsWith(href.toString()) : pathname === href;

	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
