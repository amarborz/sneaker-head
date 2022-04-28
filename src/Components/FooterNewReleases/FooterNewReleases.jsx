import styles from './footerNewReleases.module.css'

const newReleases = [
	{ name: `Air Jordan 7 'Sapphire'`, urlEndpoint: `/product/3201` },
	{ name: `Air Jordan 13 'Brave Blue'`, urlEndpoint: `/product/3202` },
	{ name: `Yeezy 350 'Turtle Dove'`, urlEndpoint: `/product/3301` },
	{ name: `Air Jordan 6 'Midnight Navy'`, urlEndpoint: `/product/3203` },
	{ name: `Air Jordan 11 Low '72-10'`, urlEndpoint: `/product/3204` },
	{ name: `Air Jordan 1 High 'Heritage'`, urlEndpoint: `/product/3205` },
]

const FooterNewReleases = ({ onClick }) => {
	return (
		<div className={styles.container}>
			<h4 className={styles.footerHeader}>New Releases</h4>
			{newReleases.map((product) => {
				return (
					<p
						key={product.urlEndpoint}
						className={styles.pointer}
						onClick={() => onClick(product.urlEndpoint)}
					>
						{product.name}
					</p>
				)
			})}
		</div>
	)
}

export default FooterNewReleases
