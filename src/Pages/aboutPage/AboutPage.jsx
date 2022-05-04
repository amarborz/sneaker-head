import { useEffect } from 'react'

import { AboutHeader } from '../../components'

const AboutPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			<AboutHeader />
		</div>
	)
}

export default AboutPage
