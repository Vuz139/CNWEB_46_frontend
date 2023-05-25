import React, { useEffect, useState } from "react";
import { getOrderById, updateOrder } from "../requests/orders.request";
import Loading from "./public/Loading";

const OrderItem = ({ id }) => {
	const [loading, setLoading] = useState(true);
	const [currOrder, setCurrOrder] = useState({});

	const fetchOrder = async () => {
		try {
			setLoading(true);
			const resp = await getOrderById(id);
			if (resp.status === "success") {
				setCurrOrder(resp.data);
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

	const handleStatusChange = async (e) => {
		try {
			setLoading(true);
			const res = await updateOrder(id, {
				orderStatus: e.target.value,
			});
			if (res.status === "success") {
				await fetchOrder();
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div key={currOrder.id} className="order-container">
			{loading || !currOrder ? (
				<Loading />
			) : (
				<>
					<div className="order-info">
						<div>Customer: {currOrder?.user?.name}</div>
						<div>Date: {currOrder.createdAt}</div>
					</div>
					<div className="order-info">
						<div>Payment: {currOrder.paymentInfo}</div>
						<div>Quantity: {currOrder.totalPrice}</div>
					</div>
					<div className="order-status">
						Status: {currOrder.orderStatus || "Cancelled"}
					</div>
					{currOrder.orderStatus === "pending" && (
						<div className="order-actions">
							<button
								value={"processing"}
								onClick={handleStatusChange}
								className="order-action-accept">
								Accept
							</button>
							<button
								value={"rejected"}
								onClick={handleStatusChange}
								className="order-action-cancel">
								Reject
							</button>
						</div>
					)}
					{currOrder.orderStatus === "processing" && (
						<div className="order-actions">
							<button
								value={"fullfiled"}
								onClick={handleStatusChange}
								className="order-action-accept">
								Done
							</button>
							<button
								value={"canceled"}
								onClick={handleStatusChange}
								className="order-action-cancel">
								Cancel
							</button>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default OrderItem;
