import ContactIcons from '../ContactIcons/ContactIcons'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<h1>Sneaker Head</h1>
			<div className={styles.footerItemsContainer}>
				<div>
					<h4 className={styles.footerHeader}>Trending</h4>
					<p>Air Jordans</p>
					<p>Nike Dunks</p>
					<p>New Balance 990</p>
					<p>New Balance 327</p>
					<p>Air Max Day 2022</p>
				</div>
				<div>
					<h4 className={styles.footerHeader}>New Releases</h4>
					<p>Air Jordan 7 'Sapphire'</p>
					<p>Air Jordan 13 'Brave Blue'</p>
					<p>Yeezy 350 'Turtle Dove'</p>
					<p>Air Jordan 6 'Midnight Navy'</p>
					<p>Air Jordan 11 Low '72-10'</p>
					<p>Air Jordan 1 High 'Heritage'</p>
				</div>
				<div>
					<h4 className={styles.footerHeader}>Company</h4>
					<Link to="/about">
						<p>About Us</p>
					</Link>
					<Link to="/contact">
						<p>Contact Us</p>
					</Link>
					<ContactIcons color="white" />
				</div>
			</div>
		</div>
	)
}

export default Footer
