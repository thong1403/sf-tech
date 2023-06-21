import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light container-navbar w-100 ">
        <div class="container">
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li class="nav-item m-4"><b>Services</b> </li>
              <li class="nav-item m-4"><b>Industries</b> </li>
              <li class="nav-item m-4"><b>Portfolio</b> </li>
              <li class="nav-item m-4"><b>Products</b> </li>
              <li class="nav-item m-4"><b>Company</b> </li>
              <li class="nav-item m-4"><b>Insight</b> </li>
            </ul>

            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-primary me-5 p-3">
                CONTACT us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
