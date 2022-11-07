import React from "react";
import Complete1 from "../../Component/imago/Complete1.png";
import Complete2 from "../../Component/imago/Complete2.png";
import Complete3 from "../../Component/imago/Complete3.png";

import './Complete.css'

function Complete() {
  return (
    <div>
      <div className="complete-top">
        <h1>COMPLETE THE LOOK</h1>
      </div>
      <div className="ice-one">
        <div>
          <img src={Complete1} alt="" />
          <p>Carte postal briefs</p>
          <p>$34</p>
        </div>

        <div className="caro-2">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-touch="false"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Complete2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Complete3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Complete2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Complete2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Complete2} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              id="btn btn-primary"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="sphere">
        <p>Shop all Iconics</p>
      </div>
    </div>
  );
}

export default Complete;
