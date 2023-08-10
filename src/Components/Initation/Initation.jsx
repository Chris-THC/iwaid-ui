import React from "react";
import logoImage from "../Images/IWALogo (2).jpg";
import '../../Css/imagesCss.css';
import consultorio from "../Images/consultorioimg.jpg";
import exterior from "../Images/consultorio-exterior.jpg";
import camilla from "../Images/c.jpg";
import doc from "../Images/doctor2.jpg"
import LogoFooter from"../Images/IWALogoFooter.jpg";
import { Carousel } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export function IMG(){
    return(
        <div>
        <img className="imgLogo"  src={logoImage} alt="Imagen Logo" />
        </div>
    );
}

export function Initation(){
    return(
        <div class="">
          
            <img className="imgInicio" src={consultorio} alt="" />

        </div> 
    );
}

export const CarouselComponent = () => {
  const settings = {
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 
  };
  return (
    <>
        <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={consultorio} alt="img-consult" />
        <Carousel.Caption>
          <h5>Salud Brillante</h5>
          <p>Nuestro compromiso es tu bienestar. Cuidamos de ti para que vivas cada día al máximo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={camilla} alt="img-strecher" />
        <Carousel.Caption>
          <h5>Manos de Cuidado</h5>
          <p>Donde la experiencia y la empatía se unen. Confía en nuestros profesionales para un tratamiento excepcional.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={exterior} alt="img-out" />
        <Carousel.Caption>
          <h5>Refugio de Bienestar</h5>
          <p>Tu espacio de relajación y cuidado personal. Aquí encuentras un equilibrio entre cuerpo y mente.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={doc} alt="img-doctor" />
        <Carousel.Caption>
          <h5>Caminos hacia la Salud</h5>
          <p>En nuestros consultorios, trazamos juntos la ruta hacia una vida más saludable. Tu salud, nuestra prioridad.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export const Footer =()=>{
  return(
    <div class="card-group ">
  <div class="card " style={{ backgroundColor: "#15ACF7" }}>

    <div class="card-body ">
    <img className="imgLogo footer"  src={LogoFooter} alt="Imagen Logo" />
      <h5 class="card-title text-light">Valores que nos Definen</h5>
      <p class="card-text text-light">En IWA Consultorio Médico, creemos en la dedicación incansable hacia tu bienestar. Nuestros valores de empatía, excelencia y compromiso nos impulsan a brindarte una atención médica integral que te mereces. Tu salud es nuestra prioridad y juntos construimos un camino hacia el bienestar duradero.</p>   
      <p class="card-text text-light"><FaFacebook/> <FaWhatsapp/> <FaInstagram/> </p>
    </div>
  </div>
  <div class="card " style={{ backgroundColor: "#15ACF7" }}>
    <div class="card-body">
      <h5 class="card-title text-light">Nuestros Servicios</h5>
      <p class="card-text text-light">Consulta Médica Integral: Un enfoque holístico para abordar tus necesidades médicas en su totalidad.
Chequeos Preventivos: Identificamos posibles problemas de salud antes de que se conviertan en preocupaciones mayores.
Cuidado de Enfermedades Crónicas: Manejamos con experiencia condiciones médicas a largo plazo para mejorar tu calidad de vida.
Vacunación y Prevención: Protegemos tu salud a través de programas de vacunación personalizados.
Atención en Urgencias Menores: Estamos aquí para brindarte atención en situaciones que requieren atención médica inmediata.
Asesoría Nutricional: Guiamos hacia hábitos alimenticios que fomentan un estilo de vida saludable.</p>
     
    </div>
  </div>
  <div class="card  "style={{ backgroundColor: "#15ACF7" }}>
    <div class="card-body">
      <h5 class="card-title text-light">Visítanos</h5>
      <p class="card-text text-light ">IWA Consultorio Médico
Dirección: Calle Ficticia #123, Colonia Imaginaria, Orizaba, Veracruz, México.
Teléfono: (123) 456-7890</p>
    </div>
  </div>
</div>
  );
}
