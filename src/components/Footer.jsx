import React from "react";
import "./index.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="foo_section1">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span>
                <i className="fa fa-phone" style={{ fontSize: "24px" }}></i>{" "}
              </span>
              <p>+91 99999 88888</p>
            </li>
            <li>
              <i className="fa fa-envelope" style={{ fontSize: "24px" }}></i>
              <p>wonder_tour@mail.com</p>
            </li>
            <li>
              <i className="fa fa-telegram" style={{ fontSize: "24px" }}></i>
              <p>
                {" "}
                hyderabad telangana,<br></br>500010
              </p>
            </li>
          </ul>
        </div>
        <div className="foo_section2">
          <h2>POPULAR NEWS</h2>
          <ul>
            <li>Your Personal Guide to 5 Best</li>
            <li>Places to Visit on Earth</li>
            <li>
              <time datetime="2019-05-04">May 04, 2019</time>
            </li>
            <br></br>
            <li>Top 10 Hotels: Rating by</li>
            <li>Wonder Tour Travel Experts</li>
            <li>
              <time datetime="2019-05-04">May 04, 2019</time>
            </li>
          </ul>
        </div>
        <div className="foo_section3">
          <h2>Quick Links</h2>
          <ul>
            <a href="google.com">
              <li>About us</li>
            </a>
            <a href="google.com">
              <li>Our team</li>
            </a>
            <a href="google.com">
              <li>Our tours</li>
            </a>
          </ul>

          <div>
            <button>Get In Touch</button>
          </div>
        </div>
      </footer>
      <div className="foo2">
        <div>
          © 2022 Wonder Tour. All Rights Reserved. Design by <br></br> Medhini
          Aravind Reddy
        </div>
        <div className="c_icon">
          <span className="f_book">
            <a href="google.com">
              <i
                className="fa fa-facebook-square"
                style={{ fontSize: "24px" }}
              ></i>
            </a>
          </span>
          <span className="mail">
            <a href="google.com">
              <i className="fa fa-envelope" style={{ fontSize: "24px" }}></i>
            </a>
          </span>
          <span className="tweet">
            <a href="google.com">
              <i
                className="fa fa-twitter-square"
                style={{ fontSize: "24px" }}
              ></i>
            </a>
          </span>
          <span className="insta">
            <a href="google.com">
              <i className="fab fa-instagram" style={{ fontSize: "24px" }}></i>
            </a>
          </span>
        </div>
        <div className="polocy">Privacy Polocy</div>
      </div>
    </div>
  );
};

export default Footer;
