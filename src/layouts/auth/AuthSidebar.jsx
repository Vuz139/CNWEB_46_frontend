import React from "react";
import "./authLayout.css";
import { BsArrowLeft } from "react-icons/bs";
import { RiGroupLine, RiGiftLine, RiProductHuntLine } from "react-icons/ri";
const AuthSidebar = () => {
	return (
		<div className="authSidebarWrapper">
			<span className="authSidebar__arrow">
				<BsArrowLeft />
			</span>
			<ul className="authSidebar__list">
				<li className="authSidebar__item">
					List User <RiGroupLine />
				</li>
				<li className="authSidebar__item">
					List Order <RiGiftLine />
				</li>
				<li className="authSidebar__item">
					List Product <RiProductHuntLine />
				</li>
				<li className="authSidebar__item">Statistic</li>
			</ul>
		</div>
	);
};

export default AuthSidebar;
