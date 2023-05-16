import React, { useState } from "react";
import "./style.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import png from "./sign.png";
import { login } from "../../../requests/users.request";

function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const navigate = useNavigate();
	const handleFormChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		console.log(formData);
		const result = await login(formData);

		if (result.success) {
			navigate("/", { replace: true });
		}
	};

	return (
		<section className="w3l-hotair-form">
			<h1>Group 46</h1>
			<div className="container">
				<div className="workinghny-form-grid">
					<div className="main-hotair">
						<div className="content-wthree">
							<h2>Log In</h2>
							<form>
								<input
									type="email"
									className="text"
									name="email"
									value={formData.email}
									onChange={handleFormChange}
									placeholder="Your email"
									required
									autoFocus
								/>
								<input
									type="password"
									className="password"
									value={formData.password}
									onChange={handleFormChange}
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
								<button
									onClick={handleSubmit}
									className="btn"
									type="submit">
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
