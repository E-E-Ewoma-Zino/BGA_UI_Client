// Dashboard for Admin
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { setMenu, currentMenu } from "../redux/menuClientSlice";
import { useDispatch, useSelector } from "react-redux";
import clientMenu from "../api/clientMenu";
import { useEffect } from "react";

export default function WidgetView() {
	const menus = useLoaderData();
	const dispatch = useDispatch();
	const menuUrl = useSelector(state => state.menus.frameUrl);

	useEffect(() => {
		if (menus) {
			const url = menus[Object.keys(menus)[0]]?.menu?.length ? menus[Object.keys(menus)[0]]?.menu[0].url : menus[Object.keys(menus)[0]].url;

			dispatch(currentMenu(url));
		}
	}, [dispatch]);

	dispatch(setMenu(menus));

	return (
		<div className="nk-content-body">
			{/* .nk-block-head */}
			<div className="nk-block">
				<iframe src={menuUrl} className="w-100 vh-100 border-0" title={menus} allowFullScreen loading="lazy" />
			</div>

			{/* .nk-block */}
		</div>
	);
}

export function getAllMenuLoader({ params }) {
	console.log("paramns again", params);
	return clientMenu(params.widget);
}