// Styles
import styles from './brandsPageHeader.module.css'

const BrandsPageHeader = ({ name, slogan, image, desc }) => {
	return (
		<>
			<div className={styles.imageContainer}>
				<img src={image} className={styles.imageBrand} alt={name} />
				{/* <h1 className={styles.imageHeader}>{activeBrandPage.header}</h1> */}
			</div>
			<div className={styles.sectionText}>
				<h2 className={styles.sectionHeader}>{slogan}</h2>
				<p>{desc}</p>
			</div>
		</>
	)
}

export default BrandsPageHeader
