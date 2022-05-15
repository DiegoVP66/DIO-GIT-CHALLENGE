import axios, { AxiosRequestConfig } from "axios";

export const baseURL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export const makeBackendRequest = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
      }
    : config.headers;

  return axios({ ...config, baseURL: baseURL, headers });
};
