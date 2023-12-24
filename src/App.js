import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Dashboard, NotFound, Register, SignIn } from "./pages/index";
import PageLayouts from "./pages/layout";
import "./App.css"; // delete this

const clientRoutes = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			{/* Index route */}
			<Route path="/" element={<h1>Welcome!</h1>} />
			{/* Auth Route */}
			<Route path="/auth">
				<Route path="signin" element={<SignIn />} />
				<Route path="register" element={<Register />} />
			</Route>
			{/* Dashboard */}
			<Route path="dashboard" element={<PageLayouts.RootLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="*" element={<NotFound />} />
			</Route>
			{/* 404 for index route */}
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={clientRoutes} />
	);
}

export default App;
