import { useState } from 'react'

import styles from './productPageText.module.css'

const sizes = [38, 39, 40, 41, 42, 43, 44, 45]

const ProductPageText = () => {
	const [shoeSize, setShoeSize] = useState()

	return (
		<div className={styles.textContainer}>
			<h4>ADIDAS</h4>
			<p className={styles.productName}>Choigo sneakers</p>
			<p>WOMAN Sneaker</p>
			<p className={styles.price}>€130.00</p>
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
				<p>White, silver and pink Choigo sneakers by Adidas.</p>
				<p>Features:</p>
				<ul className={styles.listContainer}>
					<li>almond toe</li>
					<li>quick lacing system</li>
					<li>layered heel counter with embossed logo</li>
					<li>raised sole</li>
					<li>studded details</li>
					<li>rubber sole</li>
				</ul>
			</div>
			<button className={styles.addButton}>ADD TO CART</button>
		</div>
	)
}

export default ProductPageText
