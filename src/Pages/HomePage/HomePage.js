import {
	Brands,
	HomeCarousel,
	LuxurySneakers,
	Trending,
} from '../../components'

const HomePage = () => {
	return (
		<div>
			<HomeCarousel />
			<Brands />
			<Trending />
			<LuxurySneakers />
		</div>
	)
}

export default HomePage
