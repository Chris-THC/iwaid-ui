import React from "react";
import logoImage from "../Images/IWALogo (2).jpg";
import '../../Css/imagesCss.css';
import consultorio from "../Images/consultorioimg.jpg";
import exterior from "../Images/consultorio-exterior.jpg";
import camilla from "../Images/c.jpg";
import doc from "../Images/doctor2.jpg"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export function IMG(){
    return(
        <div>
        
        <img className="img"  src={logoImage} alt="Imagen Logo" />
        </div>
    );
}

export function Initation(){
    return(
        <div class="">
          
            <img className="imgI" src={consultorio} alt="" />

        </div> 
    );
}

export const CarouselComponent = () => {
  
  const settings = {
    dots: true, // Mostrar los puntos de navegación
    infinite: true, // Hacer el carrusel infinito
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 1, // Número de diapositivas mostradas al mismo tiempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Número de diapositivas que avanzan o retroceden
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slide">
          <img className="imgI" src={consultorio} alt="" />
        </div>
        <div className="slide">
          <img className="imgI" src={exterior} alt="" />
        </div>
        <div className="slide">
          <img className="imgI" src={camilla} alt="" />
        </div>
        <div className="slide">
          <img className="imgI" src={doc} alt="" />
        </div>
      </Slider>
    </div>
  );
};
