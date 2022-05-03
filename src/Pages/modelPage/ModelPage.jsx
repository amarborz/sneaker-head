import { useState } from 'react'
import { ModelCanvas, ModelChoice } from '../../components'

import { modelInfo } from '../../utils/data/modelInfo'

const ModelPage = () => {
	const [currentModel, setCurrentModel] = useState(modelInfo[0])

	const changeModelHandler = (newModelName) => {
		const newModel = modelInfo.filter((model) => model.id === newModelName)
		setCurrentModel(newModel[0])
	}

	return (
		<div>
			<ModelChoice models={modelInfo} changeModel={changeModelHandler} />
			<ModelCanvas model={currentModel} />
		</div>
	)
}

export default ModelPage
