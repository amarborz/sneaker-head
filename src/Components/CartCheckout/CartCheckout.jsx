import { useRef } from 'react'

import { useDispatch } from 'react-redux'
import { cartSlice, resetCart } from '../../store/CartSlice'

import styles from './cartCheckout.module.css'

const CartCheckout = ({ setCheckout }) => {
	const cardRef = useRef()
	const dispatch = useDispatch(cartSlice)

	const confirmHandler = () => {
		const cardNumber = cardRef.current.value.replace(/\s/g, '')
		console.log(typeof cardNumber)

		if (cardNumber.length !== 16) {
			alert('Please enter a valid card number!')
			return
		}

		setCheckout(false)
		dispatch(resetCart())
		alert('Thank you for your order!')
	}

	return (
		<>
			<h6>We don't need your address, only your credit card!</h6>
			<h6>100% legit!</h6>
			<label htmlFor="ccn">Credit Card Number:</label>
			<br />
			<input
				id="ccn"
				type="tel"
				maxLength="19"
				placeholder="xxxx xxxx xxxx xxxx"
				ref={cardRef}
			/>
			<div>
				<button className={styles.closeButton} onClick={confirmHandler}>
					Confirm
				</button>

				<button
					className={styles.closeButton}
					onClick={() => setCheckout(false)}
				>
					Back
				</button>
			</div>
		</>
	)
}

export default CartCheckout
