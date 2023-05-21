import React, { Component } from "react";
import "./style.css";

var Comment = React.createClass({
    render: function() {
      return (
  
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
        </div>
      );
    }
  });