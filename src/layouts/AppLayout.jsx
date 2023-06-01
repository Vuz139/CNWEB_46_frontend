<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductConfigs } from "../requests/products.request";
import { setProduct } from "../redux/productSlice";
<<<<<<< HEAD
import Loading from "../components/public/Loading";

const AppLayout = ({ children }) => {
	const [loading, setLoading] = useState(true);
=======

const AppLayout = ({ children }) => {
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetProductConfig = async () => {
			try {
<<<<<<< HEAD
				setLoading(true);
=======
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
				const res = await getProductConfigs();
				if (res.status === "success") {
					dispatch(setProduct(res.data));
				}
			} catch (error) {
				console.log(error);
<<<<<<< HEAD
			} finally {
				setLoading(false);
=======
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
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
<<<<<<< HEAD
				<section className="page">
					{loading ? <Loading /> : children}
				</section>
=======
				<section className="page">{children}</section>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
			</section>
			<Footer />
		</div>
	);
};

export default AppLayout;
