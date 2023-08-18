import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { FormAppointment } from "../../Components/Date/FormDate";
import { FormDoctor } from "../../Components/Doctor/FormDoctor";
import { FormPatient} from "../../Components/Patient/FormPatient";
import { FormMedicine } from "../../Components/Medicine/FormMedicine";
import { FormMedicalHistory } from "../../Components/MedicalHistory/FormMedicalHistory";
import { FormMedicalPrescriptions } from "../../Components/MedicalPrescriptions/FormMedicalPrescriptions";
import { GetTheAppContext } from "../../Context/AppContext";

export const ModalGeneric = ({ show, handleClose, title, type }) => {
  const { setGetDataFromTable, getDataFromTable, actionButtonModal } =
  useContext(GetTheAppContext);
  const getFormComponent = () => {
    switch (type) {
      case 'appointment':
        return <FormAppointment isGetData={getDataFromTable} />;
      case 'doctor':
        return <FormDoctor isGetData={getDataFromTable} />;
      case 'patient':
        return <FormPatient isGetData={getDataFromTable} />;
      case 'medicine':
        return <FormMedicine isGetData={getDataFromTable} />;
      case 'medicalHistory':
        return <FormMedicalHistory isGetData={getDataFromTable} />;
      case 'medicalPrescriptions':
        return <FormMedicalPrescriptions isGetData={getDataFromTable} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => {
        handleClose();
        setGetDataFromTable({});
      }}
    >
      <Modal.Header >
        <Modal.Title>{actionButtonModal} {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {getFormComponent()}
      </Modal.Body>
    </Modal>
  );
};
