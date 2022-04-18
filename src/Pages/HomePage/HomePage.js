import Brands from '../../Components/Brands/Brands'
import HomeCarousel from '../../Components/Carousel/HomeCarousel'
import Footer from '../../Components/Footer/Footer'
import LuxurySneakers from '../../Components/LuxurySneakers/LuxurySneakers'
import NavBar from '../../Components/Navbar/NavBar'
import Trending from '../../Components/Trending/Trending'

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<HomeCarousel />
			<Brands />
			<Trending />
			<LuxurySneakers />
			<Footer />
		</div>
	)
}

export default HomePage
