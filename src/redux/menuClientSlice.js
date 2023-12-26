// set up the auth slice for redux and login state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	error: null,
	frameUrl: null,
	loading: true
}

const menuClientSlice = createSlice({
	initialState,
	name: "currentMenu",
	reducers: {
		currentMenu: (state, action) => {
			state.loading = false;
			state.frameUrl = action.payload;
		},
		errorState: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		}
	}
});

export const { currentMenu, errorState } = menuClientSlice.actions;
export default menuClientSlice.reducer;