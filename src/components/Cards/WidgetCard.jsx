// This card is used to represent the widget

import { Link } from "react-router-dom";
import ROUTES_LINKS from "../../constants/routes";

export default function WidgetCard({ id, name, url, internal, isActive, iconUrl, onClick }) {
	return (
		<div className="card">
			<div className="card-inner">
				<div className="team">
					<div className="team-status bg-primary text-white"><em className="icon ni ni-external-alt" /></div>
					{/* <div className="team-options">
						<div className="drodown">
							<a href="#x" className="dropdown-toggle btn btn-sm btn-icon btn-trigger" data-bs-toggle="dropdown"><em className="icon ni ni-more-h" /></a>
							<div className="dropdown-menu dropdown-menu-end">
								<ul className="link-list-opt no-bdr">
									<li><a href="#x"><em className="icon ni ni-focus" /><span>Quick View</span></a></li>
									<li><a href="#x"><em className="icon ni ni-eye" /><span>View Details</span></a></li>
									<li><a href="#x"><em className="icon ni ni-mail" /><span>Send Complaint</span></a></li>
									<li className="divider" />
									<li><a href="#x" className="text-danger"><em className="icon ni ni-trash" /><span>Delete</span></a></li>
								</ul>
							</div>
						</div>
					</div> */}
					<div className="user-card user-card-s2">
						<div className="user-avatar md bg-primary">
							{
								iconUrl ? <img src={iconUrl} alt={name} className="img-fluid object-fit-cover h-100" /> : <span>AB</span>
							}
							{/* <div className="status dot dot-lg dot-success" /> */}
						</div>
						<div className="user-info">
							<h6>{name}</h6>
						</div>
					</div>
					<div className="team-details">
						{/* <p>Describe what these widget is about here</p> */}
					</div>
					<div className="team-view mt-3">
						{
							internal ? <Link to={`${ROUTES_LINKS.overview}/${id}`} className="btn btn-round btn-outline-light w-150px" onClick={onClick}>
								<span>View</span>
							</Link> : <Link to={`${url}`} target="_blank" className="btn btn-round btn-outline-light w-150px" onClick={onClick}>
								<span>View</span>
							</Link>
						}
					</div>
				</div>{/* .team */}
			</div>{/* .card-inner */}
		</div>
	);
}