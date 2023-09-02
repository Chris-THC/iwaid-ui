import React, { useEffect, useState } from "react";
import { URL_API_BACKEND } from "../../../config/config.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

const patientIdToFilter = 3;

export const PersonalHistory = () => {
  const [patienInfo, setPatienInfo] = useState([]);

  const filterPatientInfo = async () => {
    try {
      const response = await axios.get(`${URL_API_BACKEND}/medicalhistory/`);
      setPatienInfo(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    filterPatientInfo();
  }, []);

  const RenderPatinetInformation = ({ infoMedicalHistory }) => {
    return (
      <>
        <tbody>
          <tr key={infoMedicalHistory.id}>
            <td id="responsiveTextTable" className="pt-2">
              {infoMedicalHistory.patient.name}
            </td>
            <td className="pt-2">
              {infoMedicalHistory.familyMedicalHistory === true ? (
                <div className="text-success d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#93c896" }}
                  />
                </div>
              ) : (
                <div className="text-success d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faMinus}
                    style={{ color: "#5c6bc0" }}
                  />
                </div>
              )}
            </td>

            <td className="pt-2">
              {infoMedicalHistory.pathologicalHistory === true ? (
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#93c896" }}
                  />
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faMinus}
                    style={{ color: "#5c6bc0" }}
                  />
                </div>
              )}
            </td>
            <td className="pt-2">
              {infoMedicalHistory.nonPathologicalHistory === true ? (
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#93c896" }}
                  />
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faMinus}
                    style={{ color: "#5c6bc0" }}
                  />
                </div>
              )}
            </td>
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
              <h3>Citas medicas programadas</h3>
              <div>
                {patienInfo === null ? (
                  <div>Loading...</div>
                ) : patienInfo.length > 0 ? (
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th id="responsiveTextTable">Paciente</th>
                        <th id="responsiveTextTable">
                          Heredo <br /> familiares
                        </th>
                        <th id="responsiveTextTable">Patológicos</th>
                        <th id="responsiveTextTable">No patológicos</th>
                      </tr>
                    </thead>

                    {patienInfo
                      .filter((item) => {
                        return item.patientId === patientIdToFilter;
                      })
                      .map((item) => (
                        <>
                          <RenderPatinetInformation
                            infoMedicalHistory={item}
                            key={item.id}
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
