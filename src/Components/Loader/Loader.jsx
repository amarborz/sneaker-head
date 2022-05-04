import { Spinner } from 'react-bootstrap'

import styles from './loader.module.css'

const Loader = () => {
	return (
		<div className={styles.container}>
			<Spinner animation="border" />
		</div>
	)
}

export default Loader
