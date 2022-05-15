import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { getAuthData } from "./storage";
type LoginData = {
  username: string;
  password: string;
};

export const baseURL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "diego";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "diego123";

export const makeBackendRequest = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: baseURL, headers });
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: baseURL,
    url: "/oauth/token",
    data,
    headers,
  });
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      console.log("error");
    }
    return Promise.reject(error);
  }
);
