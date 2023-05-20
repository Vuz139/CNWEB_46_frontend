import React, { useEffect, useState } from "react";
import ProductWrapper from "../components/products/ProductWrapper";
import Loading from "../components/public/Loading";
// import "./home.css";
import "./oneProduct.css";
import { getAllProducts } from "../requests/products.request";

const ListProducts = () => {
	const [state, setState] = useState({
		take: 10,
		page: 1,
		keyword: "",
		price: 0,
	});
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
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
		fetchData();
	}, [state]);

	return (
		<div>
			{loading ? <Loading /> : <ProductWrapper products={products} />}
		</div>
	);
};

export default ListProducts;
