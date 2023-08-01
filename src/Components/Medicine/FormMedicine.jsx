import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React, { useContext} from "react";
import { GetTheAppContext } from "../../Context/AppContext";

export const FormMedicine = ({ isGetData = {} }) => {

  const {
    handleShowFloatAlter,
    handleCloseModal,
    actionButtonModal,
    setTextAlert,
    setDataFromTable,
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

      try {
        await createMedicineFunction(data);
        await getAllMedicineDataFunction(setAllDataMedicine);
        setTextAlert("Medicamento agregado exitosamente");
        handleShowFloatAlter();
      } catch (error) {
        console.error("Error al agregar el medicamento:", error);
      }
    } else if (actionButtonModal === "Editar") {
      handleCloseModal();
      setTextAlert(`Medicamento  ${data.name} actualizado exitosamente`);
      try {
        await updateMedicineFunction(data, idMedicine);
        await getAllMedicineDataFunction(setAllDataMedicine);
        handleShowFloatAlter();
      } catch (error) {
        console.error("Error al agregar el medicamento:", error);
      }
    }
  };
    return (
      
      <div>
      <form onSubmit={handleSubmit(onSubmitClick)}>

            <div className="form-group mb-3">
        <label>Clave
        <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Clave del medicamento"
          autoComplete="off"
          {...register("clave", {
            required: true,
            maxLength: 5,
            pattern: /^[a-zA-Z0-9]+$/,
          })}
          defaultValue={isGetData.key}
        />
        {errors.clave?.type === "required" && (
          <span className="text-danger">*Dato requerido</span>
        )}
        {errors.clave?.type === "maxLength" && (
          <span className="text-danger">*Máximo 5 caracteres</span>
        )}
        {errors.clave?.type === "pattern" && (
          <span className="text-danger">*Solo caracteres alfanuméricos</span>
        )}
      </div>

            <div className="form-group mb-3">
        <label>Nombre del medicamento
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
          <span className="text-danger">*El dato es requerido</span>
        )}
        {errors.name?.type === "maxLength" && (
          <span className="text-danger">*Máximo 100 caracteres</span>
        )}
        {errors.name?.type === "pattern" && (
          <span className="text-danger">
            *Solo caracteres alfanuméricos y espacios
          </span>
        )}
      </div>


      <div className="form-group mb-3">
        <label>Dosis
        <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Dosis"
          autoComplete="off"
          {...register("dosis", { required: true })}
          defaultValue={isGetData.dosageForms}
        />
        {errors.dosis && (
          <span className="text-danger">*Dato requerido</span>
        )}
      </div>

      <div className="form-group col-md-4 mb-3">
                    <label>Presentación
                    <span className="text-danger">*</span>
                    </label>
                    <select
                      defaultValue={isGetData.packaging} 
                      className="form-select"
                      autoComplete="off"
                      {...register("packaging", { required: true })}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Liquida">Liquida</option>
                      <option value="Pastilla">Pastilla</option>
                      <option value="Gel">Gel</option>
                      <option value="Crema">Crema</option>
                      <option value="Supositorio">Supositorio</option>
                    </select>
                    {errors.packaging && (
          <span className="text-danger">Dato requerido</span>
        )}
                  </div>
                

                  <div className="form-group mb-3">
        <label>Descripción
        </label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
          defaultValue={isGetData.description}
        ></textarea>
        {errors.description && (
          <span className="text-danger">*Dato requerido</span>
        )}
      </div>

      <div className="form-group mb-3">
      <label>Cantidad</label>
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
        <span className="text-danger">*Dato requerido</span>
      )}
      {errors.name?.type === "maxLength" && (
          <span className="text-danger">Límite superado</span>
        )}
    </div>
      
    <div>
      <Modal.Footer>
      <Button
              type="submit"
              onClick={() => {
                setDataFromTable({});
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

  