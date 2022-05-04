import { useNavigate } from 'react-router-dom'

import styles from './logo.module.css'

const Logo = () => {
	const navigate = useNavigate()

	const logoClickHandler = () => {
		navigate('/')
	}

	return (
		<div className={styles.logo}>
			<p className={styles.text} onClick={logoClickHandler}>
				SNEAKER
			</p>
			<p className={styles.text2} onClick={logoClickHandler}>
				HEAD
			</p>
		</div>
	)
}

export default Logo
