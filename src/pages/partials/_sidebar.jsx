// Partial Sidebar for Dashboar
import { currentMenu } from "../../redux/menuClientSlice";
import clientMenu from "../../api/clientMenu";
import ROUTES_LINKS from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function _sidebar() {
	const dispatch = useDispatch();
	const [menus, setMenu] = useState({});
	const [active, setActive] = useState(false);
	const widgetId = useSelector(state => state.widget.widgetId);

	useEffect(() => {
		async function getMenus() {
			console.log("widgetId", widgetId);
			const theMenus = await clientMenu(widgetId);
			console.log("The menu", theMenus);
			setMenu(theMenus);
			dispatch(currentMenu(theMenus[Object.keys(theMenus)[0]]?.url))
		}

		console.log("active???", active);
		getMenus();
	}, [widgetId]);

	return (
		<div className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
			<div className="nk-sidebar-element nk-sidebar-head">
				<div className="nk-sidebar-brand">
					<Link to={ROUTES_LINKS.overview} className="logo-link nk-sidebar-logo">
						<img className="logo-light logo-img" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
						<img className="logo-dark logo-img" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
						<img className="logo-small logo-img logo-img-small" src="/assets/images/logo-small.png" srcSet="/assets/images/logo-small2x.png 2x" alt="logo-small" />
					</Link>
				</div>
				<div className="nk-menu-trigger me-n2">
					<a href="#x" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
						<em className="icon ni ni-arrow-left" />
					</a>
					<a href="#x" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu">
						<em className="icon ni ni-menu" />
					</a>
				</div>
			</div>
			{/* .nk-sidebar-element */}
			<div className="nk-sidebar-element">
				<div className="nk-sidebar-content">
					<div className="nk-sidebar-menu" data-simplebar>
						<ul className="nk-menu">
							{
								Object.keys(menus).map((key, index) => {
									return <li key={index} className="nk-menu-item">
										{/* .nk-menu-item */}
										{console.log("my menus", menus[key])}
										<Link to="#x" className="nk-menu-link" onClick={() => dispatch(currentMenu(menus[key].url))}>
											<span className="nk-menu-icon">
												<em className="icon ni ni-dashboard" />
											</span>
											<span className="nk-menu-text">{menus[key].name}</span>
										</Link>
									</li>
									if (menus[key]?.menu?.length) return <li key={index} className={`nk-menu-item has-sub ${active? " active": ''}`} onClick={() => setActive(pre => !pre)}>
										{/* .nk-menu-item */}
										<a href="#x" className="nk-menu-link nk-menu-toggle">
											<span className="nk-menu-icon">
												<em className="icon ni ni-users-fill" />
											</span>
											<span className="nk-menu-text">{menus[key].name}</span>
										</a>
										<ul className="nk-menu-sub">
											{
												menus[key].menu.map(menu => {
													return <li className="nk-menu-item">
														<a href="#x" className="nk-menu-link"><span className="nk-menu-text" onClick={() => dispatch(currentMenu(menu.url))}>{menu.name}</span></a>
													</li>
												})
											}
										</ul>
										{/* .nk-menu-sub */}
									</li>
								})
							}
							{/* <li className="nk-menu-heading">
								<h6 className="overline-title text-primary-alt">Dashboards</h6>
							</li> */}
						</ul>
						{/* .nk-menu */}
					</div>
					{/* .nk-sidebar-menu */}
				</div>
				{/* .nk-sidebar-content */}
			</div>
			{/* .nk-sidebar-element */}
		</div>
	);
}
