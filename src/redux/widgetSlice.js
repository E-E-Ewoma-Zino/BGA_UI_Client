// set up the auth slice for redux and login state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	error: null,
	widgetId: null,
	loading: true
}

const widgetSlice = createSlice({
	initialState,
	name: "widget",
	reducers: {
		setWidgetId: (state, action) => {
			state.loading = false;
			state.widgetId = action.payload;
		},
		errorState: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		}
	}
});

export const { setWidgetId, errorState } = widgetSlice.actions;
export default widgetSlice.reducer;