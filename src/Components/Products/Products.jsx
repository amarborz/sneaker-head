import { useNavigate } from 'react-router-dom'
import styles from './products.module.css'

// import { brandPageProduct } from '../../Utils/Data/brandPageProducts'

const Products = ({ products, shoeBrand }) => {
	const newProducts = Object.values(products)
	const navigate = useNavigate()

	const productPageHandler = (id) => {
		navigate('/product/' + id)
	}

	return (
		<>
			<h3 className={styles.productHeader}>{shoeBrand}</h3>
			<div className={styles.productContainer}>
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
			</div>
		</>
	)
}

export default Products
