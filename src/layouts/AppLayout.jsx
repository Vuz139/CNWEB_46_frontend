import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { useLocation } from "react-router";

const AppLayout = ({ children }) => {
	const location = useLocation();
	// console.log(">>>check location: ", location);
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
