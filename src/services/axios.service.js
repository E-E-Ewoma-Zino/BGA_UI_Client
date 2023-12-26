// Set up the axios service
import axios from "axios";

const REQUEST = axios.create({
	baseURL: "https://bga-nine.vercel.app",
	headers: {
		"Content-Type": "application/json",
		Authorization: localStorage.getItem("token")
	}
});

export default REQUEST;