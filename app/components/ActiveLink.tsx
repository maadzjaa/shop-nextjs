'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

export default function ActiveLink({ href, children }: { href: string; children: ReactNode }) {
	const path = usePathname();
	const isActive = path === href;
	return (
		<Link href={href} className={isActive ? style.linkActive : ''}>
			{children}
		</Link>
	);
}
