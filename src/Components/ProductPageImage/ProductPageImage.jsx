import { Carousel, CarouselItem } from 'react-bootstrap'

import styles from './productPageImage.module.css'

const ProductPageImage = ({ images, name }) => {
	return (
		<div className={styles.imageContainer}>
			<Carousel slide={false} variant="dark">
				{images.map((image) => {
					return (
						<CarouselItem key={image}>
							<img src={image} alt={name} className="d-block w-100" />
						</CarouselItem>
					)
				})}
			</Carousel>
		</div>
	)
}

export default ProductPageImage
