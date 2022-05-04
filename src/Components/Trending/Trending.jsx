import { useNavigate } from 'react-router-dom'

import styles from './trending.module.css'

import nikeImage from '../../utils/images/homePage/nikeSection.jpg'
import accessoriesImage from '../../utils/images/homePage/accessories.jpg'

const Trending = () => {
	const navigate = useNavigate()

	return (
		<>
			<h4 className={styles.sectionHeader}>TRENDING</h4>
			<div className={styles.sectionContainer}>
				<div
					className={styles.subSectionContainer}
					onClick={() => navigate('model')}
				>
					<img
						src={nikeImage}
						className={styles.sectionImage}
						alt="3d models"
					/>
					<h2 className={styles.subSectionHeader}>3D MODELS</h2>
				</div>
				<div
					className={styles.subSectionContainer}
					onClick={() => navigate('sneakers')}
				>
					<img
						src={accessoriesImage}
						className={styles.sectionImage}
						alt="sneakers"
					/>
					<h2 className={styles.subSectionHeader}>SNEAKERS</h2>
				</div>
			</div>
		</>
	)
}

export default Trending
