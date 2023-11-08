import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "../../../config/config";
import { Link } from "react-router-dom";
export const PaypalSales = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [amountType, setAmountType] = useState(0);
  const [infoToPay, setInfoToPay] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: infoToPay.description,
            amount: {
              currency_code: "USD",
              value: infoToPay.amount,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Pago exitoso");
      // console.log("Order successful . Your order id is: ", orderID);
      setInfoToPay({});
      setAmountType(0);
    }
  }, [success]);

  const onSubmitClick = async (data) => {
    const dataPay = {
      ...data,
      currency: "USD",
      intent: "sale",
      amount: amountType,
    };

    setInfoToPay(dataPay);

    setShow(true);
  };
  return (
    <>
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-1">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center pb-5">
                  <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                    <div className="py-4 d-flex flex-row">
                      <h5>
                        <span className="far fa-check-square pe-2" />
                        <b>Consultorio Médico</b> |
                      </h5>
                    </div>

                    <form
                      className="pb-3"
                      onSubmit={handleSubmit(onSubmitClick)}
                    >
                      <h3>Factura Médica</h3>

                      <p>
                        Las reclamaciones de seguro y todas las dependencias
                        necesarias se presentarán a su aseguradora por la parte
                        cubierta de este pedido
                      </p>
                      <div className="rounded" style={{ padding: "1px" }}>
                        <div className="form-outline my-4">
                          <label className="form-label">
                            Selecciona un servicio:
                          </label>
                          <br />
                          <select
                            onChange={(evet) => {
                              setAmountType(evet.target.value);
                              console.log(evet.target.value);
                            }}
                            className="form-select"
                          >
                            <option selected value={0}>
                              Seleciona una opción
                            </option>

                            <option value={29}>
                              Consulta Básica ($500.00 MXN)
                            </option>
                            <option value={60}>Urgencias ($1000.00 MXN)</option>
                          </select>
                        </div>

                        <div className="form-outline my-2">
                          <label className="form-label">
                            Descripción del pago
                          </label>
                          <textarea
                            style={{
                              backgroundColor: "#f8f9fa",
                              borderRadius: "5px",
                            }}
                            className="form-control"
                            id="textAreaExample"
                            rows="2"
                            {...register("description", {
                              required: true,
                            })}
                          ></textarea>
                          {errors.description && (
                            <span className="text-danger">Dato requerido</span>
                          )}
                        </div>
                      </div>
                      <hr />
                      <div className="pt-2">
                        <div className="d-flex pb-2">
                          <div>
                            <p>
                              <b>Método de pago</b>
                            </p>
                          </div>
                        </div>
                        <p>
                          Favor de seleccionar el método de pago para proceder
                          con el cargo a su cuenta
                        </p>

                        <div className="d-flex flex-row pb-3">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel1"
                              defaultValue="paypal"
                              aria-label="..."
                              defaultChecked="true"
                              {...register("method", {
                                required: true,
                              })}
                            />
                          </div>
                          <div className="rounded border d-flex w-100 p-3 align-items-center">
                            <p className="mb-0">
                              <i className="fa-brands fa-cc-paypal fa-lg text-primary pe-2"></i>
                              PayPal
                            </p>
                          </div>
                        </div>

                        <input
                          type="submit"
                          defaultValue="Proceed to payment"
                          className="btn btn-primary btn-block btn-lg"
                          value="Siguiente"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-md-5 col-xl-4 offset-xl-1">
                    <div className="py-4 d-flex justify-content-end">
                      <h6>
                        <Link to="/patient/medical/information">
                          Cancelar y volver
                        </Link>
                      </h6>
                    </div>
                    <div
                      className="rounded d-flex flex-column p-2"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <div className="p-2 me-3">
                        <h4>Orden de pago</h4>
                      </div>
                      <div className="p-2 d-flex">
                        <div className="col-8">Monto a pagar</div>
                        <div className="ms-auto">${`${amountType} USD`}</div>
                      </div>

                      <div className="border-top px-2 mx-2" />

                      <div className="p-2 d-flex">
                        <div className="col-8">
                          Otros cargos
                          <span className="fa fa-question-circle text-dark" />
                        </div>
                        <div className="ms-auto">
                          <b>$0.00</b>
                        </div>
                      </div>
                      <div className="border-top px-2 mx-2" />
                      <div className="p-2 d-flex pt-3">
                        <div className="col-8">
                          <b>Total</b>
                        </div>
                        <div className="ms-auto">
                          <b className="text-success">${`${amountType} USD`}</b>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: "30px" }}>
                      {show ? (
                        <PayPalButtons
                          style={{ layout: "vertical" }}
                          createOrder={createOrder}
                          onApprove={onApprove}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PayPalScriptProvider>
    </>
  );
};
