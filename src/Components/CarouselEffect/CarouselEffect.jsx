import React from "react";

import img1 from "../../Img/bed-img.jpg";
import img2 from "../../Img/new2.jpg";

export const CarouselEffect = () => {
  const InformationMessage = () => {
    return (
      <>
        <div className="contact-info mb-4">
          <h3 className="text-light">Sobre nosotros</h3>

          <p className="mb-3 text-light">Servicio a la orden del día</p>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-center">
              <p className=" text-light ">
                Norte 32, # 673 Piso 1 B Entre Calle Cri-Cri y Oriente 11 CP:
                94324 Orizaba, Veracruz
              </p>
            </li>
            <li className="d-flex justify-content-center">
              <span className="wrap-icon icon-phone mr-3" />
              <p className="text-light">
                Córdoba (271) 714 5350 | Orizaba (272) 123 5049 | Veracruz (229)
                980 8463
              </p>
            </li>
            <li className="d-flex justify-content-center">
              <p className="text-light">Mandanos un correo Electronico</p>
              <br />
              <p className="text-light">contacto@iwa.com.mx</p>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const MainMessage = ({ titleMessage, message, imageMessage }) => {
    return (
      <>
        <img id="imgCarrusel" src={imageMessage} alt="Slide 1" />

        <div id="glassEffect" className="carousel-caption  d-md-block">
          <InformationMessage className="text-light" />
          {/* <h5 className="text-light">{titleMessage}</h5> */}
          {/* <p className="text-light">{message}</p> */}
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
