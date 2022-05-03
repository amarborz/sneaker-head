import styles from './modelChoice.module.css'

const ModelChoice = ({ models, changeModel }) => {
	return (
		<select
			className={styles.select}
			onChange={(e) => changeModel(e.target.value)}
		>
			{models.map((model) => {
				return (
					<option value={model.id} key={model.id}>
						{model.name}
					</option>
				)
			})}
		</select>
	)
}

export default ModelChoice
