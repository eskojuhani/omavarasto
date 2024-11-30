/*
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";
*/
export const getPublicContent = () => {
  const data = {
    data: "Warehouses"
  };
  return Promise.resolve(data);

  //return axios.get(API_URL + "all", { headers: authHeader() });
};

export const getUserStorages = () => {
  const data = {
    data: [
      {"id": 1, "name": "Alfa"},
      {"id": 2, "name": "Beta"}
    ]
  };
  return Promise.resolve(data);
  //return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getStorageItems = () => {
  const data = {
    data: [
      {"id": 1, "name": "A1", "amount": "1"},
      {"id": 2, "name": "B2", "amount": "2"}
    ]
  };
  return Promise.resolve(data);
  //return axios.get(API_URL + "user", { headers: authHeader() });
};
