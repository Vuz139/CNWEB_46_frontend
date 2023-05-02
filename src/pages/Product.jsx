import React from "react";
import "../product_details_page/style.css";
const Product = () => {
	return (
		<div class="product-page-container">
			<span class="link-route">
				<a href="#">Home</a> {">"} <a href="#">Category 1</a>
			</span>

			<section id="product-page">
				<div class="product-page-img">
					<div class="sketchfab-embed-wrapper">
						{" "}
						<iframe
							title="Robot character RTS01"
							frameborder="0"
							allowfullscreen
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
							allow="autoplay; fullscreen; xr-spatial-tracking"
							xr-spatial-tracking
							execution-while-out-of-viewport
							execution-while-not-rendered
							web-share
							src="https://sketchfab.com/models/1da00b4c9198491ab643f745c60a6b6b/embed">
							{" "}
						</iframe>{" "}
					</div>
				</div>
				<div class="product-page-details">
					<strong>New Product Model</strong>
					<span class="product-category">Robot</span>
					<span class="price">$1500</span>
				</div>
			</section>
		</div>
	);
};

export default Product;
