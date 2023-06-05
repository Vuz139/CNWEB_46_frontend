import React, { useState } from "react";
import { useSelector } from "react-redux";
import { orderStatus } from "../../contrainst/orderStatus";
import { createOrder } from "../../requests/orders.request";

const NewOrder = () => {
	const cart = useSelector((state) => state.cart);
	const [shippingInfo, setShippingInfo] = useState({
		address: "155 Tấy Sơn",
		phoneNo: "012345656",
		city: "Hà Nội",
		country: "Việt Nam",
		postalCode: "402",
	});
	const itemsPrice = cart.reduce(
		(curr, value) => curr + value.price * value.amount,
		0,
	);
	const taxPrice = 0.05 * itemsPrice;
	const totalPrice = itemsPrice + taxPrice;
	// const [order, setOrder] = useState({
	// 	taxPrice,
	// 	totalPrice,
	// 	shippingPrice: 15,
	// });

	const makeOrder = async () => {
		const orderPost = {
			shippingInfo,
			orderStatus: orderStatus[0],
			itemsOrder: cart,
			taxPrice,
			itemsPrice,
			totalPrice,
			shippingPrice: 15,
		};
		try {
			const res = await createOrder(orderPost);
			console.log("res:", res);
		} catch (error) {
			console.log(error);
		}
	};

	const handleClickCreate = async (e) => {
		e.preventDefault();
		if (cart.length < 1) {
			alert("Vui lòng thêm sản phẩm muốn mua");
			return;
		}
		await makeOrder();
	};

	return (
		<div>
			<button onClick={makeOrder}>Create order</button>
		</div>
	);
};

export default NewOrder;
