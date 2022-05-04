import { useNavigate } from 'react-router-dom'

import { carouselBrandInfo } from '../../utils/data/carouselBrandInfo'

import styles from './luxurySneakers.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper'

const LuxurySneakers = () => {
	const navigate = useNavigate()

	const brandPageHandler = (id) => {
		navigate('/brands/' + id)
	}

	return (
		<>
			<h4 className={styles.sectionHeader}>LUXURY SNEAKERS</h4>
			<Swiper
				speed={4000}
				spaceBetween={30}
				breakpoints={{
					'@0.00': {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					'@0.75': {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					'@1.00': {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					'@1.50': {
						slidesPerView: 4,
						spaceBetween: 50,
					},
					'@2.00': {
						slidesPerView: 6,
						spaceBetween: 50,
					},
				}}
				centeredSlides={true}
				loop={true}
				navigation={true}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Navigation]}
			>
				{carouselBrandInfo.map((brand) => {
					return (
						<SwiperSlide key={brand.name}>
							<img
								src={brand.image}
								alt={brand.name}
								className={styles.brandItem}
								onClick={() => brandPageHandler(brand.id)}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</>
	)
}

export default LuxurySneakers
