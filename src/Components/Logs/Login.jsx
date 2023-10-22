import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "../../Css/PersonalInfo.css";
import { GetTheAppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setUserRoll, setUser, setIsLoggedIn, LoginFuntion, setToken } =
    useContext(GetTheAppContext);
  const navigeteTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const TokenSeparator = (token) => {
    const parts = token.split(".");
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  };

  const ManagerEventSubmmit = async (data) => {
    try {
      const isLogin = await LoginFuntion(data);

      if (isLogin.status === 200) {
        let loggedUserInfo = TokenSeparator(isLogin.data.token);
        setUser(loggedUserInfo);
        console.log(loggedUserInfo);
        setToken(isLogin.data.token);
        setIsLoggedIn(true);
        setUserRoll(loggedUserInfo.role);
        if (loggedUserInfo.role === "Doctor") {
          navigeteTo("/doctor");
        } else if (loggedUserInfo.role === "Patient") {
          navigeteTo("/patient/medical/information");
        }
        alert("Sesión iniciada correctamente");
      } else {
        alert("NO se pudo iniciar sesion");
      }
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div style={{ paddingRight: "0" }} className="col-md-8">
            <div style={{ height: "100%" }} className="form">
              <h3>Inicio de sesión</h3>
              <form
                id="contactForm"
                onSubmit={handleSubmit(ManagerEventSubmmit)}
              >
                <div className="row">
                  <div className="col-md-6 col-lg-5  form-group mb-4">
                    <label htmlFor="" className="col-form-label">
                      Correo Electronico <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Correo Electronico"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <span className="text-danger">
                        El correo electrónico es requerido
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-danger">
                        Ingrese un correo electrónico válido
                      </span>
                    )}
                  </div>

                  <div className="col-md-6 form-group mb-4">
                    <label className="col-form-label">
                      Contraseña <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      {...register("password", {
                        required: true,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <span className="text-danger">
                        La contraseña es requerida
                      </span>
                    )}
                  </div>

                  <div>
                    <button className="btn btn-primary" disabled={!isValid}>
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </form>
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
