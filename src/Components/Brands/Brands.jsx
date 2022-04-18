// React
import { useState } from 'react'

// Styles
import styles from './brands.module.css'

// Data
import { brands } from '../../Utils/Data/brandInfo'
import { logos } from '../../Utils/Data/logoInfo'

const Brands = () => {
	const [activeBrand, setActiveBrand] = useState(brands[0])

	const changeActiveHandler = (name) => {
		const newBrand = brands.filter((brand) => brand.name === name)
		setActiveBrand(newBrand[0])
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.leftContainer}>
					<h2>{activeBrand.name}</h2>
					<p>{activeBrand.desc}</p>
					<p>discover the collection</p>
				</div>
				<div className={styles.imageContainer}>
					<img
						src={activeBrand.image}
						className={styles.image}
						alt={activeBrand.name}
					/>
				</div>
				<div className={styles.rightContainer}>
					<h2>{activeBrand.name}</h2>
					<p>{activeBrand.desc}</p>
				</div>
			</div>

			<div className={styles.logoContainer}>
				{logos.map((logo) => {
					return (
						<img
							key={logo.name}
							src={logo.image}
							alt={logo.name}
							className={
								logo.name === activeBrand.name
									? styles.logoImageActive
									: styles.logoImage
							}
							onClick={() => changeActiveHandler(logo.name)}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Brands
