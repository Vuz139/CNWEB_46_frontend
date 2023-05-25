import React, { useEffect, useState } from "react";
import ProductWrapper from "../components/products/ProductWrapper";
import useDebounce from "../utils/debounce";
import Loading from "../components/public/Loading";
import "./oneProduct.css";
import { getAllProducts } from "../requests/products.request";
import { AiOutlineDown } from "react-icons/ai";
import FIlterStar from "../components/products/FIlterStar";
import Slider from "../components/products/Slider";
import { useSelector } from "react-redux";

const ListProducts = () => {
	const maxProduct = useSelector((state) => state.product);
	const [state, setState] = useState({
		take: 10,
		page: 1,
		keyword: "",
		price: Number(maxProduct?.price) || 30000,
		ratings: 0,
		category: "",
		seller: "",
	});
	const [searchValue, setSearchValue] = useState("");
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setState((prev) => ({
			...prev,
			keyword: searchValue,
		}));
	}, [useDebounce(searchValue, 600)]);

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
		fetchData();
	}, [state]);

	const handleClearFilter = () => {
		setSearchValue("");
		setState({
			keyword: "",
			price: Number(maxProduct.price),
			ratings: 0,
			category: "",
			seller: "",
		});
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
					<h2 className="sidebar__field-name">Category</h2>
					<div className="category__item">
						<button
							value={""}
							onClick={handleCategoryChange}
							className={`category__btn ${
								state.category === "" ? "active" : ""
							}`}>
							All
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
					<h2 className="sidebar__field-name">Company</h2>
					<div className="sidebar__select">
						<label htmlFor="seller">
							<AiOutlineDown style={{ fontWeight: "700" }} />
						</label>
						<select
							onChange={handleSellerChange}
							name="seller"
							id="seller">
							<option value="">all</option>
							{maxProduct?.seller?.map((se) => (
								<option value={se}>{se}</option>
							))}
						</select>
					</div>
				</div>
				<div className="sidebar__ratings">
					<h2 className="sidebar__field-name">Ratings</h2>
					<div className="sidebar__rating">
						<span
							style={{ cursor: "pointer", userSelect: "none" }}
							className={state.ratings === 0 && `active`}
							onClick={() => handleRatingChange(0)}>
							All
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
			{loading ? <Loading /> : <ProductWrapper products={products} />}
		</div>
	);
};

export default ListProducts;
