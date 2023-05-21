import React, { useEffect, useState } from "react";
import { BsCart4, BsSearch } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import { logout } from "../redux/userSlice";

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [searchInput, setSearchInput] = useState("");
	const endPointImage =
		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleSearchInputChange = (e) => {
		setSearchInput(e.target.value);
	};
	const handleSearchSummit = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			// Search -- todo
		}
	};
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		console.log(">>>check user: ", user);
	};

	return (
		<div className="header">
			<Link to={"/"} className="header__logo">
				<img
					src="data:image/png;base64,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"
					alt="LOGO"
				/>
				{width > 786 && <span className="header__name">Nhóm 46</span>}
			</Link>
			<div className="header__search">
				<input
					type="text"
					className="header__search__input"
					placeholder="Tìm kiếm"
					value={searchInput}
					onChange={handleSearchInputChange}
					onKeyDown={handleSearchSummit}
				/>
				<span
					onClick={handleSearchSummit}
					className="header__search__icon">
					<BsSearch />
				</span>
			</div>
			{width > 786 && (
				<div className="header__navigation">
					<Link to={"/"}>Home</Link>
					<Link to={"/products"}>Products</Link>
					{/* <a href="#">About</a>
					<a href="#">Me</a> */}
				</div>
			)}
			<div className="header__icons">
				<Link to={"/cart"} className="header__cart header__icon">
					<BsCart4 />
					<span className="header__cart__amount">6</span>
				</Link>
				<span className="header__user header__icon">
					{user && user.id ? (
						<img
							style={{
								width: "100%",
								height: "100%",
								borderRadius: "50%",
							}}
							src={
								`${endPointImage}/${user.avatar}` ||
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-BH0rwTlqY-_4BGCB_EYWt0vkOJkI8aBDQ&usqp=CAU"
							}
						/>
					) : (
						<HiOutlineUserCircle />
					)}

					<div className="header__user__menu">
						<a href="#">User</a>
						<Link to={"/admin/newProduct"}>New Product</Link>
						{width <= 786 && (
							<>
								<Link to={"/"}>Home</Link>
								<Link to={"/products"}>Products</Link>
								{/* <a href="#">About</a>
								<a href="#">Me</a> */}
							</>
						)}

						{user && user.id ? (
							<a onClick={handleLogout}>Logout</a>
						) : (
							<Link to={"/login"}>Login</Link>
						)}
					</div>
				</span>
			</div>
		</div>
	);
};

export default Header;
