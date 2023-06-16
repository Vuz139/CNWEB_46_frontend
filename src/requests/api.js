import axios from "axios";
import { getAccessToken, removeAccessToken } from "../utils/storage.util";
export const api = axios.create({
	baseURL: process.env.REACT_APP_END_POINT,
	headers: {
		"Content-Type": "application/json",
		Accept: "*/*",
		Authorization: getAccessToken()
	},
});

export const apiImage = axios.create({
	baseURL: process.env.REACT_APP_END_POINT,
	headers: {
		"Content-Type": "multipart/form-data",
		Accept: "image/*",
	},
});

apiImage.interceptors.request.use(
	(config) => {
		const token = getAccessToken();

		// add token to headers
		if (token && config?.headers) {
			config.headers["Authorization"] = "Bearer " + token;
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

api.interceptors.request.use(
	(config) => {
		const token = getAccessToken();

		// add token to headers
		if (token && config?.headers) {
			config.headers["Authorization"] = "Bearer " + token;
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

api.interceptors.response.use(
	(response) => response.data,
	(error) => {
		// if (error.response?.status === 401) {
		// 	removeAccessToken();
		// }

		// const configData = JSON.parse(error.config?.data);
		// if (!configData.silent) {
		// 	message.error(error.response?.data?.message);
		// }
		return Promise.reject(error);
	},
);
