export const setAccessToken = (token) => {
	if (token) {
		localStorage.setItem(
			process.env.REACT_APP_ACCESS_TOKEN_KEY || "access_token",
			token,
		);
	}
};

export const getAccessToken = () => {
	return localStorage.getItem(
		process.env.REACT_APP_ACCESS_TOKEN_KEY || "access_token",
	);
};

export const removeAccessToken = () => {
	localStorage.removeItem(
		process.env.REACT_APP_ACCESS_TOKEN_KEY || "access_token",
	);
};

export const setUser = (user) => {
	if (user) {
		localStorage.setItem("user", JSON.stringify(user));
	}
};
export const getUser = () => {
	return localStorage.getItem("user");
};

export const removeUser = () => {
	console.log("remove user");
	localStorage.removeItem("user");
};
<<<<<<< HEAD

export const getCart = () => {
	return JSON.parse(localStorage.getItem("cart"));
};
export const setCart = (cart) => {
	if (cart) {
		localStorage.setItem("cart", JSON.stringify(cart));
	}
};
=======
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
