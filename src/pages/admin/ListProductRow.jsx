import React from "react";
import Loading from "../../components/public/Loading";
import { useState, useEffect } from "react";
import { getAllProducts, removeProduct } from "../../requests/products.request";
import ProductEditModel from "../../components/admin/ProductEditModel";
import Pagination from "../../components/public/Pagination";
import { BsSearch } from "react-icons/bs";
const ListProductRow = () => {
	const [state, setState] = useState({
		take: 10,
		page: 1,
		keyword: "",
		price: 0,
		stock: 0,
		seller: "",
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

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await getAllProducts(
				state.take,
				state.page,
				state.keyword,
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
							<th>ID</th>
							<th style={{ width: "100px" }}>Image</th>
							<th>Name</th>
							<th>Description</th>
							<th>Category</th>
							<th>Price</th>
							<th>Stock</th>
							<th colSpan={2}></th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr>
								<td>{product.id}</td>
								<td style={{ objectFit: "cover" }}>
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
								</td>
								<td>
									<button
										onClick={(e) =>
											handleRemove(e, product.id)
										}
										class="delete-button">
										Delete
									</button>
								</td>
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
