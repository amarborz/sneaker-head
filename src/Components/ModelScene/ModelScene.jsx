import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ModelScene = ({ id, scale, position, rotation }) => {
	const gltf = useLoader(GLTFLoader, `models/${id}/scene.gltf`)
	const modelRef = useRef()

	useEffect(() => {
		return () => {
			gltf.scene.removeFromParent()
		}
	}, [gltf])

	// useFrame(() => {
	// 	modelRef.current.rotation.y += 0.01
	// })

	return (
		<primitive
			object={gltf.scene}
			scale={scale}
			ref={modelRef}
			position={position}
			rotation={rotation}
		/>
	)
}

export default ModelScene
