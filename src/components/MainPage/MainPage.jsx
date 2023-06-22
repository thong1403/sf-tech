import React from "react";
import "./MainPage.css";
import img1 from "../../image/computer-programming.jpg";
import img2 from "../../image/download (6).jpg";
import img3 from "../../image/download (7).jpg";
import img4 from "../../image/download.jpg";
import imgContent1 from '../images/download (3).jpg'
import imgContent2 from '../images/download (4).jpg'
import imgContent3 from '../images/download (5).jpg'
import imgContent4 from '../images/download (6).jpg'



export default function MainPage() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={img1}
              class="d-block w-100 img-backgroud-home"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={img2}
              class="d-block w-100 img-backgroud-home"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={img3}
              class="d-block w-100 img-backgroud-home"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="title-main-pages">
        <h1>
          WEBSITE <br />
          APPLICATION <br />
          DEVELOPMENT
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem{" "}
          <br />
          quidem sit, soluta temporibus eveniet enim maiores veritatis <br />
          consequatur culpa ea!
        </p>
        <button className="mt-3">Read more</button>
      </div>

      <div className="text-center mt-5">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          <b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            quibusdam laudantium adipisci optio, exercitationem doloribus porro{" "}
            <br />
            enim ab nostrum officia in, maxime beatae placeat odit quas
            laboriosam voluptate quos ex alias! Dolore sunt similique inventore{" "}
            <br />
            asperiores fuga aperiam repudiandae molestiae at. Dolores ad sunt{" "}
            <br />
            aut sapiente? Unde recusandae adipisci soluta?
          </b>
        </p>
      </div>
      <div className="container-content-img-mainPages">
        <img src={img4} alt="" className="w-100 mt-5 img-backGroud" />
        <div className="container container-content-main-pages ">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="row">
                <div className="col-4 content-main-pages">
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Doloribus maiores veniam facilis debitis a ab sint libero
                    quis <br />
                    laudantium delectus!
                  </p>
                </div>
                <div className="col-4 content-main-pages">
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Doloribus maiores veniam facilis debitis a ab sint libero
                    quis <br />
                    laudantium delectus!
                  </p>
                </div>
                <div className="col-4 content-main-pages">
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Doloribus maiores veniam facilis debitis a ab sint libero
                    quis <br />
                    laudantium delectus!
                  </p>
                </div>
                <div className="col-4 content-main-pages">
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Doloribus maiores veniam facilis debitis a ab sint libero
                    quis <br />
                    laudantium delectus!
                  </p>
                </div>
                <div className="col-4 content-main-pages">
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Doloribus maiores veniam facilis debitis a ab sint libero
                    quis <br />
                    laudantium delectus!
                  </p>
                </div>
                <div className="col-4 content-main-pages">
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Doloribus maiores veniam facilis debitis a ab sint libero
                    quis <br />
                    laudantium delectus!
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <h1 className="text-center mb-5">OUR OFFICES</h1>
                <div className="col-3">
                  <img src={imgContent1} alt="" className="w-100 img-backgroud-content" />
                </div>
                <div className="col-3">
                  <img src={imgContent2} alt="" className="w-100 img-backgroud-content" />
                </div>
                <div className="col-3">
                  <img src={imgContent3} alt="" className="w-100 img-backgroud-content" />
                </div>
                <div className="col-3">
                  <img src={imgContent4} alt="" className="w-100 img-backgroud-content" />
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
