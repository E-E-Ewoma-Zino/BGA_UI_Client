// set up the auth slice for redux and login state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	error: null,
	frameUrl: null,
	menus: null,
	loading: true
}

const menuClientSlice = createSlice({
	initialState,
	name: "menu",
	reducers: {
		currentMenu: (state, action) => {
			console.log("I was changed", action.payload);
			state.loading = false;
			state.frameUrl = action.payload;
		},
		setMenu: (state, action) => {
			state.loading = false;
			state.menus = action.payload;
		},
		errorState: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		}
	}
});

export const { currentMenu, setMenu, errorState } = menuClientSlice.actions;
export default menuClientSlice.reducer;