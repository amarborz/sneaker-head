// React
import { useState } from 'react'

// Styles
import styles from './brands.module.css'
import { FaArrowRight } from 'react-icons/fa'

// Data
import { brands } from '../../utils/data/brandInfo'
import { logos } from '../../utils/data/logoInfo'
import { Link } from 'react-router-dom'

const Brands = () => {
	const [activeBrand, setActiveBrand] = useState(brands[0])

	const changeActiveHandler = (name) => {
		const newBrand = brands.filter((brand) => brand.name === name)
		setActiveBrand(newBrand[0])
	}

	return (
		<>
			<Link to={`/brands/${activeBrand.id}`} className={styles.link}>
				<div className={styles.container}>
					<div className={styles.leftContainer}>
						<h2>{activeBrand.name}</h2>
						<p>{activeBrand.desc}</p>
						<p>
							Discover the collection <FaArrowRight />
						</p>
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
			</Link>

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
