import styles from './contactIcons.module.css'

import { FaInstagram, FaFacebookSquare, FaYoutube } from 'react-icons/fa'

const ContactIcons = ({ color }) => {
	const socialMedia = [
		{
			icon: (
				<FaFacebookSquare
					className={color === 'white' ? styles.iconWhite : styles.iconBlack}
				/>
			),
			site: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		},
		{
			icon: (
				<FaInstagram
					className={color === 'white' ? styles.iconWhite : styles.iconBlack}
				/>
			),
			site: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		},
		{
			icon: (
				<FaYoutube
					className={color === 'white' ? styles.iconWhite : styles.iconBlack}
				/>
			),
			site: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		},
	]

	return (
		<div className={styles.iconsContainer}>
			{socialMedia.map((media, index) => (
				<a href={media.site} target="_blank" rel="noreferrer" key={index}>
					{media.icon}
				</a>
			))}
		</div>
	)
}

export default ContactIcons
