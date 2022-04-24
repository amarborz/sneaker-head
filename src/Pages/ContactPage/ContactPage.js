import { ContactForm, ContactInfo } from '../../components'

import styles from './contactPage.module.css'

const ContactPage = () => {
	return (
		<div className={styles.contactContainer}>
			<ContactForm />
			<ContactInfo />
		</div>
	)
}

export default ContactPage
