// React
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Styles
import styles from './brandsPageHeader.module.css'

// Data
import { brandPageInfo } from '../../Utils/Data/brandPageInfo'

const BrandsPageHeader = () => {
	const [activeBrandPage, setActiveBrandPage] = useState(brandPageInfo[0])
	const params = useParams()
	const { brandName } = params

	useEffect(() => {
		const newBrand = brandPageInfo.filter((brand) => brand.header === brandName)
		setActiveBrandPage(newBrand[0])
	}, [brandName])

	return (
		<>
			<div className={styles.imageContainer}>
				<img
					src={activeBrandPage.image}
					className={styles.imageBrand}
					alt={activeBrandPage.header}
				/>
				{/* <h1 className={styles.imageHeader}>{activeBrandPage.header}</h1> */}
			</div>
			<div className={styles.sectionText}>
				<h2 className={styles.sectionHeader}>{activeBrandPage.slogan}</h2>
				<p>{activeBrandPage.text}</p>
			</div>
		</>
	)
}

export default BrandsPageHeader
