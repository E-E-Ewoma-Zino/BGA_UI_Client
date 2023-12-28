// Partial Sidebar for Dashboar
import { currentMenu } from "../../redux/menuClientSlice";
import { useDispatch, useSelector } from "react-redux";
import ROUTES_LINKS from "../../constants/routes";
import Components from "../../components";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function _sidebar() {
	const sideRef = useRef()
	const menus = useSelector(state => state.menus.menus);
	const [activeMenu, setActiveMenu] = useState(null)
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();


	const handleClick = ()=>{
		if(sideRef.current.classList.contains('is-compact') === false){
			sideRef.current.classList.add('is-compact')
		}else{
			sideRef.current.classList.remove('is-compact')
		}
		if(document.getElementById('nk-sidebar')?.classList.contains('nk-sidebar-active') === true){
			
			document.getElementById('nk-sidebar')?.classList.remove('nk-sidebar-active')
			document.body.classList.remove('nav-shown')
		}
	}

	

	return (
		<div id="nk-sidebar" ref={sideRef} className="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
			<div className="nk-sidebar-element nk-sidebar-head">
				<div className="nk-sidebar-brand">
					<Link to={ROUTES_LINKS.overview} className="logo-link nk-sidebar-logo">
						<img className="logo-light logo-img" src="/assets/images/logo.png" alt="logo" />
						<img className="logo-dark logo-img" src="/assets/images/logo-dark.png" alt="logo-dark" />
						<img className="logo-small logo-img logo-img-small" src="/assets/images/logo-dark-small2x.png"  alt="logo-small" />
					</Link>
				</div>
				<div onClick={()=> handleClick()} className="nk-menu-trigger me-n2">
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
						<li className="nk-menu-item">
							{/* .nk-menu-item */}
							<Link to={ROUTES_LINKS.overview} className="nk-menu-link" >
								<span className="nk-menu-icon">
									{/* <em className="icon ni ni-view-x7" /> */}
									<em class="icon ni ni-grid-c"></em>
								</span>
								<span className="nk-menu-text">Dashboard</span>
							</Link>
						</li>
							{console.log("look art me", menus)}
							{
								menus ?
									Object.keys(menus).map((key, index) => {
										if (!menus[key]?.menu?.length) return <li key={index} className="nk-menu-item">
											{/* .nk-menu-item */}
											<Link to="#x" className={`nk-menu-link ${activeMenu === menus[key].name && 'active-state'}`} onClick={() => {console.log("I was clicked", dispatch(currentMenu(menus[key].url))); setActiveMenu(menus[key].name)}}>
												<span className="nk-menu-icon">
													<em className="icon ni ni-view-x7" />
													
												</span>
												<span className="nk-menu-text">{menus[key].name}</span>
											</Link>
										</li>

										return <li key={index} className={`nk-menu-item has-sub ${active ? " active" : ''}`} onClick={() => setActive(pre => !pre)}>
											{/* .nk-menu-item */}
											<a href="#x" className="nk-menu-link nk-menu-toggle">
												<span className="nk-menu-icon">
													<em className="icon ni ni-view-list-fill" />
												</span>
												<span className="nk-menu-text">{menus[key].name}</span>
											</a>
											<ul onClick={(e)=> e.stopPropagation()} className="nk-menu-sub">
												{
													menus[key].menu.map(menu => {
														return <li className="nk-menu-item">
															<a href="#x" className={`nk-menu-link  ${activeMenu === menus[key].name && 'active-state'}`}><span className="nk-menu-text" onClick={() => {dispatch(currentMenu(menu.url)); setActiveMenu(menus[key].name)}}>{menu.name}</span></a>
														</li>
													})
												}
											</ul>
											{/* .nk-menu-sub */}
										</li>
									}) :
									<Components.Spinner color="primary" />
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