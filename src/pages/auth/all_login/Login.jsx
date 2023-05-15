import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import png from "./sign.png";

function Login() {
	return (
		<section className="w3l-hotair-form">
			<h1>Group 46</h1>
			<div className="container">
				<div className="workinghny-form-grid">
					<div className="main-hotair">
						<div className="content-wthree">
							<h2>Log In</h2>
							<form action="" method="post">
								<input
									type="text"
									className="text"
									name="text"
									placeholder="User Name"
									required
									autoFocus
								/>
								<input
									type="password"
									className="password"
									name="password"
									placeholder="User Password"
									required
									autoFocus
								/>
								<label className="check-remaind">
									<input type="checkbox" />
									<span className="checkmark"></span>
									<p className="remember">Remember me</p>
								</label>
								<br />
								<button className="btn" type="submit">
									Log In
								</button>
							</form>
							<p className="account">
								Don't have an account?{" "}
								<Link to={"/signup"}>Register</Link>
							</p>
						</div>
						<div className="w3l_form align-self">
							<div className="left_grid_info">
								<img src={png} className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
