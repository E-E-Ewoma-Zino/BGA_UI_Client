import { Dashboard, GetAllWidgetLoader, Landing, NotFound, NotFoundAlt, SignIn, WidgetView, getAllMenuLoader } from "./pages/index";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ROUTES_LINKS from "./constants/routes";
import PageLayouts from "./pages/layout/index";
import UTILS from "./utils";

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
					<Route index element={<Dashboard />} loader={GetAllWidgetLoader} />
					<Route path={ROUTES_LINKS.widget} element={<WidgetView />} loader={getAllMenuLoader}/>
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