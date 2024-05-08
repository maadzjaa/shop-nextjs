import styles from '@/app/login/page.module.css';

export default function Login() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.header}>My account</h2>
			<div className={styles.buttonsWrapper}>
				<button className={styles.button}>Sign in</button>
				<button className={styles.button}>Register</button>
			</div>
			<input className={styles.input} type='email' id='email' placeholder='Email' />
			<input className={styles.input} type='password' id='pass' name='password' required placeholder='Password' />
			<div>
				<input type='checkbox' name='remember-me' value='user' /> <label htmlFor='remember-me'> Remember me</label>
			</div>

			<input className={styles.submitButton} type='submit' value='Sign in' />
			<a href='/'>
				<p>Have you forgotten your password?</p>
			</a>
		</div>
	);
}
