import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';

import ActiveLink from '../atoms/ActiveLink';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>
				<Image src='/images/shop-logo.png' width={150} height={150} alt='shop logo' />
			</Link>
			<div className={styles.navLinks}>
				<ActiveLink href='/'>Shop</ActiveLink>
				<ActiveLink href='/products'>Blog</ActiveLink>
				<ActiveLink href='/categories'>Our Story</ActiveLink>

				<Link href='/cart'>
					<IoIosSearch size={30} />
				</Link>
				<Link href='/cart'>
					<IoCartOutline size={30} />
				</Link>
				<Link href='/cart'>
					<CiUser size={30} />
				</Link>
			</div>
		</nav>
	);
}
