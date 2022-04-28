import styles from './footerTrending.module.css'

const trending = [
	{ name: `Nike Air Max 95`, urlEndpoint: `/product/1506` },
	{ name: `Adidas Ultraboost 22 Heat`, urlEndpoint: `/product/1003` },
	{ name: `Air Jordan 1 High 'Heritage'`, urlEndpoint: `/product/3205` },
	{ name: `New Balance UXC72`, urlEndpoint: `/product/1402` },
	{ name: `Yeezy 350 'Turtle Dove'`, urlEndpoint: `/product/3301` },
	{ name: `Air Jordan 7 'Sapphire'`, urlEndpoint: `/product/3201` },
]

const FooterTrending = ({ onClick }) => {
	return (
		<div className={styles.container}>
			<h4 className={styles.footerHeader}>Trending</h4>
			{trending.map((product) => {
				return (
					<p
						key={product.urlEndpoint}
						onClick={() => onClick(product.urlEndpoint)}
						className={styles.pointer}
					>
						{product.name}
					</p>
				)
			})}
		</div>
	)
}

export default FooterTrending
