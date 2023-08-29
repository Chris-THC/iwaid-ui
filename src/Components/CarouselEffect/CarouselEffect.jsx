import React from "react";

import img1 from "../../Img/bed.jpg";
import img2 from "../../Img/doctor.jpg";
import img3 from "../../Img/farmacia.jpg";

export const CarouselEffect = () => {
  const MainMessage = ({ titleMessage, message, imageMessage }) => {
    return (
      <>
        <img
          id="imgCarrusel"
          src={imageMessage}
          className="d-block img-fluid"
          alt="Slide 1"
        />

        <div id="glassEffect" className="carousel-caption  d-md-block">
          <h5>{titleMessage}</h5>
          <p>{message}</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <div
        id="myCarousel"
        className="carousel carousel slide"
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
            <MainMessage
              imageMessage={img1}
              titleMessage={"First slide label "}
              message={
                "Some demonstrative placeholder content for the first slide."
              }
            />
          </div>

          <div className="carousel-item">
            <MainMessage
              imageMessage={img2}
              titleMessage={"Second slide label "}
              message={
                "Some demonstrative placeholder content for the first slide."
              }
            />
          </div>
          <div className="carousel-item">
            <MainMessage
              imageMessage={img3}
              titleMessage={"Third slide label XDXD"}
              message={
                "Some demonstrative placeholder content for the third slide."
              }
            />
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
