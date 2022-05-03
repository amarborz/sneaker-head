import { useNavigate } from 'react-router-dom'

import styles from './productsCard.module.css'

const ProductsCard = ({ products }) => {
	const navigate = useNavigate()

	const productPageHandler = (id) => {
		navigate('/product/' + id)
	}

	return (
		<div className={styles.productContainer}>
			{products.map((product) => {
				const { brand, id, name, price, image } = product

				return (
					<div
						key={id}
						className={styles.productCard}
						onClick={() => productPageHandler(id)}
					>
						<img
							src={image ? image : product.images[0]}
							alt={name}
							className={styles.cardImage}
						/>
						<p className={styles.cardHeader}>{brand}</p>
						<p className={styles.cardDesc}>{name}</p>
						<p className={styles.cardPrice}>{`$${price}.00`}</p>
					</div>
				)
			})}
		</div>
	)
}

export default ProductsCard
