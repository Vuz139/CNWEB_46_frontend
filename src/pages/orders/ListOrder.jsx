import React, { useEffect, useState } from "react";
import OrderItem from "../../components/OrderItem";

const ListOrder = () => {
	const [currState, setCurrState] = useState({
		currentPage: 1,
		ordersPerPage: 4,
		filterStatus: "",
	});

	function handlePageChange(pageNumber) {
		setCurrState((prev) => ({ ...prev, currentPage: pageNumber }));
	}

	function handleFilterChange(event) {
		const { value } = event.target;
		setCurrState((prev) => ({ ...prev, filterStatus: value }));
	}

	const orders = [
		{
			customer: "Customer 1",
			product: "Product A",
			quantity: 2,
			date: "2023-05-01",
			status: "Waiting",
		},
		{
			customer: "Customer 2",
			product: "Product B",
			quantity: 1,
			date: "2023-05-02",
			status: "Processing",
		},
		{
			customer: "Customer 3",
			product: "Product C",
			quantity: 3,
			date: "2023-05-03",
			status: "Completed",
		},
		{
			customer: "Customer 3",
			product: "Product C",
			quantity: 3,
			date: "2023-05-03",
			status: "Completed",
		},
		{
			customer: "Customer 3",
			product: "Product C",
			quantity: 3,
			date: "2023-05-03",
			status: "Completed",
		},
		{
			customer: "Customer 3",
			product: "Product C",
			quantity: 3,
			date: "2023-05-03",
			status: "Completed",
		},
		{
			customer: "Customer 3",
			product: "Product C",
			quantity: 3,
			date: "2023-05-03",
			status: "Completed",
		},
	];
	const { currentPage, ordersPerPage } = currState;

	const filteredOrders = currState.filterStatus
		? orders.filter((order) => order.status === currState.filterStatus)
		: orders;
	const indexOfLastOrder = currentPage * ordersPerPage;
	const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
	const currentOrders = filteredOrders.slice(
		indexOfFirstOrder,
		indexOfLastOrder,
	);
	const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<h1>Admin/ List Orders</h1>
			<div className="filter-container">
				<span className="filter-label">Filter by status:</span>
				<select
					value={currState.filterStatus}
					onChange={(e) => handleFilterChange(e)}>
					<option value="">All</option>
					<option value="Waiting">Waiting</option>
					<option value="Processing">Processing</option>
					<option value="Completed">Completed</option>
				</select>
			</div>
			{currentOrders.map((order) => (
				<OrderItem order={order} />
			))}

			<div className="pagination">
				{pageNumbers.map((pageNumber) => (
					<span
						key={pageNumber}
						className={`pagination-button ${
							currentPage === pageNumber ? "active" : ""
						}`}
						onClick={() => handlePageChange(pageNumber)}>
						{pageNumber}
					</span>
				))}
			</div>
		</div>
	);
};

export default ListOrder;
