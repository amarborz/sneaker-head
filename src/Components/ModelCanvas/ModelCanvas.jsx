import { OrbitControls, Html, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ModelScene from '../ModelScene/ModelScene'

import styles from './modelCanvas.module.css'

const ModelLoader = () => {
	const { progress } = useProgress()
	return <Html center>{parseInt(progress)} % loaded</Html>
}

const ModelCanvas = ({ model }) => {
	return (
		<>
			<div className={styles.canvas}>
				<Canvas>
					<Suspense fallback={<ModelLoader />}>
						<ambientLight />
						<pointLight position={[10, 10, 10]} />
						<OrbitControls />
						<ModelScene {...model} />
					</Suspense>
				</Canvas>
			</div>
		</>
	)
}

export default ModelCanvas
