import React, { useEffect, useState } from "react";
import { URL_API_BACKEND } from "../../../config/config.js";
import axios from "axios";

const patientIdToFilter = 3;

export const PersonalPrescriptions = () => {
  const [patienInfo, setPatienInfo] = useState([]);

  const filterPatientInfo = async () => {
    try {
      const response = await axios.get(`${URL_API_BACKEND}/prescription/`);
      setPatienInfo(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    filterPatientInfo();
  }, []);

  const changeDateFormat = (originalDate) => {
    let piecesDate = originalDate.split("-");
    return piecesDate[2] + "/" + piecesDate[1] + "/" + piecesDate[0];
  };

  const RenderPatinetInformation = ({ infoMedicalPrescriotion }) => {
    return (
      <>
        <tbody>
          <tr key={infoMedicalPrescriotion.id}>
            <td id="responsiveTextTable">
              {infoMedicalPrescriotion.patient.name}
            </td>
            <td id="responsiveTextTable">
              {infoMedicalPrescriotion.doctor.name}
            </td>
            <td id="responsiveTextTable">
              {changeDateFormat(infoMedicalPrescriotion.registerDate)}
            </td>
            <td id="disableCell">{infoMedicalPrescriotion.description}</td>
          </tr>
        </tbody>
      </>
    );
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div style={{ paddingRight: "0" }} className="col-md-8">
            <div style={{ height: "100%" }} className="form">
              <h3>Prescripciones Médicas</h3>
              <div>
                {patienInfo === null ? (
                  <div>Loading...</div>
                ) : patienInfo.length > 0 ? (
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th id="responsiveTextTable">Paciente</th>
                        <th id="responsiveTextTable">Médico</th>
                        <th id="responsiveTextTable">Fecha de Asignación</th>
                        <th id="disableCell">Descripción</th>
                      </tr>
                    </thead>

                    {patienInfo
                      .filter((item) => {
                        return item.patientId === patientIdToFilter;
                      })
                      .map((item) => (
                        <>
                          <RenderPatinetInformation
                            key={item.id}
                            infoMedicalPrescriotion={item}
                          />
                        </>
                      ))}
                  </table>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
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
