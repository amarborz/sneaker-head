import { useNavigate } from 'react-router-dom'

import ContactIcons from '../ContactIcons/ContactIcons'
import FooterTrending from '../FooterTrending/FooterTrending'
import FooterNewReleases from '../FooterNewReleases/FooterNewReleases'
import Logo from '../Logo/Logo'

import styles from './footer.module.css'

const Footer = () => {
	const navigate = useNavigate()

	const clickHandler = (endpoint) => {
		navigate(endpoint)
	}

	return (
		<div className={styles.footerContainer}>
			<Logo />

			<div className={styles.footerItemsContainer}>
				<FooterTrending onClick={clickHandler} />
				<FooterNewReleases onClick={clickHandler} />
				<div>
					<h4 className={styles.footerHeader}>Company</h4>
					<p onClick={() => clickHandler('/about')} className={styles.pointer}>
						About Us
					</p>
					<p
						onClick={() => clickHandler('/contact')}
						className={styles.pointer}
					>
						Contact Us
					</p>
					<ContactIcons color="white" />
				</div>
			</div>
		</div>
	)
}

export default Footer
