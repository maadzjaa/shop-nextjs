import Link from 'next/link';
import Image from 'next/image';
import Logo from './shop-logo.png';
import styles from './Navbar.module.css';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';

import ActiveLink from './ActiveLink';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Image src={Logo} alt='shop logo' className={styles.logo}></Image>
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
