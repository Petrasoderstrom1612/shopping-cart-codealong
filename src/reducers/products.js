import { createSlice } from '@reduxjs/toolkit'

const productData = [
	{ id:1, title: 'Socks', price: 100, emoji: '🧦'},
	{ id:2, title: 'T-shirt', price: 200, emoji: '👕'},
	{ id:3, title: 'Pants', price: 300, emoji: '👖'},
	{ id:4, title: 'Dress', price: 400, emoji: '👗'}
]

export const products = createSlice({
	name: 'products',
	initialState: productData
})