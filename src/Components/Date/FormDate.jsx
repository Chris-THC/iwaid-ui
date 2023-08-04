import React, {  useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { Typeahead } from "react-bootstrap-typeahead";


export const FormCitas = ({ isGetData = {} }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const {
    handleShowFloatAlter,
    handleCloseModal,
    actionButtonModal,
    setTextAlert,
    setGetDataFromTable,
    createDateFunction,
    getAllDateDataFunction,
    setAllDataDate,
    updateDateFunction,
    idDate,
    doctorDataName,
    doctorSelected, 
    setDoctorSelected,
    patientDataName,
    patientSelected, 
    setPatientSelected
       
   
  } = useContext(GetTheAppContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const options = doctorDataName
  .filter((objeto) => objeto.hasOwnProperty("name"))
  .map((objeto) => objeto.name);

  const handleOnChangeDoctor = (selected) => {
    if (selected.length > 0) {
      
      setDoctorSelected(selected);
      register("doctorId", { value: (doctorDataName.find((objeto) => objeto.name === selected[0]).id) });

    } else {
      setDoctorSelected([]);
    }
  };
  const optionsPatient = patientDataName
  .filter((objeto) => objeto.hasOwnProperty("name"))
  .map((objeto) => objeto.name);

  const handleOnChangePatient = (selected) => {
    if (selected.length > 0) {
      
      setPatientSelected(selected);
      register("patientId", { value: (doctorDataName.find((objeto) => objeto.name === selected[0]).id) });
    } else {
      setPatientSelected([]);
    }
  };



  const onSubmitClick = async (data) => {
    console.log(data);
    if (actionButtonModal === "Agregar") {
      handleCloseModal();
      const CreateDateResponse = await createDateFunction(data);

      if (CreateDateResponse.status === 201) {
        await getAllDateDataFunction(setAllDataDate);
        setTextAlert("Paciente agregado exitosamente");
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al agregar al paciente");
        handleShowFloatAlter();
      }
    } else if (actionButtonModal === "Editar") {
      handleCloseModal();
      const updateDateResponse = await updateDateFunction(
        data,
        idDate
      );

      if (updateDateResponse.status === 201) {
        setTextAlert(`Paciente ${data.name} actualizado exitosamente`);
        await getAllDateDataFunction(setAllDataDate);
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al actualizar al paciente");
        handleShowFloatAlter();
      }
    }
    
  };

  return (
    <div>
      

      <form onSubmit={handleSubmit(onSubmitClick)}>
        <div className="form-group mb-3">

        <div className="form-group col-md-4 mb-3">
          <label>Seleccione un médico
          <span className="text-danger">*</span>
          </label>
          <div style={{ width: '300px', margin: '0 auto', paddingTop: '20px' }}>
      <Typeahead
        id="Doctor-typehead"
        labelKey="doctor"
        onChange={handleOnChangeDoctor}
        options={options}
        selected={doctorSelected}
        placeholder="Escribe el nombre de un médico..."
        defaultInputValue={isGetData.doctorDTO.name}
        
        
      />
    </div>
        </div>

        <div className="form-group col-md-4 mb-3">
        <label>Seleccione un paciente
        <span className="text-danger">*</span>
        </label>
        <div style={{ width: '300px', margin: '0 auto', paddingTop: '20px' }}>
      <Typeahead
        id="patient-typehead"
        labelKey="patient"
        onChange={handleOnChangePatient}
        options={optionsPatient}
        selected={patientSelected}
        placeholder="Escribe el nombre de un paciente..."
        defaultInputValue={isGetData.patientDTO.name}
        
      />
      
    </div>
        </div>

          <div className="form-group col-md-8">
            <label>Fecha de cita</label>
            <span className="text-danger">*</span>
            <input
              defaultValue={isGetData.date}
              type="date"
              className="form-control"
              autoComplete="off"
              {...register("date", {
                required: true,
                min: {
                  value: currentDate,
                },
              })}
            />
            {errors.date && (
              <span className="text-danger">
                Dato requerido o la fecha no puede ser inferior a la fecha actual
              </span>
            )}
          </div>
        </div>


        <div className="form-group col-md-4 mb-3">
          <label>Seleccione horario</label>
          <span className="text-danger">*</span>
          <select
            defaultValue={isGetData.time}
            className="form-select"
            autoComplete="off"
            {...register("time", { required: true })}
          >
            <option value="">Seleccione una opción</option>
            <option value="8:00 AM">8:00-9:00 AM</option>
            {/* Resto de opciones */}
          </select>
          {errors.time && <span className="text-danger">Dato requerido</span>}
        </div>

        <div className="form-group mb-3">
          <label>Anotaciones</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Notas"
            {...register("notes", { required: true })}
            defaultValue={isGetData.notes}
          ></textarea>
          {errors.notes && (
            <span className="text-danger">*Dato requerido</span>
          )}
        </div>

        <div>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={() => {
                setGetDataFromTable({});
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