import React from "react";
import { ImSpinner3 } from "react-icons/im";

const Button = ({
	loading = false,
	title,
	onClick,
	type = "primary",
	children,
}) => {
	return (
		<button
			onClick={onClick}
			type="submit"
			className={`btn ${type} theme-button`}>
			{loading ? (
				<div className="loading__icon ">
					<span>
						<ImSpinner3 />
					</span>
				</div>
			) : (
				title || children
			)}
		</button>
	);
};

export default Button;
