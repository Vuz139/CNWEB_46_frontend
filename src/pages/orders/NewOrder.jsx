import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { orderStatus } from "../../contrainst/orderStatus";
import { createOrder } from "../../requests/orders.request";
import "./OrderStyle.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { locals } from "../../utils/vietnamlocalselector";
const NewOrder = () => {
	const [districts, setDistricts] = useState([]);
	const [communes, setCommunes] = useState([]);
	const cart = useSelector((state) => state.cart);
	const [shippingInfo, setShippingInfo] = useState({
		address: "155 Tấy Sơn",
		district: "",
		commune: "",
		phoneNo: "012345656",
		city: "Hà Nội",
		country: "Việt Nam",
		postalCode: "402",
	});
	const itemsPrice = useMemo(
		() =>
			cart.reduce((curr, value) => curr + value.price * value.amount, 0),
		[cart],
	);
	const taxPrice = useMemo(() => 0.05 * itemsPrice, []);
	const totalPrice = itemsPrice + taxPrice;
	// const [order, setOrder] = useState({
	// 	taxPrice,
	// 	totalPrice,
	// 	shippingPrice: 15,
	// });

	const makeOrder = async () => {
		const orderPost = {
			shippingInfo,
			orderStatus: orderStatus[0],
			itemsOrder: cart,
			taxPrice,
			itemsPrice,
			totalPrice,
			shippingPrice: 15,
		};
		try {
			const res = await createOrder(orderPost);
			console.log("res:", res);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCityChange = (e) => {
		setShippingInfo((prev) => ({
			...prev,
			city: e.target.value,
			address: "",
			district: "",
			commune: "",
		}));
		const districts =
			locals[locals.findIndex((value) => value.n === e.target.value)];

		setDistricts(districts.c);
	};

	const handleDistrictChange = (e) => {
		setShippingInfo((prev) => ({
			...prev,
			district: e.target.value,
			commune: "",
		}));
		const communes =
			districts[
				districts.findIndex((value) => value.n === e.target.value)
			];
		setCommunes(communes.c);
	};
	const handleCommuneChange = (e) => {
		setShippingInfo((prev) => ({
			...prev,
			commune: e.target.value,
			postalCode:
				communes[communes.findIndex((c) => c.n === e.target.value)].i,
		}));
	};

	const handleAddressChange = (e) => {
		setShippingInfo((prev) => ({
			...prev,
			address: `${e.target.value}, ${prev.commune}, ${prev.district}`,
		}));
	};

	const handleClickCreate = async (e) => {
		e.preventDefault();
		if (cart.length < 1) {
			alert("Vui lòng thêm sản phẩm muốn mua");
			return;
		}
		await makeOrder();
	};

	return (
		<div class="checkout__container">
			<form class="information-container">
				<div class="checkout__form">
					<strong>Địa chỉ giao hàng</strong>
					<select id="country" name="country" class="form-control">
						<option value="Việt Nam">Việt Nam</option>
					</select>
					<div class="address-form">
						<select
							name="city"
							value={shippingInfo.city}
							onChange={handleCityChange}>
							<option value="">Thành phố/Tỉnh</option>
							{locals.map((value) => (
								<option value={value.n}>{value.n} </option>
							))}
						</select>
						<select
							value={shippingInfo.district}
							onChange={handleDistrictChange}>
							<option value="">Quận/Huyện</option>
							{districts.map((value) => (
								<option value={value.n}>{value.n} </option>
							))}
						</select>
						<select
							value={shippingInfo.commune}
							onChange={handleCommuneChange}>
							<option value="">Phường/Xã</option>
							{communes.map((value) => (
								<option value={value.n}>{value.n}</option>
							))}
						</select>
					</div>
					<div class="form__input">
						<input
							type="text"
							name="address"
							placeholder="Số nhà"
							onChange={handleAddressChange}
						/>
					</div>
					<div class="form__input">
						<input
							type="text"
							name="phoneNo"
							placeholder="Số điện thoại"
							pattern="[0-9]*"
							inputmode="numeric"
						/>
					</div>
				</div>
			</form>

			<div class="product-container">
				<h2>Sản phẩm</h2>

				<div class="product-info">
					<div class="product-image">
						<img src="./123.jpg" class="product-img" />
						<div class="product-number">
							<strong>1</strong>
						</div>
					</div>
					<div class="product-name">
						<div>
							<strong>abacs</strong>
							<div>s/ewacv</div>
						</div>
					</div>
					<strong class="checkout__product__price">$100</strong>
				</div>
				<div class="product-info">
					<div class="product-image">
						<img src="./123.jpg" class="product-img" />
						<div class="product-number">
							<strong>1</strong>
						</div>
					</div>
					<div class="product-name">
						<div>
							<strong>abacs</strong>
							<div>s/ewacv</div>
						</div>
					</div>
					<strong class="checkout__product__price">$100</strong>
				</div>
				<div class="product-info">
					<div class="product-image">
						<img src="./123.jpg" class="product-img" />
						<div class="product-number">
							<strong>1</strong>
						</div>
					</div>
					<div class="product-name">
						<div>
							<strong>abacs</strong>
							<div>s/ewacv</div>
						</div>
					</div>
					<strong class="checkout__product__price">$100</strong>
				</div>
				<div class="product-info">
					<div class="product-image">
						<img src="./123.jpg" class="product-img" />
						<div class="product-number">
							<strong>1</strong>
						</div>
					</div>
					<div class="product-name">
						<div>
							<strong>abacs</strong>
							<div>s/ewacv</div>
						</div>
					</div>
					<strong class="checkout__product__price">$100</strong>
				</div>
				<div class="middle-info">
					<div class="checkout__subtotal">
						<div>Giá</div>
						<div>${itemsPrice}</div>
					</div>
					<div class="shipping">
						<div>Vận chuyển</div>
						<div>${15}</div>
					</div>
					<div class="shipping">
						<div>VAT: 5%</div>
						<div>${taxPrice}</div>
					</div>
				</div>
				<div class="total">
					<strong>Total</strong>
					<strong>${totalPrice}</strong>
				</div>
				<div class="button-container">
					<div class="return-button">
						<ImArrowLeft />
						<Link to={"/cart"}>Quay lại giỏ hàng</Link>
					</div>

					<Button>Đặt hàng</Button>
				</div>
			</div>
		</div>
	);
};

export default NewOrder;
