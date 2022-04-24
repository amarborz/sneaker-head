// Pages
import {
	BrandPage,
	ProductPage,
	HomePage,
	ContactPage,
	AboutPage,
} from './pages'
import { Route, Routes } from 'react-router-dom'

// Layout
import { NavBar, FooterInfo, FooterEmail, Footer } from './components'

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="brands/:brandName" element={<BrandPage />} />
				<Route path="product/:productId" element={<ProductPage />} />
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
