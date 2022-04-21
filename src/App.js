// Pages
import { BrandPage, ProductPage, HomePage } from './Pages'
import { Route, Routes } from 'react-router-dom'

// Layout
import NavBar from './Components/Navbar/NavBar'

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/brands/:brandName" element={<BrandPage />} />
				<Route path="product" element={<ProductPage />} />
			</Routes>
		</div>
	)
}

export default App
