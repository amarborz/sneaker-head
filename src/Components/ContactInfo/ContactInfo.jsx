import styles from './contactInfo.module.css'

import { FaPhoneSquareAlt } from 'react-icons/fa'
import ContactIcons from '../ContactIcons/ContactIcons'

const ContactInfo = () => {
	return (
		<div className={styles.contactInfoContainer}>
			<h2 className={styles.infoHeader}>Sneaker Head</h2>
			<p>Times Square, New York (USA)</p>
			<p>
				<FaPhoneSquareAlt className={styles.smallIcon} />
				(123) 4567890
			</p>
			<ContactIcons color="black" />
		</div>
	)
}

export default ContactInfo
