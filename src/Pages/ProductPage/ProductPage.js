import ProductPageImage from '../../Components/ProductPageImage/ProductPageImage'
import ProductPageText from '../../Components/ProductPageText/ProductPageText'
import styles from './productPage.module.css'

const ProductPage = () => {
	return (
		<div className={styles.productContainer}>
			<ProductPageImage />
			<ProductPageText />
		</div>
	)
}

export default ProductPage
