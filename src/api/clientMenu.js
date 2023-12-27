// Perform all the authentication requests
import REQUEST from "../services/axios.service";

const clientMenu = async (widgetId) => {
	try {
		const clinetId = JSON.parse(localStorage.getItem("client"))?.client_id;
		console.log("mmmm", clinetId);
		const { data } = await REQUEST.get("/menu/client/" + clinetId + "?widget=" + widgetId);

		console.log("what?", data.result);
		return data.result;
	} catch (error) {
		console.error("Axios Error", error);
		return error.response?.data || null;
	}
}

export default clientMenu;