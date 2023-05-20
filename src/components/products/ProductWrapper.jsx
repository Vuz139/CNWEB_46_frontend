import React from "react";
import "./product.css";
import ProductItem from "./ProductItem";
const ProductWrapper = ({ products }) => {
	return (
		<div className="grid">
			{products && products.length > 0 ? (
				<div className="grid__row">
					{products.map((product) => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			) : (
				<h2>Không có sản phẩm nào</h2>
			)}
		</div>
	);
};

export default ProductWrapper;
