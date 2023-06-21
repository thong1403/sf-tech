import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              <div className="col-3 footer-title-container">
                <h5 className="mb-3">Servies</h5>
                <p>Business Technology Consulting</p>
                <p>Software Development</p>
                <p>New Technologies</p>
                <p>Maintenance and Support</p>
              </div>
              <div className="col-3 footer-title-container">
                <h5 className="mb-3">Industries</h5>
                <p>BFSI (Bank, Finance, Insurance)</p>
                <p>Healthcare</p>
                <p>Travel/ Logistic</p>
                <p>Ecommerce</p>
                <p>Social</p>
                <p>Business Process Application</p>
              </div>
              <div className="col-3 footer-title-container">
                <h5 className="mb-3">Products</h5>
                <p>enKomm</p>
                <p>KoniaLMS</p>
                <p>DentalFlow</p>
                <p>Zoro Bike</p>
                <p>iLUTon</p>
                <p>Shopify Solutions</p>
              </div>
              <div className="col-3 footer-title-container">
                <h5 className="mb-3">Company</h5>
                <p>About</p>
                <p>Career</p>
                <p>Portfolio</p>
                <p>Blog</p>
                <p>Privacy Statement</p>
              </div>
            </div>
            <div className="row mt-5 container-footer-logo">
              <div className="col-12 d-flex justify-content-between">
                <h4 className="m-2">SF - Technologies</h4>
                <div>
                  <i class="fa-brands fa-facebook fs-2 m-2"></i>
                  <i class="fa-brands fa-instagram fs-2 m-2"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
