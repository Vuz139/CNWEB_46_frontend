import React from "react";
import "./product.css";
import ProductItem from "./ProductItem";
const ProductWrapper = () => {
	return (
		<div className="grid">
			<div className="grid__row">
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</div>
	);
};

export default ProductWrapper;
