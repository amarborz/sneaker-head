import { useDispatch } from 'react-redux'

import {
	cartSlice,
	increaseAmount,
	decreaseAmount,
} from '../../store/CartSlice'

import styles from './cartItem.module.css'

const CartItem = ({ name, price, shoeSize, amount, image }) => {
	const dispatch = useDispatch(cartSlice)

	return (
		<div className={styles.cartItem}>
			<img src={image} alt={name} className={styles.cartImage} />
			<div>
				<h2>{name}</h2>
				<div className={styles.summary}>
					<span className={styles.price}>${price}</span>
					<span className={styles.amount}>Size: {shoeSize}</span>
					<span className={styles.amount}>Amount: {amount}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<button
					onClick={() => dispatch(decreaseAmount({ name, shoeSize, price }))}
				>
					−
				</button>
				<button
					onClick={() => dispatch(increaseAmount({ name, shoeSize, price }))}
				>
					+
				</button>
			</div>
		</div>
	)
}

export default CartItem
