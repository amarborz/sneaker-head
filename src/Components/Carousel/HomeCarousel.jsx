// Bootstrap Carousel
import { Carousel } from 'react-bootstrap'

// Images
import nikeImage from '../../Utils/Images/HomePage/nikeHomePage.png'
import newBalanceImage from '../../Utils/Images/HomePage/newBalanceHomePagee.png'
import jordanImage from '../../Utils/Images/HomePage/nikeHomePagee.png'

// Styles
import styles from './homeCarousel.module.css'

const carouselData = [
	{ name: 'Nike Air', desc: '', image: nikeImage },
	{ name: 'New Balance 574', desc: '', image: newBalanceImage },
	{ name: 'Nike AirMax', desc: '', image: jordanImage },
]

const HomeCarousel = () => {
	return (
		<div className={styles.homePageBackground}>
			<Carousel>
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
								<p>{data.desc}</p>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}
			</Carousel>
		</div>
	)
}

export default HomeCarousel
