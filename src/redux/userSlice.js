import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {},
	reducers: {
		login: (state, payload) => {},
		logout: (state, payload) => {},
	},
});

export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
