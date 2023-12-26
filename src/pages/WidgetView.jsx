// Dashboard for Admin
import { Link, useNavigate } from "react-router-dom";
import Components from "../components";
import ROUTES_LINKS from "../constants/routes";
import { useSelector } from "react-redux";

export default function WidgetView() {
	const menuUrl = useSelector(state => state.menus.frameUrl);
	const navigate = useNavigate();

	return (
		<div className="nk-content-body">
			<div className="nk-block-head nk-block-head-sm">
				<div className="nk-block-between">
					<div className="nk-block-head-content">
						<div className="nk-block-head-sub">
							<Link to="#x" onClick={() => navigate(`/${ROUTES_LINKS.overview}`)} className="back-to">
								<em className="icon ni ni-arrow-left" />
								<span>Overview</span>
							</Link>
						</div>

						<h3 className="nk-block-title page-title d-flex justify-center align-center">
							<em className="icon ni ni-dashboard me-2" />
							Widget Name
						</h3>
					</div>
					{/* .nk-block-head-content */}
					<div className="nk-block-head-content">
						<div className="toggle-wrap nk-block-tools-toggle">
							<a href="#x" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
							<div className="toggle-expand-content" data-content="pageMenu">
								<ul className="nk-block-tools g-3">
									<li>
										<Components.DropdownBtn />
									</li>
									<li className="nk-block-tools-opt"><a href="#x" className="btn btn-primary"><em className="icon ni ni-reports" /><span>Reports</span></a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* .nk-block-head-content */}
				</div>
				{/* .nk-block-between */}
			</div>
			{/* .nk-block-head */}
			<div className="nk-block">
				<div className="card card-bordered card-preview">
					<div className="card-inner">
						<div className="card card-bordered w-100">
							<iframe src={menuUrl} className="google-map border-0" allowFullScreen loading="lazy" />
						</div>
					</div>
				</div>
				{/* .card-preview */}
			</div>

			{/* .nk-block */}
		</div>
	);
}