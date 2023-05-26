~import React, { useEffect, useState } from "react";
import ProductWrapper from "../components/products/ProductWrapper";
import useDebounce from "../utils/debounce";
import Loading from "../components/public/Loading";
import "./oneProduct.css";
import { getAllProducts } from "../requests/products.request";
import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import FIlterStar from "../components/products/FIlterStar";
const ListProducts = () => {
	const [state, setState] = useState({
		take: 10,
		page: 1,
		keyword: "",
		price: 10000,
		ratings: 0,
		category: "",
		seller: "",
	});
	const [searchValue, setSearchValue] = useState("");
	const maxPrice = 3000;
	const [sliderValue, setSliderValue] = useState(50);
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
			price: 10000,
			ratings: 0,
			category: "",
			seller: "",
		});
	};

	const handleSearchChange = (e) => {
		setSearchValue(e.target.value);
	};
	const handleDrag = (e) => {
		const volumeSlider = document.querySelector(".volume-slider");
		const bounds = volumeSlider.getBoundingClientRect();
		const x = e.clientX - bounds.left;
		const percentage = (x / bounds.width) * 100;
		if (percentage > 100) setSliderValue(100);
		else if (percentage < 0) setSliderValue(0);
		else {
			setSliderValue(percentage);
		}
	};

	const handleDragEnd = (e) => {
		const volumeSlider = document.querySelector(".volume-slider");
		const bounds = volumeSlider.getBoundingClientRect();
		const x = e.clientX - bounds.left;
		const percentage = (x / bounds.width) * 100;
		if (percentage > 100) setSliderValue(100);
		else if (percentage < 0) setSliderValue(0);
		else {
			setSliderValue(percentage);
		}
	};
	const handleRatingChange = (rate) => {
		setState((prev) => ({
			...prev,
			ratings: rate,
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
						<button className="category__btn active">All</button>
						<button className="category__btn">Office</button>
						<button className="category__btn">Living Room</button>
						<button className="category__btn">Kitchen</button>
						<button className="category__btn">Bedroom</button>
						<button className="category__btn">Dining</button>
						<button className="category__btn">Kids</button>
					</div>
				</div>
				<div className="sidebar__company">
					<h2 className="sidebar__field-name">Company</h2>
					<div className="sidebar__select">
						<label htmlFor="company">
							<AiOutlineDown style={{ fontWeight: "700" }} />
						</label>
						<select name="company" id="company">
							<option value="all">all</option>
							<option value="marcos">marcos</option>
							<option value="liddy">liddy</option>
							<option value="ikea">ikea</option>
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
				<div className="sidebar__price">
					<h2 className="sidebar__field-name">Price</h2>
					<p style={{ textAlign: "left" }}>
						${((sliderValue * maxPrice) / 100).toFixed(2)}
					</p>
					<div className="volume-slider">
						<div
							className="bar"
							style={{ width: `${sliderValue}%` }}></div>
						<div
							style={{ left: `${sliderValue}%` }}
							draggable
							onDrag={handleDrag}
							onDragEnd={handleDragEnd}
							className="handle"></div>
					</div>
				</div>

				<div className="sidebar__clear">
					<button onClick={handleClearFilter}> Clear filter</button>
				</div>
			</div>
			{loading ? <Loading /> : <ProductWrapper products={products} />}
		</div>
	);
};

export default ListProducts;
