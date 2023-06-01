import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
	const endPointImg =
		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";

	return (
<<<<<<< HEAD
		<Link
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
			to={`/product/${product.id}`}
			className="col-4 m-3 sm-12">
=======
		<Link to={`/product/${product.id}`} className="col-4 m-3 sm-12">
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
			<div className="productContainer">
				<div className="sp">
					<img
						className="anhSp"
						src={
							product?.images && product.images.length > 0
								? `${endPointImg}/${product.images[0].path}`
								: ""
						}
						alt="normal"
					/>
					<div className="thong_tin">
						<p className="description">{product.description}</p>
						<p className="sp__cost">${product.price}</p>
						<div>
							<p className="rate">
								<div class="reviews">
									<FaStar color="yellow" />
									<FaStar color="yellow" />
									<FaStar color="yellow" />
									<FaStar />
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
