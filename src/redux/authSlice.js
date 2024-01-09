// set up the auth slice for redux and login state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	error: null,
	client: JSON.parse(localStorage.getItem("client")) || null,
	loading: false,
	isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || null,
	token: localStorage.getItem("token") || null
}

const authSlice = createSlice({
	initialState,
	name: "auth",
	reducers: {
		clientSignIn: (state, action) => {
			state.loading = true;
			state.isAuthenticated = true;
			state.client = action.payload;
			state.token = action.payload?.token?.token
		},
		authError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		},
		logOut: (state, action) => {
			state.token = '';
			state.client = null
			state.loading = false;
			state.isAuthenticated = false;
		}
	}
});

export const { clientSignIn, authError, logOut } = authSlice.actions;
export default authSlice.reducer;