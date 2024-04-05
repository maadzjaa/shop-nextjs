import Link from 'next/link';
import Image from 'next/image';
import Logo from './shop-logo.png';
import styles from './Navbar.module.css';
import Cart from './cart.png';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Image src={Logo} alt='shop logo' className={styles.logo}></Image>
			<div className={styles.navLinks}>
				<Link href='/'>Dashboard</Link>
				<Link href='/products'>All products</Link>
				<Link href='/categories'>Categories</Link>
			</div>
			<div className={styles.cart}>
				<Link href='/cart'>
					<Image src={Cart} alt='shopping cart'></Image>
				</Link>
			</div>
		</nav>
	);
}
