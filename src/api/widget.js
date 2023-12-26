// Perform all the widget requests
import REQUEST from "../services/axios.service";

const getAllWidget = async (clientId) => {
	try {
		const { data } = await REQUEST.get("/widget/get/all/" + localStorage.getItem("client"));

		return data.result;
	} catch (error) {
		console.error("Axios Error", error);
		return error.response?.data || null;
	}
}

export default getAllWidget;