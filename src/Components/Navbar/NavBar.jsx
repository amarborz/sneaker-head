import styles from './navbar.module.css'

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<h2>
				Sneaker
				<br />
				Head
			</h2>
			<div className={styles.items}>
				<h2>Home</h2>
				<h2>Sneakers</h2>
				<h2>About</h2>
			</div>
		</div>
	)
}

export default NavBar
