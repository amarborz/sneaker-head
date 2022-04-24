import { useParams } from 'react-router-dom'
import useFetch from '../../utils/hooks/useFetch'

import { ProductPageImage, ProductPageText } from '../../components'

import styles from './productPage.module.css'

const ProductPage = () => {
	const params = useParams()
	const { productId } = params

	const brandData = useFetch(`products/${productId}`)

	if (!brandData) {
		return <h1>Loading...</h1>
	}

	return (
		<div className={styles.productContainer}>
			<ProductPageImage {...brandData} />
			<ProductPageText {...brandData} />
		</div>
	)
}

export default ProductPage
