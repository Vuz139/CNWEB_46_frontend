import { api, apiImage } from "./api";

import { getAccessToken, setAccessToken } from "../utils/storage.util";

export const addAvatar = async (avatar) => {
	try {
		const formData = new FormData();
		formData.append("file", avatar);
		const response = await apiImage.post(`/user/avatar`, formData);

		console.log("Image uploaded successfully:", response.data);
	} catch (error) {
		console.error("Error uploading image:", error);
	}
};

export const getListUsers = async (params) => {
	const response = await api.get("/users", { params });
	return response.data;
};

export const createUser = async (body, avatar = null) => {
	const response = await api.post("/user/register", body);

	setAccessToken(response?.token);

	avatar && (await addAvatar(avatar));
	return response;
};

export const updateUser = async (id, body) => {
	const response = await api.put(`/users/${id}`, body);
	return response;
};

export const login = async (body) => {
	const response = await api.post("/user/login", body);
	setAccessToken(response?.token);
	return response;
};
