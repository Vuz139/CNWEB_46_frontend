import './style.css';
import React from 'react';

function Signup(){
    return (
        // <div>
        //     <h1>Signup</h1>
        // </div>
    <div className="wrapper">
      <h1 className="header-w3ls">Astronauts sign up & login Form</h1>
      <div className="art-bothside">
        <div className="mid-cls">
          <div className="art-right-w3ls">
            <h2>Astronauts sign up and login</h2>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet</p>
            <form action="#" method="post">
              <div className="main">
                <div className="form-left-to-w3l">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="form-right-w3ls">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
              </div>
              <div className="main">
                <div className="form-left-to-w3l">
                  <input type="password" name="password" placeholder="Password" id="password" required />
                  <div className="clear" />
                </div>
                <div className="form-right-w3ls ">
                  <input type="password" placeholder="Confirm Password" id="confirm_password" required />
                </div>
              </div>
              <div className="btnn">
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <div className="banner-agileits-btm">
              <div className="w3layouts_more-buttn">
                <h3>
                  Already have an account..?{' '}
                  <a href="#small-dialog1" className="play-icon popup-with-zoom-anim">
                    login
                  </a>
                </h3>
              </div>
              <div id="small-dialog1" className="mfp-hide w3ls_small_dialog wthree_pop">
                <div className="agileits_modal_body">
                  {/* login form */}
                  <div className="letter-w3ls">
                    <form action="#" method="post">
                      <div className="form-left-to-w3l">
                        <input type="text" name="name" placeholder="Name" required />
                      </div>
                      <div className="form-right-w3ls">
                        <input type="email" name="email" placeholder="Email" required />
                      </div>
                      <div className="form-right-w3ls ">
                        <input type="password" name="password" placeholder="Password" required />
                      </div>
                      <div className="btnn">
                        <button type="submit">LOGIN</button>
                        <br />
                      </div>
                    </form>
                    <div className="clear" />
                  </div>
                  {/* //login form */}
                </div>
              </div>
            </div>
          </div>
          <div className="art-left-w3ls">
            <img src="images/right1.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          &copy;2018 Astronauts sign up & login Form. All Rights Reserved | Design by{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            W3Layouts
          </a>
        </p>
      </div>
    </div>
    )
}

export default Signup;


