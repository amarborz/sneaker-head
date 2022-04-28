import { useNavigate } from 'react-router-dom'
import ContactIcons from '../ContactIcons/ContactIcons'
import styles from './footer.module.css'
import FooterTrending from '../FooterTrending/FooterTrending'
import FooterNewReleases from '../FooterNewReleases/FooterNewReleases'

const Footer = () => {
	const navigate = useNavigate()

	const clickHandler = (endpoint) => {
		navigate(endpoint)
	}

	return (
		<div className={styles.footerContainer}>
			<h1>Sneaker Head</h1>

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
