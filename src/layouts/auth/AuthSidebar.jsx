import React from "react";
import "./authLayout.css";
import { BsArrowLeft } from "react-icons/bs";
import { RiGroupLine, RiGiftLine, RiProductHuntLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
const AuthSidebar = () => {
	const location = useLocation();
	// console.log("check location: ", location);

	return (
		<div className="authSidebarWrapper">
			<span className="authSidebar__arrow">
				<BsArrowLeft />
			</span>
			<ul className="authSidebar__list">
				<li className="authSidebar__item">
					List User <RiGroupLine />
				</li>
				<Link
					to={"orders"}
					className={`authSidebar__item ${
						location.pathname.includes("orders") ? "on" : "off"
					}`}>
					{" "}
					List Order <RiGiftLine />
				</Link>

				<Link
					to={"products"}
					className={`authSidebar__item ${
						location.pathname.includes("product") ? "on" : "off"
					} `}>
					List Product <RiProductHuntLine />
				</Link>
				<Link
					to={"newProduct"}
					className={`authSidebar__item ${
						location.pathname.includes("newProduct") ? "on" : "off"
					} `}>
					New Product <RiProductHuntLine />
				</Link>
				<li className="authSidebar__item">Statistic</li>
			</ul>
		</div>
	);
};

export default AuthSidebar;
