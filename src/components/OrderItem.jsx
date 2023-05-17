import React from "react";

const OrderItem = ({ order }) => {
	return (
		<div key={order.customer} className="order-container">
			<div className="order-info">
				<div>Customer: {order.customer}</div>
				<div>Date: {order.date}</div>
			</div>
			<div className="order-info">
				<div>Product: {order.product}</div>
				<div>Quantity: {order.quantity}</div>
			</div>
			<div className="order-status">Status: {order.status}</div>
			{order.status === "Waiting" && (
				<div className="order-actions">
					<button className="order-action-accept">Accept</button>
					<button className="order-action-cancel">Cancel</button>
				</div>
			)}
			{order.status === "Processing" && (
				<div className="order-actions">
					<button className="order-action-accept">Done</button>
					<button className="order-action-cancel">Cancel</button>
				</div>
			)}
		</div>
	);
};

export default OrderItem;
