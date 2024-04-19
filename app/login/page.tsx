import styles from '@/app/login/page.module.css'

export default function Login() {
	return (
		<div className={styles.wrapper}>
			<h2>My account</h2>
			<div>
				<button>Sign in</button>
				<button>Register</button>
			</div>
			<input className={styles.emailInput} type='email' id='email' placeholder='Email' />
			<input type='password' id='pass' name='password' required placeholder='Password' />
			<input type='submit' value='Sign in' />
			<a href='/'>
				<p>Have you forgotten your password?</p>
			</a>
		</div>
	);
}
