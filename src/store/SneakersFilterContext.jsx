import React, { useEffect, useState } from 'react'

const SneakersContext = React.createContext({
	allProducts: [],
	filteredProducts: [],
	price: '',
	gender: '',
	brand: '',
	filterHandler: () => {},
})

export const SneakersContextProvider = ({ children }) => {
	const [allProducts, setAllProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])
	const [price, setPrice] = useState('ALL')
	const [gender, setGender] = useState('ALL')
	const [brand, setBrand] = useState('ALL')

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await fetch(
				`https://sneaker-head-7f57e-default-rtdb.europe-west1.firebasedatabase.app/products.json`,
			)
			const responseData = await response.json()
			const newProducts = Object.values(responseData)
			setAllProducts(newProducts)
			setFilteredProducts(newProducts)
		}

		fetchProduct()
	}, [])

	useEffect(() => {
		if (price !== 'ALL') {
			setFilteredProducts(
				allProducts.filter(
					(product) => product.price >= price[0] && product.price < price[1],
				),
			)

			if (gender !== 'ALL') {
				setFilteredProducts((prevProducts) =>
					prevProducts.filter((product) => product.gender.match('^' + gender)),
				)
			}

			if (brand !== 'ALL') {
				setFilteredProducts((prevProducts) =>
					prevProducts.filter((product) => product.brand === brand),
				)
			}
			return
		}

		if (brand === 'ALL') {
			setFilteredProducts(allProducts)
			if (gender !== 'ALL') {
				setFilteredProducts((prevProducts) =>
					prevProducts.filter((product) => product.gender.match('^' + gender)),
				)
			}
			return
		}

		if (brand !== 'ALL') {
			setFilteredProducts(
				allProducts.filter((product) => product.brand === brand),
			)
			if (gender !== 'ALL') {
				setFilteredProducts((prevProducts) =>
					prevProducts.filter((product) => product.gender.match('^' + gender)),
				)
			}
		}

		if (gender === 'ALL') {
			setFilteredProducts(allProducts)
			if (brand !== 'ALL') {
				setFilteredProducts(
					allProducts.filter((product) => product.brand === brand),
				)
			}
		}

		if (gender !== 'ALL') {
			setFilteredProducts(
				allProducts.filter((product) => product.gender.match('^' + gender)),
			)
			if (brand !== 'ALL') {
				setFilteredProducts((prevProducts) =>
					prevProducts.filter((product) => product.brand === brand),
				)
			}
		}
	}, [allProducts, brand, gender, price])

	const filterHandler = (filterValue, filterName) => {
		if (filterName === 'BRAND') {
			setBrand(filterValue)
		}

		if (filterName === 'GENDER') {
			setGender(filterValue)
		}

		if (filterName === 'PRICE') {
			if (filterValue === 'ALL') {
				setPrice(filterValue)
				return
			}

			const newArr = filterValue.split(',').map((string) => parseInt(string))
			setPrice(newArr)
		}
	}

	return (
		<SneakersContext.Provider
			value={{
				allProducts: allProducts,
				filteredProducts: filteredProducts,
				price: price,
				gender: gender,
				brand: brand,
				filterHandler: filterHandler,
			}}
		>
			{children}
		</SneakersContext.Provider>
	)
}

export default SneakersContext
