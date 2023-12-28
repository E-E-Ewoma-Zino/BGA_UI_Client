// Perform all the widget requests
import REQUEST from "../services/axios.service";

const getAllWidget = async (clientId) => {
	try {
		console.log("the tokeikknn", localStorage.getItem("token"));
		const { data } = await REQUEST.get("/widget/get/all/" + clientId, {
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token")
			}
		});

		return data.result;
	} catch (error) {
		console.error("Axios Error", error);
		return error.response?.data || null;
	}
}

export default getAllWidget;