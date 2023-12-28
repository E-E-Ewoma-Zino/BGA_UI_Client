// Dashboard for Admin
import { useDispatch, useSelector } from "react-redux";
import getAllWidget from "../api/widget";
import Components from "../components";
import { Await, defer, useLoaderData } from "react-router-dom";
import { setWidgetId } from "../redux/widgetSlice";
import { Suspense } from "react";


export default function Dashboard() {
	const loadedWidgets = useLoaderData();
	const dispatch = useDispatch();

	return (
		<div className="nk-content-body">
			<div className="nk-block-head nk-block-head-sm">
				<div className="nk-block-between">
					<div className="nk-block-head-content">
						<h3 className="nk-block-title page-title d-flex justify-center align-center">
							<em className="icon ni ni-dashboard me-2" />
							Overview
						</h3>
					</div>
					{/* .nk-block-head-content */}
					<div className="nk-block-head-content">
						<div className="toggle-wrap nk-block-tools-toggle">
							<a href="#x" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
							<div className="toggle-expand-content" data-content="pageMenu">
								{/* <ul className="nk-block-tools g-3">
									<li>
										<Components.DropdownBtn />
									</li>
									<li className="nk-block-tools-opt"><a href="#x" className="btn btn-primary"><em className="icon ni ni-reports" /><span>Reports</span></a></li>
								</ul> */}
							</div>
						</div>
					</div>
					{/* .nk-block-head-content */}
				</div>
				{/* .nk-block-between */}
			</div>
			{/* .nk-block-head */}
			<div className="nk-block">
				<div className="row g-gs">
					<Suspense fallback={
						<div className="w-100 d-flex justify-center align-center">
							<Components.Spinner color="primary" />
						</div>
					}>
						<Await resolve={loadedWidgets.widget} errorElement={<h3>Failed to load Widget. Reload Page!</h3>} >
							{
								(myWidgets) => {
									if (myWidgets.error) return window.NioApp.Toast("<h5>Failed to load widgets</h5>Reload page to try again." || "Failled to login", "error");

									return myWidgets.length && myWidgets.map((widget, index) =>
										<div key={index} className="col-xxl-3 col-lg-4 col-md-6 col-sm-6">
											<Components.WidgetCard id={widget._id} onClick={() => dispatch(setWidgetId(widget._id))} name={widget.name} iconUrl={widget.icon.url} internal={widget.internal} isActive={widget.isActive} url={widget.url} />
										</div>
									)
								}
							}
						</Await>
					</Suspense>
				</div>
				{/* .row */}
			</div>
			{/* .nk-block */}
		</div>
	);
}

export function GetAllWidgetLoader() {

	return defer({ widget: getAllWidget(JSON.parse(localStorage.getItem("client"))?.client_id) });
}