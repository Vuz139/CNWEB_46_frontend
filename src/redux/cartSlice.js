import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { getCart, setCart } from "../utils/storage.util";

const initialState = getCart() || [];

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addToCart: (state, payload) => {
			const index = state.findIndex((i) => i.id === payload.payload.id);
			if (index !== -1) {
				state[index].amount += 1;
			} else {
				const item_ = { ...payload.payload, amount: 1 };
				state.push(item_);
			}
			setCart(state);
		},

		removeFromCart: (state, payload) => {
			const index = state.findIndex((i) => i.id === payload.payload.id);

			if (index !== -1) {
				state[index].amount -= 1;
			}
			setCart(state);
		},
		removeAllFromCart: (state, payload) => {
			for (const key in state) {
				if (state[key].id === payload.payload) {
					state.splice(key, 1);
				}
			}
			setCart(state);
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	replaceProductCart,
	removeAllFromCart,
} = cartSlice.actions;
=======

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
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a

export const cartReducer = cartSlice.reducer;
