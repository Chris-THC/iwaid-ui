import axios from "axios";
import { URL_API_BACKEND } from "../config/config.js";

const doctorURL = `${URL_API_BACKEND}/auth/login`;

export const LoginFuntion = async (arrayData) => {
  try {
    const response = await axios.post(doctorURL, arrayData);
    return response;
  } catch (error) {
    return error;
  }
};
