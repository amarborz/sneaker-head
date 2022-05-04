import ProductsCard from '../ProductsCard/ProductsCard'

import styles from './products.module.css'

const Products = ({ products, shoeBrand }) => {
	let newProducts

	if (products) {
		newProducts = Object.values(products)
	}

	if (!products) {
		return (
			<>
				<h3 className={styles.productHeader}>{shoeBrand}</h3>
				<h5 className={styles.header}>NO PRODUCTS AVAILABLE CURRENTLY</h5>
			</>
		)
	}

	return (
		<>
			<h3 className={styles.productHeader}>{shoeBrand}</h3>
			<ProductsCard products={newProducts} />
		</>
	)
}

export default Products
