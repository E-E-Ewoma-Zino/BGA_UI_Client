// This will store the state for the app
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";

export default configureStore({
	reducer: {
		auth: authSlice
	}
});