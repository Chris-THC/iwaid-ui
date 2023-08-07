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
    doctorName,
    doctorSelected, 
    setDoctorSelected,
    patientName,
    patientSelected, 
    setPatientSelected
       
   
  } = useContext(GetTheAppContext);
  const timeOptions = [
{ value: "EIGHT_AM", label: "8:00-8:59 AM" },
{ value: "NINE_AM", label: "9:00-9:59 AM" },
{ value: "TEN_AM", label: "10:00-10:59 AM" },
{ value: "ELEVEN_AM", label: "11:00-11:59 AM" },
{ value: "TWELVE_PM", label: "12:00-12:59 PM" },
{ value: "ONE_PM", label: "1:00-1:59 PM" },
{ value: "TWO_PM", label: "2:00-2:59 PM" },
{ value: "THREE_PM", label: "3:00-3:59 PM" },
{ value: "FOUR_PM", label: "4:00-4:59 PM" },
{ value: "FIVE_PM", label: "5:00-5:59 PM" },
{ value: "SIX_PM", label: "6:00-6:59 PM" },
{ value: "SEVEN_PM", label: "7:00-7:59 PM" },
{ value: "EIGHT_PM", label: "8:00-8:59 PM" },
];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const options = doctorName
  .filter((objeto) => objeto.hasOwnProperty("name"))
  .map((objeto) => objeto.name);

  const handleOnChangeDoctor = (selected) => {
    if (selected.length > 0) {
      
      setDoctorSelected(selected);
      register("doctorId", { value: (doctorName.find((objeto) => objeto.name === selected[0]).id) });

    } else {
      setDoctorSelected([]);
    }
  };
  const optionsPatient = patientName
  .filter((objeto) => objeto.hasOwnProperty("name"))
  .map((objeto) => objeto.name);

  const handleOnChangePatient = (selected) => {
    if (selected.length > 0) {
      
      setPatientSelected(selected);
      register("patientId", { value: (patientName.find((objeto) => objeto.name === selected[0]).id) });
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
        setTextAlert("No es posible crear una cita antes de la fecha y hora actual");
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
        setTextAlert(`Cita actualizada exitosamente`);
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
        id="typehead"
        labelKey="doctor"
        onChange={handleOnChangeDoctor}
        minLength={3}
        options={options}
        selected={doctorSelected}
        placeholder="Escribe el nombre de un médico..."
        defaultInputValue={isGetData.doctorDTO?.name || ""}
        
        
      />
    </div>
        </div>

        <div className="form-group col-md-4 mb-3">
        <label>Seleccione un paciente
        <span className="text-danger">*</span>
        </label>
        <div style={{ width: '300px', margin: '0 auto', paddingTop: '20px' }}>
      <Typeahead
        id="typehead"
        labelKey="patient"
        onChange={handleOnChangePatient}
        minLength={3}
        options={optionsPatient}
        selected={patientSelected}
        placeholder="Escribe el nombre de un paciente..."
        defaultInputValue={isGetData.patientDTO?.name || ""}
        
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
            {timeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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