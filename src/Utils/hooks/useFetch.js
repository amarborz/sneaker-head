import { useEffect, useState } from 'react'

const useFetch = (urlEndpoint) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await fetch(
				`https://sneaker-head-7f57e-default-rtdb.europe-west1.firebasedatabase.app/${urlEndpoint}.json`,
			)
			const responseData = await response.json()
			console.log(responseData)
			setData(responseData)
		}

		fetchProduct()
	}, [urlEndpoint])

	return data
}

export default useFetch
