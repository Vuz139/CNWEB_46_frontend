import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductPage = () => {
  return (
    <div>
        <div className="product-page-container">
          <span className="link-route">
            <a href="#">Home</a> &gt; <a href="#">Category 1</a>
          </span>
          <section id="product-page">
            <div className="product-page-img">
              <div className="sketchfab-embed-wrapper"> <iframe title="Robot character RTS01" frameBorder={0} allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1da00b4c9198491ab643f745c60a6b6b/embed"> </iframe> </div>
            </div>
            <div className="product-page-details">
              <strong>New Product Model</strong>
              <span className="product-category">
                Robot
              </span>
              <div className="rating">
                <input type="”radio”" name="”rating”" defaultValue="”5″" id="”5″" /><label htmlFor="”5″">☆</label>
                <input type="”radio”" name="”rating”" defaultValue="”4″" id="”4″" /><label htmlFor="”4″">☆</label>
                <input type="”radio”" name="”rating”" defaultValue="”3″" id="”3″" /><label htmlFor="”3″">☆</label>
                <input type="”radio”" name="”rating”" defaultValue="”2″" id="”2″" /><label htmlFor="”2″">☆</label>
                <input type="”radio”" name="”rating”" defaultValue="”1″" id="”1″" /><label htmlFor="”1″">☆</label>
              </div>
              <span className="price">
                $1500
                <del>$2000</del>
              </span>
              <p className="small-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nostrum aperiam ex ullam ratione dolorem nobis ipsa numquam! Deleniti, fugit nemo. Sit voluptatem iusto hic deleniti eaque laboriosam, rem id.</p>
              <div className="product-options">
                <span>Choose color:</span>
                <div className="product-color-options">
                  <div className="product-color-box">
                    <input type="checkbox" id="blue" defaultValue="blue" />
                    <label htmlFor="blue">
                      <img src="blue.png" />
                    </label>
                  </div>
                  <div className="product-color-box">
                    <input type="checkbox" id="red" defaultValue="red" />
                    <label htmlFor="red">
                      <img src="red.png" />
                    </label>
                  </div>
                  <div className="product-color-box">
                    <input type="checkbox" id="white" defaultValue="white" />
                    <label htmlFor="white">
                      <img src="white.png" />
                    </label>
                  </div>
                </div>
              </div>
              <span className="product-offer"><i className="fa-solid fa-tag" />25% Discount</span>
              <div className="cart-btns">
                <a href="#" className="add-cart">Add to Cart</a>
                <a href="#" className="add-cart buy-now">Buy Now</a>
              </div>
              <div className="price-shipping">
                <strong>$20 <span> + $1 Shipping</span></strong>
              </div>
            </div>
          </section>
        </div>
        <div className="comments-container">
          <section id="testimonials">
            <div className="testimonial-box-container">
              <div className="testimonial-box">
                <div className="box-top">
                  <div className="profile">
                    <div className="profile-image">
                      <img src="#" />
                    </div>
                    <div className="name-user">
                      <strong>Me</strong>
                      <span>@me</span>
                    </div>
                  </div>
                  <div className="reviews">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                </div>
                <div className="comment">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque rerum temporibus dolorum, similique accusamus aspernatur, esse architecto nesciunt recusandae deleniti quod. Laboriosam quam eius cupiditate quia aut dolores reprehenderit.</p>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="box-top">
                  <div className="profile">
                    <div className="profile-image">
                      <img src="#" />
                    </div>
                    <div className="name-user">
                      <strong>Me</strong>
                      <span>@me</span>
                    </div>
                  </div>
                  <div className="reviews">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                </div>
                <div className="comment">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque rerum temporibus dolorum, similique accusamus aspernatur, esse architecto nesciunt recusandae deleniti quod. Laboriosam quam eius cupiditate quia aut dolores reprehenderit.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default ProductPage