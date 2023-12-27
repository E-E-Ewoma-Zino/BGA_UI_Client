// Perform all the authentication requests
import REQUEST from "../services/axios.service";

export const login = async (username, password) => {
	try {
		const { data } = await REQUEST.post("/auth", { username, password });

		localStorage.setItem("token", data.result.token.token);
		localStorage.setItem("client", JSON.stringify(data.result));
		localStorage.setItem("isAuthenticated", true);

		return data.result;
	} catch (error) {
		console.error("Axios Error", error);
		return error.response?.data || null;
	}
}

export const logout = () => localStorage.clear();