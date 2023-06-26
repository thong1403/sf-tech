import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const handleClick = () => {
    const navbarMenu = document.getElementById("navbarButtonsExample");
    navbarMenu.classList.toggle("show");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-navbar w-100 ">
        <div className="container">
            <Link to="/sf-tech/">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="16"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto" >
              <li className="nav-item m-4">
                <b>
                  <Link to="/portfolio" className="link">
                    Portfolio
                  </Link>{" "}
                </b>{" "}
              </li>
              <li className="nav-item m-4">
                <b>
                  <Link to="/product" className="link">
                    Products
                  </Link>{" "}
                </b>{" "}
              </li>
              <li className="nav-item m-4">
                <Link to="/company" className="link">
                  <b>Company</b>{" "}
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center" id="btn-contact-us">
              <Link to="/contact-us/">
                <button type="button" class="btn btn-primary me-5 p-3" id="btn-contacts">
                  CONTACT us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
