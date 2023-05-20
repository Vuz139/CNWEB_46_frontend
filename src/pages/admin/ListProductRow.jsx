import React from "react";
import Loading from "../../components/public/Loading";
import { useState, useEffect } from "react";
import { getAllProducts, removeProduct } from "../../requests/products.request";
import ProductEditModel from "../../components/admin/ProductEditModel";
const ListProductRow = () => {
	const [state, setState] = useState({
		take: 20,
		page: 1,
		keyword: "",
		price: 0,
		stock: 0,
		seller: "",
	});
	const [showModal, setShowModal] = useState(false);
	const [productEdit, setProductEdit] = useState({});
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const endPointImg =
		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";
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

	if (loading) return <Loading />;
	return (
		<div>
			{showModal && (
				<ProductEditModel
					productUpdate={productEdit}
					onClickHide={() => setShowModal(false)}
				/>
			)}
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Image</th>
						<th>Name</th>
						<th>Description</th>
						<th>Category</th>
						<th>Price</th>
						<th>Stock</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr>
							<td>{product.id}</td>
							<td>
								<img
									class="product-image"
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
							<td>{product.description}</td>
							<td>{product.category}</td>
							<td>${product.price}</td>
							<td>{product.stock}</td>
							<td>
								<button
									onClick={(e) => handleUpdate(e, product)}
									class="edit-button">
									Edit
								</button>
							</td>
							<td>
								<button
									onClick={(e) => handleRemove(e, product.id)}
									class="delete-button">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListProductRow;
