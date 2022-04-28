// React/Hooks
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch, useTimeout } from '../../utils/hooks'

// Components
import { ProductPageImage, ProductPageText, Loader } from '../../components'

import styles from './productPage.module.css'

const ProductPage = () => {
	const { productId } = useParams()

	const brandData = useFetch(`products/${productId}`)

	const productNotFound = useTimeout(brandData)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [productId])

	if (productNotFound) {
		return <h2 className={styles.header}>No Results.</h2>
	}

	if (!brandData) {
		return <Loader />
	}

	return (
		<div className={styles.productContainer}>
			<ProductPageImage {...brandData} />
			<ProductPageText {...brandData} />
		</div>
	)
}

export default ProductPage
