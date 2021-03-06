// Pages
import {
	BrandPage,
	ProductPage,
	HomePage,
	ContactPage,
	AboutPage,
	ModelPage,
	SneakersPage,
	AccessoriesPage,
} from './pages'

import { Route, Routes } from 'react-router-dom'

// Layout
import {
	Navbar,
	FooterInfo,
	FooterEmail,
	Footer,
	Logo,
	CartModal,
} from './components'

function App() {
	return (
		<div>
			<Logo />
			<Navbar />
			<CartModal />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="brands/:brandName" element={<BrandPage />} />
				<Route path="sneakers" element={<SneakersPage />} />
				<Route path="accessories" element={<AccessoriesPage />} />
				<Route path="product/:productId" element={<ProductPage />} />
				<Route path="model" element={<ModelPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
			<FooterInfo />
			<FooterEmail />
			<Footer />
		</div>
	)
}

export default App
