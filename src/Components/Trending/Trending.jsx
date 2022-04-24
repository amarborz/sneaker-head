import styles from './trending.module.css'

import nikeImage from '../../utils/images/homePage/nikeSection.jpg'
import accessoriesImage from '../../utils/images/homePage/accessories.jpg'

const Trending = () => {
	return (
		<>
			<h4 className={styles.sectionHeader}>NEW</h4>
			<div className={styles.sectionContainer}>
				<div className={styles.subSectionContainer}>
					<img
						src={nikeImage}
						className={styles.sectionImage}
						alt="3d models"
					/>
					<h2 className={styles.subSectionHeader}>3D Models</h2>
				</div>
				<div className={styles.subSectionContainer}>
					<img
						src={accessoriesImage}
						className={styles.sectionImage}
						alt="accessories"
					/>
					<h3 className={styles.subSectionHeader}>Accessories</h3>
				</div>
			</div>
		</>
	)
}

export default Trending
