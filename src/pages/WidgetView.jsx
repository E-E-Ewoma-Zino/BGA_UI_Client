// Dashboard for Admin
import { setMenu, currentMenu } from "../redux/menuClientSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import clientMenu from "../api/clientMenu";
import Components from "../components";
import { Helmet } from "react-helmet";

export default function WidgetView() {
	const menus = useLoaderData();
	const [hasLoad, setHasLoad] = useState(false);
	const dispatch = useDispatch();
	const menuUrl = useSelector(state => state.menus.frameUrl);

	useEffect(() => {
		if (menus && Object.keys(menus).length) {
			const url = menus[Object.keys(menus)[0]]?.menu?.length ? menus[Object.keys(menus)[0]]?.menu[0].url : menus[Object.keys(menus)[0]].url;

			dispatch(currentMenu(url));
		}
	}, [dispatch, hasLoad]);

	dispatch(setMenu(menus));

	


	return (
		<div className="nk-content-body">
			<Helmet>
				<style>
					{`
					#nk-content {
						padding: 0 !important;
					}
					`}
				</style>
			</Helmet>
			{/* .nk-block-head */}
			<div className="nk-block">
				{
					Object.keys(menus).length ?
					<div className="w-100 h-100 d-flex justify-center align-center" style={{filter: `brightness(${hasLoad? 1: .5})`}}>
						{
							!hasLoad && <Components.Spinner className="position-absolute" color="primary" />
						}
						<iframe src={menuUrl} className="w-100 vh-100 border-0" title={menus} allowFullScreen loading="lazy" onLoad={() => { console.log("I have finish loaing"); setHasLoad(true) }} />
					</div>
						: <Components.NoMenus />
				}
			</div>

		</div>
	);
}

export function getAllMenuLoader({ params }) {
	console.log("paramns again", params);
	return clientMenu(params.widget);
}