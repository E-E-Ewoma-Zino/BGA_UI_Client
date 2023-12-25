import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Dashboard, NotFound, SignIn, WidgetView } from "./pages/index";
import PageLayouts from "./pages/layout";
import "./App.css"; // delete this
import ROUTES_LINKS from "./constants/routes";

const clientRoutes = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			{/* Index route */}
			<Route path={ROUTES_LINKS.home} element={<h1>Welcom!</h1>} />
			{/* Auth Route */}
			<Route path={ROUTES_LINKS.auth} element={<SignIn />} />
			{/* Dashboard */}
			<Route path={ROUTES_LINKS.overview} element={<PageLayouts.RootLayout />}>
				<Route index element={<Dashboard />} />
				<Route path={ROUTES_LINKS.widget} element={<WidgetView />} />
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