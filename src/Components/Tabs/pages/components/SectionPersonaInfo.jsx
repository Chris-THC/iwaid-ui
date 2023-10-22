import React from "react";
import "../../../../Css/PersonalInfo.css";

const RenderFormBody = ({ isGetData }) => {
  return (
    <>
      {isGetData === null ? (
        <div>Loading...</div>
      ) : (
        <form id="contactForm" name="contactForm">
          <div className="row">
            <div className="col-md-6 col-lg-5  form-group mb-4">
              <label htmlFor="" className="col-form-label">
                Nombre Completo <span className="text-danger">*</span>
              </label>
              <input
                id="desableInputPatinetInfo"
                type="text"
                defaultValue={isGetData.name}
                className="form-control"
                placeholder="Nombre Completo"
                disabled
              />
            </div>

            <div className="col-md-6 col-lg-4 form-group mb-4">
              <label htmlFor="" className="col-form-label">
                Fecha de Nacimiento <span className="text-danger">*</span>
              </label>
              <input
                id="desableInputPatinetInfo"
                disabled
                type="date"
                className="form-control"
                defaultValue={isGetData.dateOfBirth}
              />
            </div>

            <div className="col-md-6 col-lg-3 form-group mb-4">
              <label htmlFor="" className="col-form-label">
                Género <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={isGetData.gender}
                placeholder="Genero"
                id="desableInputPatinetInfo"
                disabled
              />
            </div>

            <div className="col-md-6 col-lg-4 form-group mb-4">
              <label htmlFor="" className="col-form-label">
                RFC <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={isGetData.rfc}
                placeholder="RFC"
                id="desableInputPatinetInfo"
                disabled
              />
            </div>

            <div className="col-md-6 col-lg-4 form-group mb-4">
              <label htmlFor="" className="col-form-label">
                Teléfono <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={isGetData.phoneNumber}
                placeholder="Teléfono"
                id="desableInputPatinetInfo"
                disabled
              />
            </div>

            <div className="col-md-6 col-lg-4 form-group mb-4">
              <label className="col-form-label">
                Ciudad <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={isGetData.city}
                placeholder="Teléfono"
                id="desableInputPatinetInfo"
                disabled
              />
            </div>

            <div className="col-md-12  form-group mb-4">
              <label className="col-form-label">
                Dirección <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={isGetData.address}
                placeholder="Ingrese su dirección"
                id="desableInputPatinetInfo"
                disabled
              />
            </div>

            <div className="col-md-6 form-group mb-4">
              <label className="col-form-label">
                Correo electronico <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={isGetData.email}
                placeholder="Correo electronico"
                id="desableInputPatinetInfo"
                disabled
              />
            </div>

            <div className="col-md-6 form-group mb-4">
              <label className="col-form-label">
                Contraseña <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                defaultValue={isGetData.password}
                placeholder="Contraseña"
                id="desableInputPatinetInfo"
                disabled
              />
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export const SectionPersonaInfo = ({ isGetData = {} }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div style={{ paddingRight: "0" }} className="col-md-8">
            <div style={{ height: "100%" }} className="form">
              <h3>Informacion del Paciente</h3>
              <RenderFormBody isGetData={isGetData} />
            </div>
          </div>

          <div style={{ paddingLeft: "0" }} className="col-md-4 pl-0">
            <div className="contact-info h-100">
              <h3>Sobre nosotros</h3>

              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, magnam!
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <span className="wrap-icon icon-room mr-3" />
                  <span className="text">
                    Norte 32, # 673 Piso 1 B Entre Calle Cri-Cri y Oriente 11
                    CP: 94324 Orizaba, Veracruz
                  </span>
                </li>
                <li className="d-flex">
                  <span className="wrap-icon icon-phone mr-3" />
                  <span className="text">
                    Córdoba (271) 714 5350 | Orizaba (272) 123 5049 | Veracruz
                    (229) 980 8463
                  </span>
                </li>
                <li className="d-flex">
                  <span className="wrap-icon icon-envelope mr-3" />
                  <span className="text">contacto@iwa.com.mx</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
