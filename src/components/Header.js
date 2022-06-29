import React from "react";
import "./index.css";
const header = () => {
  return (
    <div>
      <header className="header position-fixed top-0 start-0" style={{ display: "Block" }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="google.com">
              <i
                className="fa fa-plane"
                style={{ fontSize: "36px", color: 'Navy', opacity: "2" }}
              >
                <span className="Blink" style={{ color: "black" }}>
                  ......
                </span>
              </i>
              <p
                className="fs-1"
                style={{ color: "Indigo", fontFamily: 'Trirong , serif', opacity: 2 }}
              >
                <b>WONDER_TOUR</b>
              </p>
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav m-auto me-auto mb-2 mb-lg-0"
                style={{ fontSize: 20 }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link active text-danger fw-bold"
                    aria-current="page"
                    href="google.com"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link text-danger fw-bold" href="google.com">
                    About Us
                  </a>
                </li>
                <li
                  className="nav-item "
                  style={{ marginRight: 150, color: "white" }}
                >
                  <a
                    className="nav-link active text-danger fw-bold"
                    href="google.com"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="nav-item ms-5">
                  <button className=" btn btn-warning">
                    <a
                      className="nav-link active fw-bolder"
                      href="google.com"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Login
                    </a>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-warning">
                    <a
                      className="nav-link active fw-bolder"
                      target="_blank"
                      href="./registrationPage.html"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Sign_Up
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default header;
