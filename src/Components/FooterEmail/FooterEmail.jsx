import { useRef } from 'react'
import styles from './footerEmail.module.css'

const FooterEmail = () => {
	const emailInputRef = useRef()

	const sendEmailHandler = () => {
		const input = emailInputRef.current.value

		if (!input.includes('@') || !input.includes('.')) {
			alert('Please enter a valid email.')
			return
		}

		// Don't do this at home, bad practice!
		emailInputRef.current.value = ''
		alert('You subscribed to the weekly newsletter!')
	}

	return (
		<div className={styles.container}>
			<p className={styles.emailText}>SUBSCRIBE TO THE NEWSLETTER</p>
			<input type="email" ref={emailInputRef} className={styles.emailInput} />
			<button className={styles.emailButton} onClick={sendEmailHandler}>
				SUBSCRIBE
			</button>
		</div>
	)
}

export default FooterEmail
