import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Dashboard, Landing, NotFound, NotFoundAlt, SignIn, WidgetView } from "./pages/index";
import PageLayouts from "./pages/Layout";
import "./App.css"; // delete this
import UTILS from "./utils";
import ROUTES_LINKS from "./constants/routes";

const clientRoutes = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			{/* Index route */}
			<Route path={ROUTES_LINKS.home} element={<Landing />} />
			{/* Auth Route */}
			<Route path={ROUTES_LINKS.auth} element={<SignIn />} />
			{/* Dashboard */}
			<Route element={<UTILS.PrivateRoutes />}>
				<Route path={ROUTES_LINKS.overview} element={<PageLayouts.RootLayout />}>
					<Route index element={<Dashboard />} />
					<Route path={ROUTES_LINKS.widget} element={<WidgetView />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Route>
			{/* 404 for index route */}
			<Route path="*" element={<NotFoundAlt />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={clientRoutes} />
	);
}

export default App;