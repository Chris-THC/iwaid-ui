import React from "react";
import logoImage from "../Images/iwa_logo.jpg";
import "../../Css/imagesCss.css";
import appointment from "../Images/appointment.jpg";
import outside from "../Images/outside.jpg";
import stretcher from "../Images/stretcher.jpg";
import doctor from "../Images/doctor.jpg";
import LogoFooter from "../Images/iwa_logo_footer.jpg";
import { Carousel } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export function showLogoImage() {
  return (
    <div>
      <img
        className="imgLogo"
        src={logoImage}
        alt="Imagen Logo"
        width="150"
        height="50"
      />
    </div>
  );
}

export const showCarouselComponent = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={stretcher}
            alt="img-strecher"
          />
          <Carousel.Caption>
            <h5>Manos de Cuidado</h5>
            <p>
              Donde la experiencia y la empatía se unen. Confía en nuestros
              profesionales para un tratamiento excepcional.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={outside} alt="img-out" />
          <Carousel.Caption>
            <h5>Refugio de Bienestar</h5>
            <p>
              Tu espacio de relajación y cuidado personal. Aquí encuentras un
              equilibrio entre cuerpo y mente.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={doctor} alt="img-doctor" />
          <Carousel.Caption>
            <h5>Caminos hacia la Salud</h5>
            <p>
              En nuestros consultorios, trazamos juntos la ruta hacia una vida
              más saludable. Tu salud, nuestra prioridad.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={appointment}
            alt="img-appoint"
          />
          <Carousel.Caption>
            <h5>Salud Brillante</h5>
            <p>
              Nuestro compromiso es tu bienestar. Cuidamos de ti para que vivas
              cada día al máximo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export const showFooter = () => {
  return (
    <div className="card-group ">
      <div className="card " style={{ backgroundColor: "#374955" }}>
        <div className="card-body ">
          <img
            className="imgLogo"
            src={LogoFooter}
            alt="Imagen Logo"
            width="150"
            height="50"
          />
          <h5 className="card-title " id="text-footer">
            Valores que nos definen
          </h5>
          <p className="card-text " id="text-footer">
            En IWA Consultorio Médico, creemos en la dedicación incansable hacia
            tu bienestar. Nuestros valores de empatía, excelencia y compromiso
            nos impulsan a brindarte una atención médica integral que te
            mereces. Tu salud es nuestra prioridad y juntos construimos un
            camino hacia el bienestar duradero.
          </p>
          <p className="card-text fw-bold" id="text-footer">
            <FaFacebook /> <FaWhatsapp /> <FaInstagram />{" "}
          </p>
        </div>
      </div>
      <div className="card " style={{ backgroundColor: "#374955" }}>
        <div className="card-body">
          <h5 className="card-title fw-bold" id="text-footer">
            Nuestros Servicios
          </h5>
          <p className="card-text  " id="text-footer">
            Consulta Médica Integral: Un enfoque holístico para abordar tus
            necesidades médicas en su totalidad.
          </p>
          <p className="card-text  " id="text-footer">
            {" "}
            Chequeos Preventivos: Identificamos posibles problemas de salud
            antes de que se conviertan en preocupaciones mayores.
          </p>
          <p className="card-text  " id="text-footer">
            Cuidado de Enfermedades Crónicas: Manejamos con experiencia
            condiciones médicas a largo plazo para mejorar tu calidad de vida.
          </p>
          <p className="card-text  " id="text-footer">
            Vacunación y Prevención: Protegemos tu salud a través de programas
            de vacunación personalizados.
          </p>
          <p className="card-text  " id="text-footer">
            Atención en Urgencias Menores: Estamos aquí para brindarte atención
            en situaciones que requieren atención médica inmediata.
          </p>
          <p className="card-text  " id="text-footer">
            Asesoría Nutricional: Guiamos hacia hábitos alimenticios que
            fomentan un estilo de vida saludable.
          </p>
        </div>
      </div>
      <div className="card  " style={{ backgroundColor: "#374955" }}>
        <div className="card-body">
          <h5 className="card-title fw-bold" id="text-footer">
            Visítanos
          </h5>
          <p className="card-text  fw-bold " id="text-footer">
            IWA Consultorio Médico
          </p>
          <p className="card-text  fw-bold" id="text-footer">
            Dirección: Calle Ficticia #123, Colonia Imaginaria, Orizaba,
            Veracruz, México.
          </p>
          <p className="card-text  fw-bold" id="text-footer">
            Teléfono: (123) 456-7890
          </p>
        </div>
      </div>
    </div>
  );
};
