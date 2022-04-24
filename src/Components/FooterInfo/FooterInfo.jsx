import styles from './footerInfo.module.css'

import { FaShippingFast } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const footerData = [
	{
		icon: <FaShippingFast className={styles.icon} />,
		mainText: 'FAST SHIPPING',
		subText: 'DELIVERIES WORLDWIDE',
	},
	{
		icon: <FaCreditCard className={styles.icon} />,
		mainText: 'SECURE PAYMENT',
		subText: 'PAYPAL OR CREDIT CARD',
	},
	{
		icon: <FaEnvelope className={styles.icon} />,
		mainText: 'GREAT DISCOUNTS',
		subText: 'SUBSCRIBE TO THE NEWSLETTER',
	},
]

const FooterInfo = () => {
	return (
		<div className={styles.container}>
			{footerData.map((data) => {
				return (
					<div key={data.mainText}>
						{data.icon}
						<p className={styles.mainText}>{data.mainText}</p>
						<p className={styles.subText}>{data.subText}</p>
					</div>
				)
			})}
		</div>
	)
}

export default FooterInfo
