
import React from "react";
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"
import {IoIosAdd , IoIosCart} from "react-icons/io"
import "./ProductItem.css"
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
	const dispatch = useDispatch();
	
	const YesStar = [];
	// console.log(product.ratings);

	for (let i = 0; i < Math.floor(3); i++) {
		YesStar.push(<FaStar color="yellow" />);
	}
	const NoStar =[];
	let noStar = 5 - Math.floor(3)
	for(let i = 0; i<noStar ;i++){
		NoStar.push(<FaStar />);
	}


	const navigate = useNavigate();
	const handleAddToCart = (event) => {
		event.stopPropagation();
		dispatch(addToCart(product));
		// window.location.href = '/products'
		navigate('/products',{replace:true});
		console.log('thuc hien navigate')
	};

	const handleBuyNow = (event) => {
		event.stopPropagation();
		dispatch(addToCart(product));
		// window.location.href = '/cart'
		navigate("/order",{replace:true});
		console.log("day la buy now");
	};


	const endPointImg =
		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";

	return (
		<div
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
				navigate('/product/${product.id}');  
			}}
			// to={`/product/${product.id}`}
			className="col-4 m-3 sm-12"
		>

			<div className="pi-product">
				<Link to={`/product/${product.id}`} className="pi-img-prod">
					<img className="pi-img-fluid" src={
						product?.images && product.images.length > 0
							? `${endPointImg}/${product.images[0].path}`
							: ""
					}
						alt="Normal"
					/>
					<div className="pi-overlay" />

				</Link>

				<div className="pi-text">
					<div className="pi-wrap-cat-rat">
						{/* the loaji san pham */}

						<div className="pi-cat">
							<span>{product.category}</span>
						</div>

						{/* danh gia cua san pham  */}

						<div className="pi-rating">
							<p className="">
								{YesStar}
								{NoStar}
							</p>
						</div>
					</div>
					{/* gioi thieu san pham */}
					<h3 className="pi-des">
						{product.description}
					</h3>
					<div className="pi-pricing">
						<p className="pi-price">
							${product.price}
						</p>
					</div>
					<div className="pi-seller">
						<p>{product.seller}</p>
					</div>
					<p className="pi-bottom-area">
						<button onClick={handleAddToCart}  className="pi-add-cart pi-cho">ADD TO CART<IoIosAdd /></button>
						<button  onClick={handleBuyNow} className="pi-buy-now pi-cho">BUY NOW<IoIosCart /></button>
					</p>
				</div>

			</div>


		</div>
	)
}

export default ProductItem