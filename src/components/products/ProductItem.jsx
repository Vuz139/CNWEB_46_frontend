// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ProductItem = ({ product }) => {
// 	const endPointImg =
// 		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";

// 	return (
// 		<Link
// 			onClick={() => {
// 				window.scrollTo({ top: 0, behavior: "smooth" });
// 			}}
// 			to={`/product/${product.id}`}
// 			className="col-4 m-3 sm-12">
// 			<div className="productContainer">
// 				<div className="sp">
// 					<img
// 						className="anhSp"
// 						src={
// 							product?.images && product.images.length > 0
// 								? `${endPointImg}/${product.images[0].path}`
// 								: ""
// 						}
// 						alt="normal"
// 					/>
// 					<div className="thong_tin">
// 						<p className="description">{product.description}</p>
// 						<p className="sp__cost">${product.price}</p>
// 						<div>
// 							<p className="rate">
// 								<div class="reviews">
// 									<FaStar color="yellow" />
// 									<FaStar color="yellow" />
// 									<FaStar color="yellow" />
// 									<FaStar />
// 								</div>
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			day la muc can chinh sua
// 		</Link>
// 	);
// };

// export default ProductItem;

import React from "react";
import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa"
import {IoIosAdd , IoIosCart} from "react-icons/io"
import "./ProductItem.css"


const ProductItem = ({ product }) => {

	const YesStar = [];
	// console.log(Math.floor(product.ratings));

	for (let i = 0; i < Math.floor(3); i++) {
		YesStar.push(<FaStar color="yellow" />);
	}
	const NoStar =[];
	let noStar = 5 - Math.floor(3)
	for(let i = 0; i<noStar ;i++){
		NoStar.push(<FaStar />);
	}


	const endPointImg =
		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";

	return (
		<Link
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
			to={`/product/${product.id}`}
			className="col-4 m-3 sm-12"
		>

			<div className="pi-product">
				<Link to="#" className="pi-img-prod">
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
						<Link to={""} className="pi-add-cart pi-cho">ADD TO CART<IoIosAdd /></Link>
						<Link to={''} className="pi-buy-now pi-cho">BUY NOW<IoIosCart /></Link>
					</p>
				</div>

			</div>


		</Link>
	)
}

export default ProductItem