import React from "react";

import img1 from "../../Img/bed.jpg";
import img2 from "../../Img/doctor.jpg";
import img3 from "../../Img/farmacia.jpg";

export const CarouselEffect = () => {
  return (
    <div>
      <div
        id="myCarousel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <p
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></p>
          <p data-bs-target="#myCarousel" data-bs-slide-to="1"></p>
          <p data-bs-target="#myCarousel" data-bs-slide-to="2"></p>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              id="imgCarrusel"
              src={img1}
              className="d-block img-fluid"
              alt="Slide 1"
            />

            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some demonstrative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              id="imgCarrusel"
              src={img2}
              className="d-block img-fluid"
              alt="Slide 1"
            />

            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some demonstrative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              id="imgCarrusel"
              src={img3}
              className="d-block img-fluid"
              alt="Slide 1"
            />

            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some demonstrative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};
