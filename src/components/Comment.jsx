import React from "react";
import { FaStar } from "react-icons/fa";
const Comment = () => {
	return (
		<div class="comments-container">
			<section id="testimonials">
				<div class="testimonial-box-container">
					<div class="testimonial-box">
						<div class="box-top">
							<div class="profile">
								<div class="profile-image">
									<img src="#" />
								</div>
								<div class="name-user">
									<strong>Me</strong>
									<span>@me</span>
								</div>
							</div>
							<div class="reviews">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</div>
						<div class="comment">
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quisquam, doloremque rerum
								temporibus dolorum, similique accusamus
								aspernatur, esse architecto nesciunt recusandae
								deleniti quod. Laboriosam quam eius cupiditate
								quia aut dolores reprehenderit.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Comment;
