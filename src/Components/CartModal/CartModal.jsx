import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice, toggleModal } from '../../store/CartSlice'
import CartCheckout from '../CartCheckout/CartCheckout'
import CartItem from '../CartItem/CartItem'
import styles from './cartModal.module.css'

const CartModal = () => {
	const [checkout, setCheckout] = useState(false)
	const showModal = useSelector((state) => state.cart.showModal)
	const cartContent = useSelector((state) => state.cart.cartContent)
	const totalPrice = useSelector((state) => state.cart.totalPrice)
	const dispatch = useDispatch(cartSlice)

	return (
		<>
			{showModal && (
				<div
					className={styles.backdrop}
					onClick={() => dispatch(toggleModal())}
				>
					{showModal && (
						<div
							className={styles.modalContainer}
							onClick={(e) => e.stopPropagation()}
						>
							<div className={styles.modalHeaderContainer}>
								<h2>Total Amount</h2>
								<h2>${totalPrice}</h2>
							</div>

							{checkout && <CartCheckout setCheckout={setCheckout} />}

							<div className={styles.cartItems}>
								{!checkout &&
									cartContent.map((item) => {
										return <CartItem {...item} key={item.id} />
									})}
							</div>

							{cartContent.length === 0 && (
								<h6 className={styles.miniHeader}>Cart is empty.</h6>
							)}

							{!checkout && (
								<>
									<button
										className={styles.closeButton}
										onClick={() => dispatch(toggleModal())}
									>
										Close
									</button>

									{cartContent.length > 0 && (
										<button
											className={styles.closeButton}
											onClick={() => setCheckout(true)}
										>
											Order
										</button>
									)}
								</>
							)}
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default CartModal
