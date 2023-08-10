import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { GetTheAppContext } from "../../Context/AppContext";
import { statusCreated, statusOk  } from "../HttpStatus/HTTPStatusCode";

export const FormMedicine = ({ isGetData = {} }) => {
  const {
    handleShowFloatAlter,
    handleCloseModal,
    actionButtonModal,
    setTextAlert,
    setDataMedicineFromTable,
    createMedicineFunction,
    getAllMedicineDataFunction,
    setAllDataMedicine,
    updateMedicineFunction,
    idMedicine,
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmitClick = async (data) => {
    if (actionButtonModal === "Agregar") {
      handleCloseModal();
      const responseCreateMedicine = await createMedicineFunction(data);

      if (responseCreateMedicine.status === statusCreated) {
        await getAllMedicineDataFunction(setAllDataMedicine);
        setTextAlert("Medicamento agregado exitosamente");
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al agregar el medicamento");
        handleShowFloatAlter();
      }
    } else if (actionButtonModal === "Editar") {
      handleCloseModal();

      const responseUpdateMedicine = await updateMedicineFunction(
        data,
        idMedicine
      );

      if (responseUpdateMedicine.status === statusOk ) {
        setTextAlert(`Medicamento  ${data.name} actualizado exitosamente`);
        await getAllMedicineDataFunction(setAllDataMedicine);
        handleShowFloatAlter();
      } else {
        setTextAlert(`Error al actualizar medicamento`);
        handleShowFloatAlter();
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-group mb-3">
          <label>
            Clave
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Clave del medicamento"
            autoComplete="off"
            {...register("code", {
              required: true,
              maxLength: 5,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
            defaultValue={isGetData.code}
          />
          {errors.code?.type === "required" && (
            <span className="text-danger">Dato requerido</span>
          )}
          {errors.code?.type === "maxLength" && (
            <span className="text-danger">Máximo 5 caracteres</span>
          )}
          {errors.code?.type === "pattern" && (
            <span className="text-danger">Solo caracteres alfanuméricos</span>
          )}
        </div>

        <div className="form-group mb-3">
          <label>
            Nombre del medicamento
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del medicamento"
            autoComplete="off"
            {...register("name", {
              required: true,
              maxLength: 100,
              pattern: /^[a-zA-Z0-9\s]+$/,
            })}
            defaultValue={isGetData.name}
          />
          {errors.name?.type === "required" && (
            <span className="text-danger">Dato requerido</span>
          )}
          {errors.name?.type === "maxLength" && (
            <span className="text-danger">Máximo 100 caracteres</span>
          )}
          {errors.name?.type === "pattern" && (
            <span className="text-danger">Solo caracteres alfanuméricos</span>
          )}
        </div>

        <div className="form-group mb-3">
          <label>
            Dosis
            <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Dosis"
            autoComplete="off"
            {...register("dose", { required: true })}
            defaultValue={isGetData.dose}
          />
          {errors.dose && <span className="text-danger">Dato requerido</span>}
        </div>

        <div className="form-group col-md-4 mb-3">
          <label>
            Presentación
            <span className="text-danger">*</span>
          </label>
          <select
            defaultValue={isGetData.dosageForms}
            className="form-select"
            autoComplete="off"
            {...register("dosageForms", { required: true })}
          >
            <option value="">Seleccione una opción</option>
            <option value="Liquida">Líquida</option>
            <option value="Pastilla">Pastilla</option>
            <option value="Gel">Gel</option>
            <option value="Crema">Crema</option>
            <option value="Supositorio">Supositorio</option>
          </select>
          {errors.dosageForms && (
            <span className="text-danger">Dato requerido</span>
          )}
        </div>

        <div className="form-group mb-3">
          <label>Descripción</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Descripción"
            {...register("description", { required: true })}
            defaultValue={isGetData.description}
          ></textarea>
          {errors.description && (
            <span className="text-danger">Dato requerido</span>
          )}
        </div>

        <div className="form-group mb-3">
          <label>
            Cantidad
            <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Cantidad"
            {...register("quantity", {
              required: true,
              min: 1,
              max: 2147483647,
              valueAsNumber: true,
              pattern: /^\d+$/,
            })}
            defaultValue={isGetData.quantity}
          />
          {errors.quantity && (
            <span className="text-danger">Dato requerido</span>
          )}
          {errors.name?.type === "maxLength" && (
            <span className="text-danger">
              El valor ingresado excede el límite máximo de 2147483647.
            </span>
          )}
        </div>

        <div>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={() => {
                setDataMedicineFromTable({});
              }}
              disabled={!isValid}
            >
              {actionButtonModal}
            </Button>
          </Modal.Footer>
        </div>
      </form>
    </div>
  );
};
