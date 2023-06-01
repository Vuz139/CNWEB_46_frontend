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
<<<<<<< HEAD

export const getUserOders = async ({
	take = 5,
	page = 1,
	orderStatus = "",
}) => {
	return await api.get(`/user/orders`, {
		params: { take, page, orderStatus },
	});
};

export const createOrder = async (order) => {
	// console.log("order: ", order);
	return await api.post(`/order`, {
		...order,
	});
};
=======
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
