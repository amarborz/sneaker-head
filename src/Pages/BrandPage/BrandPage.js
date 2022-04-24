import { BrandsPageHeader, Products } from '../../components'
import { useParams } from 'react-router-dom'
import useFetch from '../../utils/hooks/useFetch'
// import styles from './brandPage.module.css'

const BrandPage = () => {
	const params = useParams()
	const { brandName } = params

	const brandData = useFetch(`brand/${brandName}`)

	if (!brandData) {
		return <h1>Loading...</h1>
	}

	return (
		<>
			<BrandsPageHeader {...brandData} />
			<Products {...brandData} shoeBrand={brandData.name} />
		</>
	)
}

export default BrandPage
