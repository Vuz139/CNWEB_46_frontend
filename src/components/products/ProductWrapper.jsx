import React from "react";
<<<<<<< HEAD
=======
import "./product.css";
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
import ProductItem from "./ProductItem";
import Loading from "../public/Loading";
const ProductWrapper = ({ products, loading }) => {
	return (
		<div className="grid mt-12">
			{loading ? (
				<Loading />
			) : (
				<>
					{products && products.length > 0 ? (
						<div className="grid__row">
							{products.map((product) => (
								<ProductItem
									product={product}
									key={product.id}
								/>
							))}
						</div>
					) : (
						<h2 style={{ textAlign: "center" }}>
							Không có sản phẩm nào
						</h2>
					)}
				</>
			)}
		</div>
	);
};

export default ProductWrapper;
