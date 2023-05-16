import { api } from "./api";
import { setAccessToken } from "../utils/storage.util";
export const getListUsers = async (params) => {
	const response = await api.get("/users", { params });
	return response.data;
};

export const createUser = async (body) => {
	const response = await api.post("/user/register", body);
	console.log(">>>body: ", body);
	return response.data;
};

export const updateUser = async (id, body) => {
	const response = await api.put(`/users/${id}`, body);
	return response.data;
};

export const login = async (body) => {
	const response = await api.post("/user/login", body);
	setAccessToken(response.data?.token);
	return response.data;
};
