import React from "react";
import "./home.css";
import anh from "./chup-anh-giay-dep.jpg";
const Home = () => {
	return (
		<div>
			<div class="homebg">
				<button id="bt_mua">Shopping now</button>
				<div class="sp_noibat">
					<div class="sp_wrapper" id="sp1">
						<img class="sp_img" src={anh} alt="" />
						<div class="thongtin_sp">
							<h2 class="tensp">Ten San Pham</h2>
							<p class="giatien">5000$</p>
						</div>
					</div>
					<div class="sp_wrapper" id="sp2">
						<img class="sp_img" src={anh} alt="" />
						<div class="thongtin_sp">
							<h2 class="tensp">Ten San Pham</h2>
							<p class="giatien">5000$</p>
						</div>
					</div>
					<div class="sp_wrapper" id="sp3">
						<img class="sp_img" src={anh} alt="" />
						<div class="thongtin_sp">
							<h2 class="tensp">Ten San Pham</h2>
							<p class="giatien">5000$</p>
						</div>
					</div>
					<div class="sp_wrapper" id="sp4">
						<img class="sp_img" src={anh} alt="" />
						<div class="thongtin_sp">
							<h2 class="tensp">Ten San Pham</h2>
							<p class="giatien">5000$</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;