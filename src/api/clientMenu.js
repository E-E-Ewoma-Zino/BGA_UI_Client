// Perform all the authentication requests
import REQUEST from "../services/axios.service";

const clientMenu = async (widgetId) => {
	try {
		console.log("I am token>>>>>>>>>>>>>>>>>>>>", localStorage.getItem("token"));

		const clinetId = JSON.parse(localStorage.getItem("client"))?.client_id;
		console.log("mmmm", clinetId);
		const { data } = await REQUEST.get("/menu/client/" + clinetId + "?widget=" + widgetId, {
			headers: {
				Authorization: localStorage.getItem("token")
			}
		});

		console.log("what?", data.result);
		return data.result;
	} catch (error) {
		console.error("Axios Error", error);
		return error.response?.data || null;
	}
}

export default clientMenu;