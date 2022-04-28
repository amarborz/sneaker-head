import { useEffect, useState } from 'react'

const useTimeout = (data) => {
	const [notFound, setNotFound] = useState(false)

	useEffect(() => {
		const checkTimer = setTimeout(() => {
			if (!data) setNotFound(true)
		}, 5000)

		return () => clearTimeout(checkTimer)
	}, [data])

	return notFound
}

export default useTimeout
