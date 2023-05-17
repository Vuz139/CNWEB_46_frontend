import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { createUser } from "../../../requests/users.request";
import { setAccessToken } from "../../../utils/storage.util";
import Button from "../../../components/Button";
function SignUp() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (formData.password != formData.confirmPassword) {
			return;
		}
		formData.role = "user";
		try {
			setLoading(true);
			const result = await createUser(formData).then((res) => res);
			if (result.success) {
				setAccessToken(result.token);
			}
		} catch (error) {
			alert("Đăng kí không thành công");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w3l-form-36">
			<div className="form-36-mian section-gap">
				<div className="wrapper">
					<div className="form-inner-cont">
						<h3>Create your account</h3>
						<form onSubmit={handleSubmit} className="signin-form">
							<div className="form-input">
								<span
									className="fa fa-user-o"
									aria-hidden="true"></span>{" "}
								<input
									type="text"
									name="name"
									placeholder="Username"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-input">
								<span
									className="fa fa-envelope-o"
									aria-hidden="true"></span>{" "}
								<input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-input">
								<span
									className="fa fa-key"
									aria-hidden="true"></span>
								<input
									type="password"
									name="password"
									placeholder="Password"
									value={formData.password}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-input">
								<span
									className="fa fa-key"
									aria-hidden="true"></span>{" "}
								<input
									type="password"
									name="confirmPassword"
									placeholder="Confirm Password"
									value={formData.confirmPassword}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="login-remember d-grid">
								<Button
									onClick={(e) => handleSubmit(e)}
									title={"Sign Up"}
									loading={loading}
								/>
							</div>
						</form>
						{/* <div className="social-icons">
							<p className="continue">
								<span>Or</span>
							</p>
							{/* <div className="social-login">
								<a href="#facebook">
									<div className="facebook">
										<span
											className="fa fa-facebook"
											aria-hidden="true">
											Fb
										</span>
									</div>
								</a>
								<a href="#google">
									<div className="google">
										<span
											className="fa fa-google-plus"
											aria-hidden="true">
											G
										</span>
									</div>
								</a>
							</div> */}
						{/* </div> */}
						<p className="signup">
							Already a member?{" "}
							<Link to="/login" className="signuplink">
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignUp;
