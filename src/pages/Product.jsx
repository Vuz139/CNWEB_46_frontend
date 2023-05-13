import React from "react";
import "../product_details_page/style.css";
import Comment from "../components/Comment";
const Product = () => {
	const product = {
		name: "Robot",
		price: 1500,
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing=elit. Optio nostrum aperiam ex ullam ratione doloremnobis ipsa numquam! Deleniti, fugit nemo. Sit voluptatemiusto hic deleniti eaque laboriosam, rem id.",
		shippingPrice: 20,
		image: "data:image/jpeg;base64,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",
	};

	return (
		<div class="product-page-container">
			<span class="link-route">
				<a href="#">Home</a> {">"}
				<span href="#">Product</span>
			</span>

			<section id="product-page">
				<div class="product-page-img">
					<div class="sketchfab-embed-wrapper">
						<img
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
							src={product.image}
							alt=""
						/>
					</div>
				</div>
				<div class="product-page-details">
					<strong>New Product Model</strong>
					<span class="product-category">Robot</span>
					<span class="price">
						${product.price}
						<del>$2000</del>
					</span>
					<p class="small-description">{product.description}</p>
					<div class="product-options">
						<span>Choose color:</span>
						<div class="product-color-options">
							<div class="product-color-box">
								<input type="checkbox" id="blue" value="blue" />
								<label for="blue">
									<div
										style={{
											height: "20px",
											width: "20px",
											backgroundColor: "blue",
										}}></div>
								</label>
							</div>
							<div class="product-color-box">
								<input type="checkbox" id="red" value="red" />
								<label for="red">
									<div
										style={{
											height: "20px",
											width: "20px",
											backgroundColor: "red",
										}}></div>
								</label>
							</div>
							<div class="product-color-box">
								<input
									type="checkbox"
									id="white"
									value="white"
								/>
								<label for="white">
									<div
										style={{
											height: "20px",
											width: "20px",
											backgroundColor: "green",
										}}></div>
								</label>
							</div>
						</div>
					</div>
					<span class="product-offer">
						<i class="fa-solid fa-tag"></i>25% Discount
					</span>
					<div class="cart-btns">
						<span href="#" class="add-cart">
							Add to Cart
						</span>
						<span href="#" class="add-cart buy-now">
							Buy Now
						</span>
					</div>
					<div class="price-shipping">
						<strong>
							${product.shippingPrice} <span> + $1 Shipping</span>
						</strong>
					</div>
				</div>
			</section>
			<h1 style={{}}>Đánh giá: </h1>
			<div
				className="comments_wrapper"
				style={{
					marginTop: "8px",
					height: "400px",
					overflow: "auto",
					backgroundColor: "#c8dfec",
					border: "2px solid gray",
					borderRadius: "10px",
				}}>
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</div>
		</div>
	);
};

export default Product;
