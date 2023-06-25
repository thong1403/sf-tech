import React from "react";
import "./Company.css";
import img1 from "../images/download (4).jpg";

export default function Company() {
  return (
    <>
      <main>
        <div class="banner-container">
          <div class="banner">
            <div class="banner__item">
              <div class="container container--full-width">
                <h1 class="title">SF - Technologies</h1>
                <div class="subtitle subtitle--uppercase">
                  The family we build!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divide-line">
          <div class="divide-line__vertical"></div>
        </div>
        <div class="container custom-section">
          <div class="breadcrumb breadcrumb--mobile">
            <a class="link" href="/">
              <i class="material-icons">home</i>{" "}
            </a>
            <span>
              <i class="material-icons">chevron_right</i>{" "}
            </span>
            <span class="link link--active">About us</span>
          </div>
          <div class="offices-on-map">
            <div class="offices">
              <label
                class="office office--vietnam-hanoi"
                for="vietnam-hanoi-id"
              >
                <input
                  type="radio"
                  name="office"
                  id="vietnam-hanoi-id"
                  class="office-headquarter"
                />
              </label>
              <label class="office office--japan-tokyo" for="japan-tokyo-id">
                <input
                  type="radio"
                  name="office"
                  id="japan-tokyo-id"
                  class=""
                />
              </label>
              <label
                class="office office--hongkong-laichikok"
                for="hongkong-laichikok-id"
              >
                <input
                  type="radio"
                  name="office"
                  id="hongkong-laichikok-id"
                  class="office-headquarter"
                />
              </label>
              <label
                class="office office--korea-gyeonggi-do"
                for="korea-gyeonggi-do-id"
              >
                <input
                  type="radio"
                  name="office"
                  id="korea-gyeonggi-do-id"
                  class=""
                />
              </label>
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5">
          <div className="row">
            <h1 className="text-center mb-5 title-manager">BOARD OF MANAGER</h1>
            <div className="col-3">
              <div class="card">
                <img src='https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-girl-xinh-ha-noi-2k.jpg' class="card-img-top w-100" alt="..." />
                <div class="card-body">
                  <h3 class="card-text">
                   MR.HOANG TRONG HIEU CT
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <img src='https://pixwares.com/wp-content/uploads/2021/01/anh-gai-vip.jpg' class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-text">
                    MR.VU TAT THANH CEO
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <img src='https://1.bp.blogspot.com/-qbB8MUrsX1Q/XSSWRNs31tI/AAAAAAAAAOI/74Rwo0-C6SAL8pB92Hc1CBbl2nBVAIfCACLcBGAs/s1600/1f0333ef332b98e582fb9298d3fb35ab.jpg' class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-text">
                    MR.QUANG MT CTO
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <img src='https://1.bp.blogspot.com/-qbB8MUrsX1Q/XSSWRNs31tI/AAAAAAAAAOI/74Rwo0-C6SAL8pB92Hc1CBbl2nBVAIfCACLcBGAs/s1600/1f0333ef332b98e582fb9298d3fb35ab.jpg' class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-text">
                    MR.QUANG MT CTO
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section ads ad--p-0 ads--full-width ad--type-1">
          <div class="ad-container container">
            <div class="ads__title">NEWSLETTERS SUBSCRIPTION</div>
            <div class="ads__content">
              Get expert insights on digital transformation and event update
              straight to your inbox
            </div>
            <form
              action="/newsletter"
              method="POST"
              class="newsletter"
              id="newsletter"
              data-site-key="6Ldu3fUiAAAAAOzRTlT2w7b10dwpoiPie1bk3x24"
            >
              <input type="hidden" name="recapture_token" />
              <div class="newsletter__container">
                <input
                  class="newsletter__input"
                  type="email"
                  required=""
                  name="email"
                  placeholder="Your email"
                />
                <button
                  class="button button--secondary newsletter__submit"
                  type="submit"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
