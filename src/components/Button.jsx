import React from "react";
import { ImSpinner3 } from "react-icons/im";

const Button = ({ loading = false, title, onClick }) => {
	return (
		<button onClick={onClick} type="submit" className="btn theme-button">
			{loading ? (
				<div className="loading__icon ">
					<span>
						<ImSpinner3 />
					</span>
				</div>
			) : (
				title
			)}
		</button>
	);
};

export default Button;
