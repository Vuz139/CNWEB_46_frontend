import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductConfigs } from "../requests/products.request";
import { setProduct } from "../redux/productSlice";

const AppLayout = ({ children }) => {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetProductConfig = async () => {
			try {
				const res = await getProductConfigs();
				if (res.status === "success") {
					dispatch(setProduct(res.data));
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetProductConfig();
	}, []);
	return (
		<div className="appLayout">
			<Header />
			<Meta>
				{" "}
				<Link to={"/"}>Home</Link> /{" "}
				<Link to={location.pathname}>{location.pathname.slice(1)}</Link>{" "}
			</Meta>
			<section
				style={{
					minHeight: "90vh",
					maxWidth: "1200px",
					margin: "auto",
				}}
				className="main">
				<section className="page">{children}</section>
			</section>
			<Footer />
		</div>
	);
};

export default AppLayout;
