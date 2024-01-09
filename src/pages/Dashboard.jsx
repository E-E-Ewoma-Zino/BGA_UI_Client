// Dashboard for Admin
import { useDispatch } from "react-redux";
import getAllWidget from "../api/widget";
import Components from "../components";
import { Await, defer, useLoaderData } from "react-router-dom";
import { setWidgetId } from "../redux/widgetSlice";
import { Menu, MenuItem, SubMenu } from "@spaceymonk/react-radial-menu";
import { Suspense, useState, useEffect } from "react";
import Widget from "../components/Cards/widget";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import './dashboard.css'


export default function Dashboard() {
	const loadedWidgets = useLoaderData();
	const dispatch = useDispatch();
	const pieParams = { height: 200, margin: { right: 5 } };
	const data = [
		{ value: 5, label: 'A' },
		{ value: 10, label: 'B' },
		{ value: 15, label: 'C' },
		{ value: 20, label: 'D' },
	  ];
	  


	return (
		<div className="nk-content-body dash-body">
			{/* .nk-block-head */}
			<div className="nk-block">
				<div className="row g-gs ">
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
					
					{/* <div>
					<PieChart
						series={[{ 
							arcLabel: (item) => `${item.label} (${item.value})`,
							arcLabelMinAngle: 45,
							data,
							innerRadius: 30,
							outerRadius: 100,
							paddingAngle: 5,
							cornerRadius: 5,
							startAngle: -90,
							endAngle: 90,
							cx: 150,
							cy: 150,
						}]}
						{...pieParams}
					/>
					</div> */}
					
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