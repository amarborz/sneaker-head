// Bootstrap Carousel
import { Carousel } from 'react-bootstrap'

// Images
import nikeImage from '../../utils/images/homePage/nikeHomePage.png'
import newBalanceImage from '../../utils/images/homePage/newBalanceHomePagee.png'
import jordanImage from '../../utils/images/homePage/airJordan1.png'

// Styles
import styles from './homeCarousel.module.css'
import { FaFireAlt } from 'react-icons/fa'

const carouselData = [
	{ name: 'Nike Air', desc: '', image: nikeImage },
	{ name: 'New Balance 574', desc: '', image: newBalanceImage },
	{ name: 'Nike Air Max', desc: '', image: jordanImage },
]

const HomeCarousel = () => {
	return (
		<div className={styles.homePageBackground}>
			<Carousel variant="dark">
				{carouselData.map((data) => {
					return (
						<Carousel.Item key={data.name}>
							<img
								className="d-block m-auto w-50"
								src={data.image}
								alt="First slide"
							/>
							<br />
							<Carousel.Caption>
								<h5>{data.name}</h5>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}
			</Carousel>
			<h4 className={styles.overlay}>
				POPULAR
				<FaFireAlt />
			</h4>
		</div>
	)
}

export default HomeCarousel
