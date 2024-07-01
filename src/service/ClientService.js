import axios from "axios";
import { CLIENTS_API } from "../common/config";

const CLIENTS = CLIENTS_API;

export const fetchClientsWithQueryAPI = async (query) => {
  const API = CLIENTS;
  const options = { ...query };

  const response = await axios.get(API, { params: options });
  return Promise.resolve(response.data);
};

export const fetchClientsByIdAPI = async (id) => {
  const API = `${CLIENTS}/${id}`;

  const response = await axios.get(API);
  return Promise.resolve(response.data);
};

export const saveClientAPI = async (client) => {
  const API = `${CLIENTS}`;

  const response = await axios.post(API, client);
  return Promise.resolve(response.data);
};

export const updateClientsByIdAPI = async (id, client) => {
  const API = `${CLIENTS}/${id}`;

  const response = await axios.put(API, client);
  return Promise.resolve(response.data);
};

export const deleteClientsByIdAPI = async (id) => {
  const API = `${CLIENTS}/${id}`;

  const response = await axios.delete(API);
  return Promise.resolve(response.data);
};
