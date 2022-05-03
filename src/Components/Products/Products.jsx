// import { useNavigate } from 'react-router-dom'
import ProductsCard from '../ProductsCard/ProductsCard'
import styles from './products.module.css'

const Products = ({ products, shoeBrand }) => {
	let newProducts
	// const navigate = useNavigate()

	if (products) {
		newProducts = Object.values(products)
	}

	// const productPageHandler = (id) => {
	// 	navigate('/product/' + id)
	// }

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
			{/* <div className={styles.productContainer}>
				{newProducts.map((product) => {
					const { brand, id, name, price, image } = product

					return (
						<div
							key={id}
							className={styles.productCard}
							onClick={() => productPageHandler(id)}
						>
							<img src={image} alt={name} />
							<p className={styles.cardHeader}>{brand}</p>
							<p className={styles.cardDesc}>{name}</p>
							<p className={styles.cardPrice}>{`$${price}.00`}</p>
						</div>
					)
				})}
			</div> */}
		</>
	)
}

export default Products
