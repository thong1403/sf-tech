import React from "react";
import img1 from "../../image/download (5).jpg";
import imgProject1 from "../../image/download (2).jpg";
import imgFooterProject from "../../image/download (6).jpg";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <img src={img1} alt="" className="w-100" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              <div className="col-4 mb-5">
                <img src={imgProject1} alt="" className="w-100" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere soluta vero voluptatibus eveniet amet beatae totam
                  veritatis repudiandae provident possimus.
                </p>
              </div>
              <div className="col-4">
                <img src={imgProject1} alt="" className="w-100" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere soluta vero voluptatibus eveniet amet beatae totam
                  veritatis repudiandae provident possimus.
                </p>
              </div>
              <div className="col-4">
                <img src={imgProject1} alt="" className="w-100" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere soluta vero voluptatibus eveniet amet beatae totam
                  veritatis repudiandae provident possimus.
                </p>
              </div>
              <div className="col-4">
                <img src={imgProject1} alt="" className="w-100" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere soluta vero voluptatibus eveniet amet beatae totam
                  veritatis repudiandae provident possimus.
                </p>
              </div>
              <div className="col-4">
                <img src={imgProject1} alt="" className="w-100" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere soluta vero voluptatibus eveniet amet beatae totam
                  veritatis repudiandae provident possimus.
                </p>
              </div>
              <div className="col-4">
                <img src={imgProject1} alt="" className="w-100" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere soluta vero voluptatibus eveniet amet beatae totam
                  veritatis repudiandae provident possimus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="mt-5 container-tell-project">
        <img src={imgFooterProject} alt="" className="img-footer-btn-project" />
        <div className="tell-project-title">
          <h1 className="fs-1">TELL US ABOUT YOUR PROJECT</h1>
          <button className="mt-3">Contact Now</button>
        </div>
      </div>
    </>
  );
}
