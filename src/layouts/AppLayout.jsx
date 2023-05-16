import React from "react";
import Sidebar from "../components/Sidebar";

const AppLayout = ({ children }) => {
	return (
		<div className="appLayout">
			<header className="sidebar">
				<Sidebar />
			</header>
			<section className="main">
				<section className="page">{children}</section>
			</section>
		</div>
	);
};

export default AppLayout;
