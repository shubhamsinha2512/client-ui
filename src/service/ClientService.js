import axios from "axios";

const BASE_URL = "http://localhost:3001";
const CLIENTS = `${BASE_URL}/v1/clients`;

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
