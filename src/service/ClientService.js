import axios from "axios";

const BASE_URL = "http://localhost:3001";
const CLIENTS = `${BASE_URL}/v1/clients`;

export const fetchClientsWithQueryAPI = async (query) => {
  const API = CLIENTS;
  const options = { ...query, es: true };

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
