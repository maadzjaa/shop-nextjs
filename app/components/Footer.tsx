import Link from 'next/link';
import EmailForm from './EmailForm';
import { FaInstagram } from 'react-icons/fa';
import { ImPinterest2 } from 'react-icons/im';
import { CiFacebook } from 'react-icons/ci';
import styles from './Footer.module.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.topFooter}>
				<div className={styles.links}>
					<Link className={styles.link} href='/contact'>
						Contact
					</Link>
					<Link href='/shipping'>Shipping and returns</Link>
					<Link href='/contact'>Blog</Link>
				</div>
				<EmailForm />
			</div>

			<div className={styles.bottomFooter}>
				<div className={styles.paragraph}>
					<p>
						&copy; {currentYear} Girls for Girls. <Link href='/terms-of-use'>Terms of use</Link> and <Link href='/privacy'>privacy policy</Link>.
					</p>
				</div>
				<div className={styles.icons}>
					<Link href='/'>
						<CiFacebook size={25} />
					</Link>
					<Link href='/'>
						<FaInstagram size={25} />
					</Link>
					<Link href='/'>
						<ImPinterest2 size={25} />
					</Link>
				</div>
			</div>
		</footer>
	);
}
