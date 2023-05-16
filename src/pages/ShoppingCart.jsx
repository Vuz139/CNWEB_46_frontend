import React from "react";
import "../assets/CSS/cart.css";
import CartItem from "../components/CartItem";
const ShoppingCart = () => {
	return (
		<div class="cartWrapper">
			<h1 className="cartTitle">Your Cart</h1>
			<div class="cart-row">
				<span class="cart-item cart-header cart-column">Sản Phẩm</span>
				<span class="cart-price cart-header cart-column">Giá</span>
				<span class="cart-quantity cart-header cart-column">
					Số Lượng
				</span>
			</div>
			<div class="cart-items">
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<div class="cart-total">
					<strong class="cart-total-title">Tổng Cộng:</strong>
					<span class="cart-total-price">Chưa tính</span>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
