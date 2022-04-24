import styles from './luxurySneakers.module.css'

import { carouselBrandInfo } from '../../utils/data/carouselBrandInfo'
import { useNavigate } from 'react-router-dom'

const LuxurySneakers = () => {
	const navigate = useNavigate()

	const brandPageHandler = (id) => {
		navigate('/brands/' + id)
	}

	return (
		<>
			<h4 className={styles.sectionHeader}>LUXURY SNEAKERS</h4>
			<div className={styles.brandsContainer}>
				{carouselBrandInfo.map((brand) => {
					return (
						<img
							src={brand.image}
							alt={brand.name}
							key={brand.name}
							className={styles.brandItem}
							onClick={() => brandPageHandler(brand.id)}
						/>
					)
				})}
			</div>
		</>
	)
}

export default LuxurySneakers
