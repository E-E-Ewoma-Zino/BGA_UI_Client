// Partial Header for dashboard
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ROUTES_LINKS from "../../constants/routes";
import { logOut } from "../../redux/authSlice";

export default function _header() {
	const location = useLocation();
	const navigate = useNavigate();
	const client = useSelector(state => state.auth.client);
	const isOverview = !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!matchPath(location.pathname, "/dashboard");

	const dispatch = useDispatch();

	function handleLogout() {
		dispatch(logOut());
		localStorage.clear();
		navigate(ROUTES_LINKS.auth);
	}

	const handleClick = ()=>{
		document.getElementById('nk-sidebar')?.classList.add('nk-sidebar-active')
		document.body.classList.add('nav-shown')
		
	}

	return (
		<div className="nk-header nk-header-fixed is-light">
			<div className="container-fluid">
				<div className="nk-header-wrap">
					{
						isOverview && <div onClick={() => handleClick()} className="nk-menu-trigger d-xl-none ms-n1">
							<a href="#x" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
						</div>
					}
					<div className={`nk-header-brand ${!isOverview ? "me-5" : "d-xl-none"}`}>
						<Link to={ROUTES_LINKS.overview} className="logo-link">
							<img className="logo-light logo-img" src="/assets/images/logo.png" srcSet="/assets/images/logo2x.png 2x" alt="logo" />
							<img className="logo-dark logo-img" src="/assets/images/logo-dark.png" srcSet="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
						</Link>
					</div>
					{/* .nk-header-brand */}
					{/* <div className="nk-header-search ms-3 ms-xl-0">
						<em className="icon ni ni-search" />
						<input type="text" className="form-control border-transparent form-focus-none" placeholder="Search anything" />
					</div> */}
					{/* .nk-header-news */}
					<div className="nk-header-tools">
						<ul className="nk-quick-nav">
							<li className="dropdown user-dropdown">
								<a href="#x" className="dropdown-toggle me-n1" data-bs-toggle="dropdown">
									<div className="user-toggle">
										<div className="user-avatar sm">
											<em className="icon ni ni-user-alt" />
										</div>
										<div className="user-info d-none d-xl-block">
											{/* <div className="user-status user-status-unverified">Unverified</div> */}
											<div className="user-name dropdown-indicator">{client.firstname} {client.lastname}</div>
										</div>
									</div>
								</a>
								<div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
									<div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
										<div className="user-card">
											<div className="user-avatar">
												<span>{client.firstname.substr(0, 1)}{client.lastname.substr(0, 1)}</span>
											</div>
											<div className="user-info">
												<span className="lead-text">{client.firstname} {client.lastname}</span>
												<span className="sub-text">{client.username}</span>
											</div>
										</div>
									</div>
									<div className="dropdown-inner">
										<ul className="link-list">
											{/* <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt" /><span>Login Activity</span></a></li> */}
											<li><a className="dark-switch" href="#x"><em className="icon ni ni-moon" /><span>Dark Mode</span></a></li>
										</ul>
									</div>
									<div className="dropdown-inner">
										<ul className="link-list">
											<li><a href="#x" onClick={handleLogout}><em className="icon ni ni-signout" /><span>Sign out</span></a></li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				{/* .nk-header-wrap */}
			</div>
			{/* .container-fliud */}
		</div>
	);
}