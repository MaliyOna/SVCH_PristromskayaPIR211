import { func } from "prop-types";
import {api} from "./api";

export async function getAll() {
  const response = await api.get(`/all`);
  return response.data.data;
}

export async function create(element) {
  const response = await api.post(`/all`, {element: element});
  return response.data.data;
}

export async function update(element) {
  const response = await api.put(`/all`, {element: element});
  return response.data.data;
}

export async function deleteElement(id) {
  const response = await api.delete(`/all/${id}`);
  return response.data.data;
}
