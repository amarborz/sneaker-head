import { SneakersContextProvider } from '../../store/SneakersFilterContext'

import { SneakersHeader, SneakersProducts } from '../../components'

const SneakersPage = () => {
	return (
		<SneakersContextProvider>
			<SneakersHeader />
			<SneakersProducts />
		</SneakersContextProvider>
	)
}

export default SneakersPage
