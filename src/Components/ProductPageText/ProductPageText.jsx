import { useState } from 'react'

import styles from './productPageText.module.css'

const sizes = [38, 39, 40, 41, 42, 43, 44, 45]

const ProductPageText = ({ brand, name, desc, features, price, gender }) => {
	const [shoeSize, setShoeSize] = useState()

	return (
		<div className={styles.textContainer}>
			<h4>{brand}</h4>
			<p className={styles.productName}>{name}</p>
			<p>{gender}</p>
			<p className={styles.price}>${price}.00</p>
			<p>Size:</p>
			<div className={styles.sizes}>
				{sizes.map((size) => {
					return (
						<button
							className={
								size === shoeSize ? styles.sizeActiveButton : styles.sizeButton
							}
							key={size}
							onClick={() => setShoeSize(size)}
						>
							{size}
						</button>
					)
				})}
			</div>
			<div className={styles.detailsContainer}>
				<p>{desc}</p>
				<p>Features:</p>
				<ul className={styles.listContainer}>
					{features.map((feature) => (
						<li key={feature}>{feature}</li>
					))}
				</ul>
			</div>
			<button className={styles.addButton}>ADD TO CART</button>
		</div>
	)
}

export default ProductPageText
