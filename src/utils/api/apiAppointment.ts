import axios from "axios";
import { Appointment } from '../../interfaces/appointment'


const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const apiGetAppointments = async () => {
  try {
    const res = await server.get(`/appointments`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiPostAppointment = async (caseId: number, body: Appointment) => {
  try {
    const res = await server.post(`/appointments/${caseId}`, body);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiGetAppointmentById = async (caseId: number) => {
  try {
    const res = await server.get(`/appointments/${caseId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiPutAppointmentById = async (
  caseId: number,
  body: Appointment
) => {
  try {
    const res = await server.put(`/appointments/${caseId}`, body);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiDeleteAppointmentById = async (caseId: number) => {
  try {
    const res = await server.delete(`/appointments/${caseId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
