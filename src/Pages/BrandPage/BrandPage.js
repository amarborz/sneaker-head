// React/Hooks
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch, useTimeout } from '../../utils/hooks'

// Components
import { BrandsPageHeader, Loader, Products } from '../../components'

import styles from './brandPage.module.css'

const BrandPage = () => {
	const { brandName } = useParams()

	const brandData = useFetch(`brand/${brandName}`)

	const pageNotFound = useTimeout(brandData)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	if (pageNotFound) {
		return <h2 className={styles.header}>No Results.</h2>
	}

	if (!brandData) {
		return <Loader />
	}

	return (
		<>
			<BrandsPageHeader {...brandData} />
			<Products {...brandData} shoeBrand={brandData.name} />
		</>
	)
}

export default BrandPage
