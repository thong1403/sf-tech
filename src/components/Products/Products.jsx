import React from "react";
import "./Products.css";
import imagebackgroud from "../../image/344572211_610850051101753_648459733799646473_n.jpg";
import imageContent from "../../image/download (1).jpg";
import img2 from "../../image/download (2).jpg";
import img3 from "../../image/download (3).jpg";
import img4 from "../../image/download (4).jpg";

export default function Products() {
  return (
    <>
      <div className="container-image-backgroud ">
        <img src={imagebackgroud} alt="" className="w-100" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className=" m-5 fs-5 text-center">
              <p>
                NTQ’s R&D Department was founded in 2015 with a great passion
                for pursuing new technology & creating better solutions. Our
                talented engineers always strive for new & brighter ways to do
                old things.
                <br />
                Just like other incubators, NTQ desires to nurture new ideas and
                is constantly seeking a way to turn them into reality. That’s
                why, we are still looking for partners for JV, in order to
                develop and launch our present & future solutions.
              </p>
            </div>
            <div className="image-button-contacts-us">
              <img src={imageContent} alt="" className="w-100 " />
              <div className="title-btn-contac-us">
                <h1>
                  FOR ANY PARTNERSHIP PROPOSAL, <br /> FEEL FREE TO CONTACT US.
                </h1>
                <button className="mt-2">CONTACT us</button>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              <div className="col-6">
                <img src={img3} alt="" className="w-100" />
              </div>
              <div className="col-6">
                <h2>
                  <b>iLUTon - PC ScreenLocker</b>
                </h2>
                <p className="fs-5">
                  iLUTon is a collaborative product of EZDefence and NTQ to
                  prevent data leakage. Integrated with computers, our smart
                  devices can identify users' RFID cards to lock or unlock their
                  Windows accounts automatically. iLUTon shall minimize the risk
                  of information leakage and record actual working time
                  accurately.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <h2>
                  <b>iLUTon - PC ScreenLocker</b>
                </h2>
                <p className="fs-5">
                  iLUTon is a collaborative product of EZDefence and NTQ to
                  prevent data leakage. Integrated with computers, our smart
                  devices can identify users' RFID cards to lock or unlock their
                  Windows accounts automatically. iLUTon shall minimize the risk
                  of information leakage and record actual working time
                  accurately.
                </p>
              </div>
              <div className="col-6">
                <img src={img2} alt="" className="w-100" />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <img src={img3} alt="" className="w-100" />
              </div>
              <div className="col-6">
                <h2>
                  <b>iLUTon - PC ScreenLocker</b>
                </h2>
                <p className="fs-5">
                  iLUTon is a collaborative product of EZDefence and NTQ to
                  prevent data leakage. Integrated with computers, our smart
                  devices can identify users' RFID cards to lock or unlock their
                  Windows accounts automatically. iLUTon shall minimize the risk
                  of information leakage and record actual working time
                  accurately.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <h2>
                  <b>iLUTon - PC ScreenLocker</b>
                </h2>
                <p className="fs-5">
                  iLUTon is a collaborative product of EZDefence and NTQ to
                  prevent data leakage. Integrated with computers, our smart
                  devices can identify users' RFID cards to lock or unlock their
                  Windows accounts automatically. iLUTon shall minimize the risk
                  of information leakage and record actual working time
                  accurately.
                </p>
              </div>
              <div className="col-6">
                <img src={img4} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
