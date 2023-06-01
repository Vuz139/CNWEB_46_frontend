import React, { useEffect, useState } from "react";
import OrderItem from "../../components/OrderItem";
import Pagination from "../../components/public/Pagination";
<<<<<<< HEAD
import { getAllOrders } from "../../requests/orders.request";
import Loading from "../../components/public/Loading";
import { orderStatus } from "../../contrainst/orderStatus";
import { AiOutlineArrowDown } from "react-icons/ai";
=======
import { BiDownArrow } from "react-icons/bi";
import { getAllOrders } from "../../requests/orders.request";
import Loading from "../../components/public/Loading";
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
const ListOrder = () => {
	const [loading, setLoading] = useState(true);
	const [state, setState] = useState({
		page: 1,
		take: 4,
		skip: 0,
		status: "",
	});
	const [orders, setOrders] = useState([]);
	const [numOfPages, setNumOfPages] = useState(0);
	function handleFilterChange(event) {
		const { value } = event.target;
		setState((prev) => ({ ...prev, status: value }));
	}

	const fetchOrders = async () => {
		try {
			setLoading(true);
			const res = await getAllOrders(state);
			if (res.status === "success") {
				setOrders(res.data);
				setNumOfPages(Math.ceil(res.total / state.take));
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchOrders();
	}, [state]);
	return (
		<div>
<<<<<<< HEAD
			<h1>Danh sách đơn hàng</h1>
			<div className="filter-container">
				<span className="filter-label">Lọc:</span>
				<div className="filter-select">
					<label htmlFor="filter-status">
						<AiOutlineArrowDown />
=======
			<h1>List Orders</h1>
			<div className="filter-container">
				<span className="filter-label">Filter by status:</span>
				<div className="filter-select">
					<label htmlFor="filter-status">
						<BiDownArrow />
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
					</label>
					<select
						id="filter-status"
						className="filter-selection"
						value={state.status}
						onChange={(e) => handleFilterChange(e)}>
<<<<<<< HEAD
						<option value="">Tất cả đơn hàng</option>
						{orderStatus.map((status) => (
							<option value={status}>{status}</option>
						))}
=======
						<option value="">All</option>
						<option value="pending">Pending</option>
						<option value="processing">Processing</option>
						<option value="completed">Completed</option>
						<option value="cancelled">Cancelled</option>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
					</select>
				</div>
			</div>
			{loading ? (
				<Loading />
			) : (
				orders?.map((order) => <OrderItem id={order.id} />)
			)}

			<Pagination
				state={state}
				setState={setState}
				numOfPages={numOfPages}
			/>
		</div>
	);
};

export default ListOrder;
