import React from 'react';
import './index.scss';
import Logo from '../../assets/images/logo_ottr.jpeg'

const Testimonial = () => {
    return (
      <div className="testimonial-page-container">
        <div className="background"></div>
        <div className="content-box">
          <div className="testimonial-details-container">
            <div className="testimonial-details">
                <h1 className="organization-name">Organization Name</h1>
                <p className="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Hello this is just a sample text. I would like to see if this text wraps to the next line or keeps going on the same line.
                </p>
                <div className="person-details">
                    <div className="person-avatar"></div>
                    <div className="social-icons">
                        <a href="linkedin-url"><i className="fab fa-linkedin"></i></a>
                        <a href="instagram-url"><i className="fab fa-instagram"></i></a>
                        <a href="facebook-url"><i className="fab fa-facebook"></i></a>
                        <a href="github-url"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
          </div>
          <div className="organization-image">
            <a id="im" href="organization-website-url">
                <img src={Logo} alt="Organization" />
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Testimonial