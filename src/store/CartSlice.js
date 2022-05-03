import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartContent: [],
	showModal: false,
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.showModal = !state.showModal
		},
		resetCart: (state) => {
			state.cartContent = []
			state.totalPrice = 0
		},
		addProduct: (state, action) => {
			const existingItemIndex = state.cartContent.findIndex(
				(item) => item.id === action.payload.id,
			)

			if (existingItemIndex >= 0) {
				const existingCartItem = state.cartContent[existingItemIndex]
				existingCartItem.amount++
				state.totalPrice += action.payload.price
				return
			}

			state.cartContent.push({ amount: 1, ...action.payload })
			state.totalPrice += action.payload.price
			console.log(state.cartContent)
		},
		increaseAmount: (state, action) => {
			const { name, shoeSize, price } = action.payload
			const updatedProduct = state.cartContent.filter(
				(item) => item.name === name && item.shoeSize === shoeSize,
			)

			updatedProduct[0].amount++
			state.totalPrice += price
			console.log(updatedProduct)
		},
		decreaseAmount: (state, action) => {
			const { name, shoeSize, price } = action.payload
			const updatedProduct = state.cartContent.filter(
				(item) => item.name === name && item.shoeSize === shoeSize,
			)

			if (updatedProduct[0].amount === 1) {
				state.cartContent = state.cartContent.filter(
					(item) => item.name !== name || item.shoeSize !== shoeSize,
				)
				state.totalPrice -= price
				return
			}

			updatedProduct[0].amount--
			state.totalPrice -= price
			console.log(updatedProduct)
		},
	},
})

export const {
	toggleModal,
	addProduct,
	increaseAmount,
	decreaseAmount,
	resetCart,
} = cartSlice.actions

export default cartSlice.reducer
