import { api, apiImage } from "./api";

export const getProductById = async (id) => {
	return await api.get(`/product/${id}`);
};
export const addImage = async (productId, image) => {
	try {
		const formData = new FormData();
		formData.append("file", image);
		const response = await apiImage.post(
			`/product/image?productId=${productId}`,
			formData,
		);

		console.log("Image uploaded successfully:", response.data);
	} catch (error) {
		console.error("Error uploading image:", error);
	}
};

export const getAllProducts = async ({
	take = 10,
	page = 1,
	keyword = "",
	orderBy = ["ratings", "desc"],
	query = "",
}) => {
	console.log(">>>check query: " + query);
	const res = await api.get(
		`/products?${query}&${orderBy.length > 0 && `orderBy=[${orderBy}]`}`,
		{
			params: {
				take,
				page,
				keyword,
			},
		},
	);

	return res;
};

export const createProduct = async (product, image = null) => {
	const res = await api.post("/product", product);
	const productId = res.product.id;
	image && (await addImage(productId, image));
	return res;
};

export const updateProduct = async (product, image = null) => {
	return await api.put(`/product/${product.id}`, product);
};

export const removeProduct = async (productId) => {
	const res = await api.delete(`/product/${productId}`);
	return res;
};
