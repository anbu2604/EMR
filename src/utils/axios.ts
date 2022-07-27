import axios, { Axios } from "axios";

export const instance: Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_TIMEOUT ? parseInt(process.env.REACT_APP_TIMEOUT) : 5000
});

export const setToken = (token: string) =>
  (instance.defaults.headers.common["Authorization"] = token);

export const removeToken = () => (instance.defaults.headers.common["Authorization"] = "");