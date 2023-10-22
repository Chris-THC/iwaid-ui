import React, { useEffect, useState, useContext } from "react";
import { URL_API_BACKEND } from "../../../config/config.js";
import axios from "axios";
import { GetTheAppContext } from "../../../Context/AppContext";

export const PersonalDates = () => {
  
  const { user, token } = useContext(GetTheAppContext);

  const [patienInfo, setPatienInfo] = useState([]);
  const patientIdToFilter = user.idPatient;

  const filterPatientInfo = async () => {
    console.log(`${URL_API_BACKEND}/appointments/`);
    try {
      const response = await axios.get(`${URL_API_BACKEND}/appointments/`, {
        headers: {
          Authorization: `Bearer ${token}`, // Agregar el token en el encabezado
        },
      });
      setPatienInfo(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    filterPatientInfo();
  }, []);

  const hourMappings = {
    EIGHT_AM: "8:00-8:59 AM",
    NINE_AM: "9:00-9:59 AM",
    TEN_AM: "10:00-10:59 AM",
    ELEVEN_AM: "11:00-11:59 AM",
    TWELVE_PM: "12:00-12:59 PM",
    ONE_PM: "1:00-1:59 PM",
    TWO_PM: "2:00-2:59 PM",
    THREE_PM: "3:00-3:59 PM",
    FOUR_PM: "4:00-4:59 PM",
    FIVE_PM: "5:00-5:59 PM",
    SIX_PM: "6:00-6:59 PM",
    SEVEN_PM: "7:00-7:59 PM",
    EIGHT_PM: "8:00-8:59 PM",
  };

  const formatDate = (originalDate) => {
    let piecesDate = originalDate.split("-");
    return piecesDate[2] + "/" + piecesDate[1] + "/" + piecesDate[0];
  };

  const RenderPatinetInformation = ({ infoMedicalDates }) => {
    return (
      <>
        <tbody>
          <tr key={infoMedicalDates.id}>
            <td id="responsiveTextTable">{infoMedicalDates.patientDTO.name}</td>
            <td id="disableCell">{infoMedicalDates.doctorDTO.name}</td>
            <td id="responsiveTextTable">
              {formatDate(infoMedicalDates.date)}
            </td>
            <td id="responsiveTextTable">
              {hourMappings[infoMedicalDates.hour]}
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
                  <table key={patienInfo.id} className="table table-responsive">
                    <thead>
                      <tr>
                        <th id="responsiveTextTable">Paciente</th>
                        <th id="disableCell">Médico</th>
                        <th id="responsiveTextTable">Fecha</th>
                        <th id="responsiveTextTable">Hora</th>
                      </tr>
                    </thead>

                    {patienInfo
                      .filter((item) => {
                        return item.patientId === patientIdToFilter;
                      })
                      .map((item) => (
                        <>
                          <RenderPatinetInformation
                            infoMedicalDates={item}
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
