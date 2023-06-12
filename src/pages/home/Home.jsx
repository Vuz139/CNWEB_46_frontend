import React from "react";
import { useNavigate } from 'react-router-dom';
import "./home.css";
import anh from "./chup-anh-giay-dep.jpg";
const Home = () => {
	const navigate = useNavigate();
  	function handleClick() {navigate('/products');}
	return (
		<div>
			<div class="homebg">
				<div class="gioithieu">
					<h1>A CLOTHES Store</h1>
					<p>Buy without lifting a finger</p>
					<button onClick={handleClick}>Shopping now</button>
				</div>
				<div class="best_selling_bg">
					<div class="container1">
						<div class="bs">Best Selling Clothes Ever</div>
						<div class="sp_noibat">
							<div class="sp_wrapper_margin">
								<div class="sp_wrapper" id="sp1">
									<img class="sp_img" src={anh} alt="" />
									<div class="thongtin_sp">
										<h2 class="tensp">Ten San Pham</h2>
										<p class="giatien">5000$</p>
									</div>
								</div>
							</div>
							<div class="sp_wrapper_margin">
								<div class="sp_wrapper" id="sp1">
									<img class="sp_img" src={anh} alt="" />
									<div class="thongtin_sp">
										<h2 class="tensp">Ten San Pham</h2>
										<p class="giatien">5000$</p>
									</div>
								</div>
							</div>
							<div class="sp_wrapper_margin">
								<div class="sp_wrapper" id="sp1">
									<img class="sp_img" src={anh} alt="" />
									<div class="thongtin_sp">
										<h2 class="tensp">Ten San Pham</h2>
										<p class="giatien">5000$</p>
									</div>
								</div>
							</div>
							<div class="sp_wrapper_margin">
								<div class="sp_wrapper" id="sp1">
									<img class="sp_img" src={anh} alt="" />
									<div class="thongtin_sp">
										<h2 class="tensp">Ten San Pham</h2>
										<p class="giatien">5000$</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
