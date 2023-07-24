import { GET_DOCTORS, GET_DOCTOR } from "../type";

const initialState = {
  Doctors: [],
  selectedDoctor: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_DOCTORS:
      return {
        ...state,
        Doctors: payload,
      };

    case GET_DOCTOR:
      return {
        ...state,
        selectedDoctor: payload,
      };

    default:
      return state;
  }
}
