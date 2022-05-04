import { useContext } from 'react'
import SneakersContext from '../../store/SneakersFilterContext'

import { filterOptions } from '../../utils/data/filterOptions'

import styles from './sneakersFilter.module.css'

const SneakersFilter = () => {
	const { filterHandler } = useContext(SneakersContext)

	return (
		<div className={styles.filterContainer}>
			{filterOptions.map((filter) => {
				return (
					<div key={filter.id}>
						<p className={styles.filterText}>{filter.name}</p>
						<select
							className={styles.options}
							defaultValue="ALL"
							onChange={(e) => filterHandler(e.target.value, filter.name)}
						>
							{filter.options.map((option) => {
								return (
									<option
										key={option.id}
										className={styles.option}
										value={option.value}
									>
										{option.option}
									</option>
								)
							})}
						</select>
					</div>
				)
			})}
		</div>
	)
}

export default SneakersFilter
