import styles from './productPageImage.module.css'

import adidasShoe from '../../Utils/Images/Products/adidasShoe.jpg'
import adidasShoe1 from '../../Utils/Images/Products/adidasShoe1.jpg'
import adidasShoe2 from '../../Utils/Images/Products/adidasShoe2.jpg'
import { Carousel, CarouselItem } from 'react-bootstrap'

const productPictures = [adidasShoe, adidasShoe1, adidasShoe2]

const ProductPageImage = () => {
	return (
		<div>
			<Carousel slide={false} variant="dark">
				{productPictures.map((picture) => {
					return (
						<CarouselItem key={picture}>
							<img src={picture} alt="adidas shoe" className="d-block w-100" />
						</CarouselItem>
					)
				})}
			</Carousel>
		</div>
	)
}

export default ProductPageImage
