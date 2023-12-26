// This will store the state for the app
import menuClientSlice from "./redux/menuClientSlice";
import { configureStore } from "@reduxjs/toolkit";
import widgetSlice from "./redux/widgetSlice";
import authSlice from "./redux/authSlice";

export default configureStore({
	reducer: {
		auth: authSlice,
		widget: widgetSlice,
		menus: menuClientSlice
	}
});