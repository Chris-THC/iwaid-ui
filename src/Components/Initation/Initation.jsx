import React from "react";
import logoImage from "../../Assets/Images/iwa_logo.jpg";
import '../../Css/imagesCss.css';
import appointment from "../../Assets/Images/appointment.jpg";
import outside from "../../Assets/Images/outside.jpg";
import stretcher from "../../Assets/Images/stretcher.jpg";
import doctor from "../../Assets/Images/doctor.jpg"
import LogoFooter from"../../Assets/Images/iwa_logo_footer.jpg";
import { Carousel } from 'react-bootstrap';
import { FaInstagram,FaWhatsapp, FaFacebook  } from 'react-icons/fa';

export function showLogoImage(){
    return(
        <div>
        <img className="imgLogo"  src={logoImage} alt="Imagen Logo"   />
        </div>
    );
}

export const showCarouselComponent = () => {
  return (
    <div className="" style={{marginLeft: "20%"}}>
    <section class="main">
      <div class="main-top">
        <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={stretcher} alt="img-strecher" />
        <Carousel.Caption>
          <h5>Manos de Cuidado</h5>
          <p>Donde la experiencia y la empatía se unen. Confía en nuestros profesionales para un tratamiento excepcional.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={outside} alt="img-out" />
        <Carousel.Caption>
          <h5>Refugio de Bienestar</h5>
          <p>Tu espacio de relajación y cuidado personal. Aquí encuentras un equilibrio entre cuerpo y mente.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={doctor} alt="img-doctor" />
        <Carousel.Caption>
          <h5>Caminos hacia la Salud</h5>
          <p>En nuestros consultorios, trazamos juntos la ruta hacia una vida más saludable. Tu salud, nuestra prioridad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={appointment} alt="img-appoint" />
        <Carousel.Caption>
          <h5>Salud Brillante</h5>
          <p>Nuestro compromiso es tu bienestar. Cuidamos de ti para que vivas cada día al máximo.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </section>
    </div>
  );
};

export const showFooter =()=>{
  return(
    <div class="card-group "style={{marginLeft: "20%"}}>
  <div class="card " style={{ backgroundColor: "#374955" }}>
    <div class="card-body ">
      <div className="d-flex flex-row mb-2">
    <img className="imgLogo"  src={logoImage} alt="Imagen Logo"  />
    <h2 className="p-2 mt-1 text-white fw-bold">IWA</h2>
    </div >
      <h5 class="card-title " id= "text-footer">Valores que nos definen</h5>
      <p class="card-text "  id= "text-footer">En IWA Consultorio Médico, creemos en la dedicación incansable hacia tu bienestar. Nuestros valores de empatía, excelencia y compromiso nos impulsan a brindarte una atención médica integral que te mereces. Tu salud es nuestra prioridad y juntos construimos un camino hacia el bienestar duradero.</p>   
      <p class="card-text fw-bold"  id= "text-footer"><FaFacebook/> <FaWhatsapp/> <FaInstagram/> </p>
    </div>
  </div>
  <div class="card " style={{ backgroundColor: "#374955" }}>
    <div class="card-body">
      <h5 class="card-title fw-bold" id= "text-footer">Nuestros Servicios</h5>
      <p class="card-text  " id= "text-footer">Consulta Médica Integral: Un enfoque holístico para abordar tus necesidades médicas en su totalidad.
      </p>
      <p class="card-text  " id= "text-footer"> Chequeos Preventivos: Identificamos posibles problemas de salud antes de que se conviertan en preocupaciones mayores.
      </p>
      <p class="card-text  " id= "text-footer">Cuidado de Enfermedades Crónicas: Manejamos con experiencia condiciones médicas a largo plazo para mejorar tu calidad de vida.
      </p>
      <p class="card-text  " id= "text-footer">Vacunación y Prevención: Protegemos tu salud a través de programas de vacunación personalizados.
      </p>
      <p class="card-text  " id= "text-footer">Atención en Urgencias Menores: Estamos aquí para brindarte atención en situaciones que requieren atención médica inmediata.
      </p>
      <p class="card-text  " id= "text-footer">Asesoría Nutricional: Guiamos hacia hábitos alimenticios que fomentan un estilo de vida saludable.
      </p>
    </div>
  </div>
  <div class="card  "style={{ backgroundColor: "#374955" }}>
    <div class="card-body">
      <h5 class="card-title fw-bold" id= "text-footer">Visítanos</h5>
      <p class="card-text  fw-bold " id= "text-footer">IWA Consultorio Médico</p>
      <p class="card-text  fw-bold" id= "text-footer">Dirección: Calle Ficticia #123, Colonia Imaginaria, Orizaba, Veracruz, México.</p>
      <p class="card-text  fw-bold" id= "text-footer">Teléfono: (123) 456-7890</p>
    </div>
  </div>
</div>
  );
}
