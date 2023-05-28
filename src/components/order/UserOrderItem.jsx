import React, { useEffect, useState } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import Loading from "../public/Loading";
import { getOrderById } from "../../requests/orders.request";
import { Link } from "react-router-dom";

const UserOrderItem = ({ id }) => {
	const [loading, setLoading] = useState(true);
	const [orderDetails, setOrderDetails] = useState([]);
	const fetchOrder = async () => {
		try {
			setLoading(true);
			const res = await getOrderById(id);
			if (res.status === "success") {
				console.log(">>>the order:", res.data);
				setOrderDetails(res.data);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchOrder();
	}, []);
	if (loading) return <Loading />;
	return (
		<div className="userOrder__item">
			<div className="userOrder__item__status">
				<BsTruck /> {orderDetails.orderStatus}
			</div>
			<div className="userOrder__products">
				{orderDetails.products.map((product) => (
					<div className="userOrder__product">
						<Link
							to={`/product/${product.id}`}
							className="order__product__img">
							<img
								src={`${process.env.REACT_APP_END_POINT_IMAGE}/${product.images[0].path}`}
								alt="ANH"
							/>
							<div className="order__product__amount">
								x{product.amount}
							</div>
						</Link>
						<div className="order__product__body">
							<h2>{product.name}</h2>
							<p>
								<AiOutlineShop /> {product.seller}
							</p>
						</div>
						<div className="order__product__price">
							{product.price} <span>đ</span>
						</div>
					</div>
				))}
			</div>
			<div className="userOrder__item__price">
				<span>
					Tổng tiền:{" "}
					<span className="userOder__item__total">
						{orderDetails.totalPrice}
					</span>{" "}
					đ
				</span>
			</div>
			<div className="userOrder__address">
				<p>
					Địa chỉ: {orderDetails.shipping_info.address},{" "}
					{orderDetails.shipping_info.city},{" "}
					{orderDetails.shipping_info.country}{" "}
				</p>
				<p>Số điện thoại: {orderDetails.shipping_info.phoneNo}</p>
			</div>
		</div>
	);
};

export default UserOrderItem;
