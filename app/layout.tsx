import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const dmsans = DM_Sans({ subsets: ['latin'],
weight:['400', '500', '700'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={dmsans.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
