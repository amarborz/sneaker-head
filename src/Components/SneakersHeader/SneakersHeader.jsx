// CSS
import styles from './sneakersHeader.module.css'

const SneakersHeader = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>All Sneakers</h1>
			<p className={styles.text}>
				At <span>Sneaker Head</span> you can find a wide selection of sneakers:
				a product originally created for sports, sneakers have become a must in
				everyday life. Within our selection there is a wide range of sneakers
				suitable for any occasion: low, high, retro, ogs, skate, basketball,
				tennis, running, trail and lifestyle. Our wide range of brands ranges
				from more contemporary choices to vintage collections, special/unique
				collaborations and new releases.
			</p>
		</div>
	)
}

export default SneakersHeader
