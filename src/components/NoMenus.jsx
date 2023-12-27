// 404 dashboard page
import ROUTES_LINKS from "../constants/routes";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NoMenus() {
	return (
		<div className="nk-main ">
			<Helmet>
				<title>404 No menu found</title>
			</Helmet>
			{/* wrap @s */}
			<div className="nk-wrap nk-wrap-nosidebar">
				{/* content @s */}
				<div className="nk-content ">
					<div className="nk-block nk-block-middle wide-xs mx-auto">
						<div className="nk-block-content nk-error-ld text-center">
							<h1 className="nk-error-head">404</h1>
							<h3 className="nk-error-title">Oops! Why are you seeing this?</h3>
							<p className="nk-error-text">We are sorry but the menus you are looking for are either deleted or have not been created.</p>
							<Link to={ROUTES_LINKS.overview} className="btn btn-lg btn-primary mt-2">Back To Overview</Link>
						</div>
					</div>
					{/* .nk-block */}
				</div>
				{/* wrap @e */}
			</div>
			{/* content @e */}
		</div>
	);
}