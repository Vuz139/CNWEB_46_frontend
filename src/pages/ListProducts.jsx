import React, { useEffect, useState } from "react";
import ProductWrapper from "../components/products/ProductWrapper";
import useDebounce from "../utils/debounce";
import "./oneProduct.css";
import { getAllProducts } from "../requests/products.request";
import { AiOutlineDown } from "react-icons/ai";
import FIlterStar from "../components/products/FIlterStar";
import Slider from "../components/products/Slider";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
<<<<<<< HEAD
import Pagination from "../components/public/Pagination";

const ListProducts = () => {
	const location = useLocation();
	const maxProduct = useSelector((state) => state.product);
	const [total, setTotal] = useState(0);
	const [searchValue, setSearchValue] = useState(location.search?.slice(1));
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		take: 8,
		page: 1,
		skip: 0,
		keyword: "",
		price: Number(maxProduct?.price) || 300000,
=======

const ListProducts = () => {
	const location = useLocation();
	console.log(">>> check location:", location.search.slice(1));
	const maxProduct = useSelector((state) => state.product);
	const [state, setState] = useState({
		take: 10,
		page: 1,
		keyword: "",
		price: Number(maxProduct?.price) || 30000,
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
		ratings: 0,
		category: "",
		seller: "",
	});

<<<<<<< HEAD
=======
	const [searchValue, setSearchValue] = useState(location.search?.slice(1));
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
	useEffect(() => {
		setState((prev) => ({
			...prev,
			keyword: searchValue,
		}));
	}, [useDebounce(searchValue, 600)]);
<<<<<<< HEAD
	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await getAllProducts({
				take: state.take,
				page: state.page,
				keyword: state.keyword,
				query: `&ratings[gte]=${state.ratings}&category=${state.category}&seller=${state.seller}&price[lte]=${state.price}`,
			});
			console.log(">>> check res:", res);
			if (res.status === "success") {
				setTotal(res.total);
				setProducts(res.products);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		console.log(">>> check state: ", state);
		console.log(">>> check product:", maxProduct);
=======

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await getAllProducts({
					take: state.take,
					page: state.page,
					keyword: state.keyword,

					query: `&ratings[gte]=${state.ratings}&category=${state.category}&seller=${state.seller}&price[lte]=${state.price}`,
				});
				if (res.status === "success") {
					setProducts(res.products);
				}
			} catch (error) {
				console.log(error);
				// alert(error);
			} finally {
				setLoading(false);
			}
		};
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
		fetchData();
	}, [state]);

	const handleClearFilter = () => {
		setSearchValue("");
<<<<<<< HEAD
		setState((prev) => ({
			...prev,
			keyword: "",
			price: Number(maxProduct.price) || 1000000,
			ratings: 0,
			category: "",
			seller: "",
		}));
=======
		setState({
			keyword: "",
			price: Number(maxProduct.price),
			ratings: 0,
			category: "",
			seller: "",
		});
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
	};

	const handleSearchChange = (e) => {
		setSearchValue(e.target.value);
	};

	const handleRatingChange = (rate) => {
		setState((prev) => ({
			...prev,
			ratings: rate,
		}));
	};
	const handleCategoryChange = (e) => {
		setState((prev) => ({
			...prev,
			category: e.target.value,
		}));
	};
	const handleSellerChange = (e) => {
		setState((prev) => ({
			...prev,
			seller: e.target.value,
		}));
	};
	return (
		<div className="list-product">
			<div className="list-product__sidebar">
				<input
					value={searchValue}
					onChange={handleSearchChange}
					className="sidebar__search"
					type="text"
					placeholder="Search"
				/>

				<div className="sidebar__categoroy">
<<<<<<< HEAD
					<h2 className="sidebar__field-name">Thể Loại</h2>
=======
					<h2 className="sidebar__field-name">Category</h2>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
					<div className="category__item">
						<button
							value={""}
							onClick={handleCategoryChange}
							className={`category__btn ${
								state.category === "" ? "active" : ""
							}`}>
<<<<<<< HEAD
							Tất cả
=======
							All
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
						</button>
						{maxProduct?.category?.map((c) => (
							<button
								value={c}
								onClick={handleCategoryChange}
								className={`category__btn ${
									state.category === c ? "active" : ""
								}`}>
								{c}
							</button>
						))}
					</div>
				</div>
				<div className="sidebar__company">
<<<<<<< HEAD
					<h2 className="sidebar__field-name">Nhà Cung Cấp</h2>
=======
					<h2 className="sidebar__field-name">Company</h2>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
					<div className="sidebar__select">
						<label htmlFor="seller">
							<AiOutlineDown style={{ fontWeight: "700" }} />
						</label>
						<select
							onChange={handleSellerChange}
							name="seller"
							id="seller">
<<<<<<< HEAD
							<option value="">Tất cả</option>
=======
							<option value="">all</option>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
							{maxProduct?.seller?.map((se) => (
								<option value={se}>{se}</option>
							))}
						</select>
					</div>
				</div>
				<div className="sidebar__ratings">
<<<<<<< HEAD
					<h2 className="sidebar__field-name">Đánh giá</h2>
=======
					<h2 className="sidebar__field-name">Ratings</h2>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
					<div className="sidebar__rating">
						<span
							style={{ cursor: "pointer", userSelect: "none" }}
							className={state.ratings === 0 && `active`}
							onClick={() => handleRatingChange(0)}>
<<<<<<< HEAD
							Tất cả
=======
							All
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
						</span>

						<FIlterStar
							ratings={state.ratings}
							offset={1}
							handleRatingChange={() => handleRatingChange(1)}
						/>
						<FIlterStar
							ratings={state.ratings}
							offset={2}
							handleRatingChange={() => handleRatingChange(2)}
						/>
						<FIlterStar
							ratings={state.ratings}
							offset={3}
							handleRatingChange={() => handleRatingChange(3)}
						/>
						<FIlterStar
							ratings={state.ratings}
							offset={4}
							handleRatingChange={() => handleRatingChange(4)}
						/>
						<FIlterStar
							ratings={state.ratings}
							offset={5}
							handleRatingChange={() => handleRatingChange(5)}
						/>
					</div>
				</div>
				<Slider setState={setState} maxPrice={maxProduct?.price} />

				<div className="sidebar__clear">
					<button onClick={handleClearFilter}> Clear filter</button>
				</div>
			</div>
<<<<<<< HEAD
			<div style={{ width: "100%" }}>
				<ProductWrapper products={products} loading={loading} />

				<Pagination
					option={false}
					state={state}
					setState={setState}
					numOfPages={Math.ceil(total / state.take)}
				/>
			</div>
=======
			<ProductWrapper products={products} loading={loading} />
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
		</div>
	);
};

export default ListProducts;
