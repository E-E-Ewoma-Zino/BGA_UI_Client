// This is the layout used by all other pages
import { Outlet, matchPath, useLocation } from "react-router-dom";
import Partial from "../partials";
import { Helmet } from "react-helmet";

export default function RootLayout() {
	const location = useLocation();
	const isOverview = !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!matchPath(location.pathname, "/dashboard");

	return (
		<div className="nk-app-root">
			<Helmet>
				<title>BGA Dashboard</title>
			</Helmet>
			{/* main @s */}
			<div className="nk-main">
				{/* sidebar @s */}
				{
					isOverview && <Partial.SideBar />
				}
				{/* sidebar @e */}
				{/* wrap @s */}
				<div className="nk-wrap">
					{/* main header @s */}
					<Partial.Header />
					{/* main header @e */}
					{/* content @s */}
					<div className="nk-content">
						<div className="container-fluid">
							<div className="nk-content-inner">
								<Outlet />
							</div>
						</div>
					</div>
					{/* content @e */}
					{/* footer @s */}
					<Partial.Footer />
					{/* footer @e */}
				</div>
				{/* wrap @e */}
			</div>
			{/* main @e */}
		</div>
	);
}