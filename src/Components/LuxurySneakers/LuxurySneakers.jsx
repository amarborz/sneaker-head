import styles from './luxurySneakers.module.css'

import { carouselBrandInfo } from '../../Utils/Data/carouselBrandInfo'

const LuxurySneakers = () => {
	return (
		<>
			<h4 className={styles.sectionHeader}>LUXURY SNEAKERS</h4>
			<div className={styles.brandsContainer}>
				{carouselBrandInfo.map((brand) => {
					return <img src={brand.image} alt={brand.name} key={brand.name} />
				})}
			</div>
		</>
	)
}

export default LuxurySneakers
