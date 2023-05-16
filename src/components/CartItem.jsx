import React from "react";
import "../assets/CSS/cart.css";
const CartItem = () => {
	return (
		<div class="cart-row">
			<div class="cart-item cart-column">
				<img
					class="cart-item-image"
					src="https://img.freepik.com/free-vector/vintage-robot-toy-white-background_1308-77501.jpg?w=360&t=st=1683087742~exp=1683088342~hmac=29a38544b84c0ae925119fbc17465675e3406e5d18a00778c756b2f44653f32a"
					width="100"
					height="100"
				/>
				<span class="cart-item-title">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quasi aut quod optio a eum, quos vitae excepturi ea
					laboriosam tempore ad rerum perspiciatis assumenda pariatur.
					Illo culpa sunt cupiditate labore.
				</span>
			</div>
			<span class="cart-price cart-column">$2500</span>
			<div class="cart-quantity cart-column">
				<input class="cart-quantity-input" type="number" value="1" />
				<button class="btn btn-danger" type="button">
					Xóa
				</button>
			</div>
		</div>
	);
};

export default CartItem;
