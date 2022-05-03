// React Context
import { useContext, useEffect, useState } from 'react'
import SneakersContext from '../../store/SneakersFilterContext'

// Components
import ProductsCard from '../ProductsCard/ProductsCard'
import SneakersFilter from '../SneakersFilter/SneakersFilter'

// CSS
import styles from './sneakersProducts.module.css'

const SneakersProducts = () => {
	const { filteredProducts } = useContext(SneakersContext)
	const [limitedProducts, setLimitedProducts] = useState([])
	const [number, setNumber] = useState(8)

	useEffect(() => {
		if (filteredProducts.length > number) {
			setLimitedProducts(filteredProducts.slice(0, number))
			return
		}
		setLimitedProducts(filteredProducts)
	}, [filteredProducts, number])

	useEffect(() => {
		setNumber(8)
	}, [filteredProducts])

	const incrementHandler = () => {
		setNumber((prevNumber) => prevNumber + 8)
	}

	const noResults = filteredProducts.length === 0 && (
		<h2 className={styles.emptyResults}>No Results</h2>
	)

	const loadMore = number < filteredProducts.length && (
		<button className={styles.button} onClick={incrementHandler}>
			LOAD MORE
		</button>
	)

	return (
		<div>
			<SneakersFilter />
			<ProductsCard products={limitedProducts} />
			{noResults}
			{loadMore}
		</div>
	)
}

export default SneakersProducts
