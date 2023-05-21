import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
	return (
		<div className="appLayout">
			<Header />
			<header className="sidebar">
				<Sidebar />
			</header>
			<section style={{ height: "90vh" }} className="main">
				<section className="page">{children}</section>
			</section>
			<Footer />
		</div>
	);
};

export default AppLayout;
