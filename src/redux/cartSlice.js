import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart: (state, payload) => {},
		removeFromCart: (state, payload) => {},
		removeAllFromCart: (state, payload) => {},
	},
});

export const { addToCart, removeFromCart, removeAllFromCart } =
	cartSlice.actions;

export const cartReducer = cartSlice.reducer;
