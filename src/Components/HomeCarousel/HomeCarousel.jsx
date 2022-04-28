// React/Hooks
import { Link } from 'react-router-dom'

// Bootstrap Carousel
import { Carousel } from 'react-bootstrap'

// Images
import nikeImage from '../../utils/images/homePage/nikeHomePage.png'
import newBalanceImage from '../../utils/images/homePage/newBalanceHomePagee.png'
import jordanImage from '../../utils/images/homePage/airJordans.png'
import secondNikeImage from '../../utils/images/homePage/nikeHomePage2.png'

// Styles
import styles from './homeCarousel.module.css'
import { FaFireAlt } from 'react-icons/fa'

const carouselData = [
	{ name: 'Nike Air', endpoint: '/brands/nike', image: nikeImage },
	{
		name: 'New Balance 574',
		endpoint: '/brands/newBalance',
		image: newBalanceImage,
	},
	{ name: 'Air Jordan 1', endpoint: '/product/3205', image: jordanImage },
	{ name: 'Nike Air Max', endpoint: '/brands/nike', image: secondNikeImage },
]

const HomeCarousel = () => {
	return (
		<div className={styles.homePageBackground}>
			<Carousel variant="dark">
				{carouselData.map((data) => {
					return (
						<Carousel.Item key={data.name}>
							<Link to={data.endpoint}>
								<img
									className="d-block m-auto w-50"
									src={data.image}
									alt="First slide"
								/>
								<br />
								<Carousel.Caption>
									<h5>{data.name}</h5>
								</Carousel.Caption>
							</Link>
						</Carousel.Item>
					)
				})}
			</Carousel>
			<h4 className={styles.overlay}>
				POPULAR <FaFireAlt />
			</h4>
		</div>
	)
}

export default HomeCarousel
