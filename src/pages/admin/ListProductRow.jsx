import React from "react";
import Loading from "../../components/public/Loading";
import { useState, useEffect } from "react";
import { getAllProducts, removeProduct } from "../../requests/products.request";
import ProductEditModel from "../../components/admin/ProductEditModel";
import Pagination from "../../components/public/Pagination";
import { BsSearch, BsArrowUp, BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
const ListProductRow = () => {
	const [state, setState] = useState({
		take: 10,
		page: 1,
		keyword: "",
		price: 0,
		stock: 0,
		seller: "",
		orderBy: ["id", "DESC"],
	});
	const [showModal, setShowModal] = useState(false);
	const [total, setTotal] = useState(0);
	const [productEdit, setProductEdit] = useState({});
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const endPointImg =
		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";
	const numOfPages = Math.ceil(total / state.take);

	const [debounce, setDebounce] = useState("");

	useEffect(() => {
		const temp = setTimeout(() => {
			setState((prev) => ({
				...prev,
				keyword: debounce,
			}));
		}, 1000);

		return () => clearTimeout(temp);
	}, [debounce]);

	const handleOrderChange = (e) => {
		const name = e.target.getAttribute("name");
		console.log(">>> check name:", name);
		if (state.orderBy[0] === name) {
			if (state.orderBy[1] === "ASC") {
				setState((prev) => ({
					...prev,
					orderBy: [name, "DESC"],
				}));
			} else {
				setState((prev) => ({
					...prev,
					orderBy: [name, "ASC"],
				}));
			}
		} else {
			setState((prev) => ({
				...prev,
				orderBy: [name, "ASC"],
			}));
		}
	};

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await getAllProducts(
				state.take,
				state.page,
				state.keyword,
				state.orderBy,
			);
			if (res.status === "success") {
				setProducts(res.products);
				setTotal(res.total);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, [state, showModal]);

	const handleUpdate = (e, product) => {
		e.preventDefault();
		setProductEdit(product);
		setShowModal(true);
	};

	const handleRemove = (e, id) => {
		e.preventDefault();
		removeProduct(id)
			.then((res) => {
				alert("Product removed successfully");
				fetchData();
				console.log(res);
			})
			.catch((error) => {
				alert("Error removing product");
				console.log(error);
			});
	};

	return (
		<div>
			{showModal && (
				<ProductEditModel
					productUpdate={productEdit}
					onClickHide={() => setShowModal(false)}
				/>
			)}
			<div
				style={{
					margin: "12px",
					border: "1px solid #ccc",
					borderRadius: "22px",
					display: "inline-block",
					padding: "4px 12px",
				}}>
				<input
					style={{
						outline: "none",
						border: "none",
						padding: "4px 8px",
						backgroundColor: "transparent",
						fontSize: "16px",
					}}
					onChange={(e) => setDebounce(e.target.value)}
					value={debounce}
					type="text"
					placeholder="Search?"
				/>
				<span style={{ fontSize: "16px" }}>
					<BsSearch />
				</span>
			</div>
			{loading ? (
				<Loading />
			) : (
				<table>
					<thead>
						<tr>
							<th name="id" onClick={handleOrderChange}>
								ID
								{state.orderBy[0] === "id" ? (
									state.orderBy[1] === "ASC" ? (
										<BsArrowUp />
									) : (
										<BsArrowDown />
									)
								) : (
									""
								)}
							</th>
							<th style={{ width: "100px" }}>Image</th>
							<th name="name" onClick={handleOrderChange}>
								Name
								{state.orderBy[0] === "name" ? (
									state.orderBy[1] === "ASC" ? (
										<BsArrowUp />
									) : (
										<BsArrowDown />
									)
								) : (
									""
								)}
							</th>
							<th name="description" onClick={handleOrderChange}>
								Description
								{state.orderBy[0] === "description" ? (
									state.orderBy[1] === "ASC" ? (
										<BsArrowUp />
									) : (
										<BsArrowDown />
									)
								) : (
									""
								)}
							</th>
							<th name="category" onClick={handleOrderChange}>
								Category
								{state.orderBy[0] === "category" ? (
									state.orderBy[1] === "ASC" ? (
										<BsArrowUp />
									) : (
										<BsArrowDown />
									)
								) : (
									""
								)}
							</th>
							<th name="price" onClick={handleOrderChange}>
								Price
								{state.orderBy[0] === "price" ? (
									state.orderBy[1] === "ASC" ? (
										<BsArrowUp />
									) : (
										<BsArrowDown />
									)
								) : (
									""
								)}
							</th>
							<th name="stock" onClick={handleOrderChange}>
								Stock
								{state.orderBy[0] === "stock" ? (
									state.orderBy[1] === "ASC" ? (
										<BsArrowUp />
									) : (
										<BsArrowDown />
									)
								) : (
									""
								)}
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr>
								<td>{product.id}</td>
								<td style={{ objectFit: "cover" }}>
									<Link to={"/product/" + product.id}>
										<img
											class="product-image"
											style={{
												height: "100px",
												width: "100px",
											}}
											src={
												product?.images &&
												product.images.length > 0
													? `${endPointImg}/${product.images[0].path}`
													: ""
											}
											alt="Product image"
										/>
									</Link>
								</td>
								<td>{product.name}</td>
								<td>{product.description.slice(0, 150)}...</td>
								<td>{product.category}</td>
								<td>${product.price}</td>
								<td>{product.stock}</td>
								<td>
									<button
										onClick={(e) =>
											handleUpdate(e, product)
										}
										class="edit-button">
										Edit
									</button>
									<button
										onClick={(e) =>
											handleRemove(e, product.id)
										}
										class="delete-button">
										Delete
									</button>
								</td>
								{/* <td>
									
								</td> */}
							</tr>
						))}
					</tbody>
				</table>
			)}

			<Pagination
				numOfPages={numOfPages}
				state={state}
				setState={setState}
			/>
		</div>
	);
};

export default ListProductRow;
