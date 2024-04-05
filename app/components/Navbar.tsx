import Link from 'next/link';
import Image from 'next/image';
import Logo from './shop-logo.png';
import styles from './Navbar.module.css';
import Cart from './cart.png';
import ActiveLink from './ActiveLink';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Image src={Logo} alt='shop logo' className={styles.logo}></Image>
			<div className={styles.navLinks}>
				<ActiveLink href='/'>Dashboard</ActiveLink>
				<ActiveLink href='/products'>All products</ActiveLink>
				<ActiveLink href='/categories'>Categories</ActiveLink>
			</div>
			<div className={styles.cart}>
				<Link href='/cart'>
					<Image src={Cart} alt='shopping cart'></Image>
				</Link>
			</div>
		</nav>
	);
}
