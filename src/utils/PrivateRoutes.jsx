import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import ROUTES_LINKS from "../constants/routes";


const PrivateRoutes = () => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	console.log("is private?", isAuthenticated);
	return (
		true ? <Outlet /> : <Navigate to={ROUTES_LINKS.auth} />
	)
}

export default PrivateRoutes;