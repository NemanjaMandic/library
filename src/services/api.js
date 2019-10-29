// @Flow

import Network from "./network";

const BASE_URL = `http://localhost:3001`;

export const getBooksAPI = () => Network.get(`${BASE_URL}/books`);

export const selectBookAPI = (id: string) =>
  Network.get(`${BASE_URL}/books/${id}`);

export const submitBookAPI = (data: any) =>
  Network.post(`${BASE_URL}/books`, data);

export const updateBookAPI = (data: any) =>
  Network.put(`${BASE_URL}/books`, data);
