import { api } from "./api";

export const getAllOrders = async (params) => {
	const res = await api.get("/orders", {
		params: {
			...params,
		},
	});

	return res;
};

export const getOrderById = async (id) => {
	return await api.get(`/order/${id}`);
};

export const updateOrder = async (id, body) => {
	return await api.put(`/order/${id}`, {
		...body,
	});
};
