import Brands from '../../Components/Brands/Brands'
import HomeCarousel from '../../Components/Carousel/HomeCarousel'
import Footer from '../../Components/Footer/Footer'
import LuxurySneakers from '../../Components/LuxurySneakers/LuxurySneakers'
import Trending from '../../Components/Trending/Trending'

const HomePage = () => {
	return (
		<div>
			<HomeCarousel />
			<Brands />
			<Trending />
			<LuxurySneakers />
			<Footer />
		</div>
	)
}

export default HomePage
