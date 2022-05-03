import { useEffect } from 'react'

import { ContactForm, ContactInfo } from '../../components'

import styles from './contactPage.module.css'

const ContactPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className={styles.contactContainer}>
			<ContactForm />
			<ContactInfo />
		</div>
	)
}

export default ContactPage
