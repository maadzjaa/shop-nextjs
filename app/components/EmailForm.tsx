import styles from './EmailForm.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';


export default function EmailForm() {
	return (
		<form className={styles.emailForm}>
			<input className={styles.emailInput} type='email' id='email' placeholder='Give an email, get the newsletter.' />
			<FaArrowRightLong />
		</form>
	);
}
