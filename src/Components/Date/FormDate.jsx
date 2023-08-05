import React, {  useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { GetTheAppContext } from "../../Context/AppContext";
import { Typeahead } from "react-bootstrap-typeahead";
import { statusCreated, statusUpdated, statusBeforeToday
} from "./HTTPStatus.js";

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
    
    if (actionButtonModal === "Agregar") {
      handleCloseModal();
      const responseCreateDate = await createDateFunction(data);
      console.log(responseCreateDate);
      if (responseCreateDate.status === statusCreated) {
        await getAllDateDataFunction(setAllDataDate);
        setTextAlert("Cita agregada exitosamente");
        handleShowFloatAlter();  
      }else if(responseCreateDate.status === statusBeforeToday){
        setTextAlert("No se puede crear una cita antes de la fecha y hora actual");
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al agregar una cita");
        handleShowFloatAlter();
      }
    } else if (actionButtonModal === "Editar") {
      handleCloseModal();

      const responseUpdateDate = await updateDateFunction(
        data,
        idDate
      );
      if (responseUpdateDate.status === statusUpdated ) {
        setTextAlert(`Cita con fecha ${data.date} actualizada exitosamente`);
        await getAllDateDataFunction(setAllDataDate);
        handleShowFloatAlter();
      } else {
        setTextAlert("Error al actualizar cita");
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
        defaultInputValue={isGetData.name}
        
        
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
        defaultInputValue={isGetData.name}
        
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
            defaultValue={isGetData.hour}
            className="form-select"
            autoComplete="off"
            {...register("hour", { required: true })}
          >
            <option value="">Seleccione una opción</option>
            <option value="EIGHT_AM">8:00-8:59 AM</option>
            <option value="NINE_AM">9:00-9:59 AM</option>
            <option value="TEN_AM">10:00-10:59 AM</option>
            <option value="ELEVEN_AM">11:00-11:59 AM</option>
            <option value="TWELVE_PM">12:00-12:59 PM</option>
            <option value="ONE_PM">1:00-1:59 PM</option>
            <option value="TWO_PM">2:00-2:59 PM</option>
            <option value="THREE_PM">3:00-3:59 PM</option>
            <option value="FOUR_PM">4:00-4:59 PM</option>
            <option value="FIVE_PM">5:00-5:59 PM</option>
            <option value="SIX_PM">6:00-6:59 PM</option>
            <option value="SEVEN_PM">7:00-7:59 PM</option>
            <option value="EIGHT_PM">8:00-8:59 PM</option>

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