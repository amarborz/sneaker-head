import { useEffect } from 'react'

import { SneakersContextProvider } from '../../store/SneakersFilterContext'

import { SneakersHeader, SneakersProducts } from '../../components'

const SneakersPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<SneakersContextProvider>
			<SneakersHeader />
			<SneakersProducts />
		</SneakersContextProvider>
	)
}

export default SneakersPage
