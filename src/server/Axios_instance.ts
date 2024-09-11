"use server";

import axios, { AxiosError, HeadersDefaults } from "axios";
import Cookies from "js-cookie";

const PUBLIC_API = process.env.NEXT_APP_PUBLIC_KEY as string;
export const BlogAPI = axios.create();

BlogAPI.defaults.baseURL = PUBLIC_API;

type headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
  [key: string]: string;
};

BlogAPI.defaults.headers = {
  "Content-Type": "application/json;",
  Accept: "application/json",
} as headers & HeadersDefaults;

let refreshFlag = false;
let failedQueue: any[] = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

BlogAPI.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access-token") ?? null;
    if (token && config.headers) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BlogAPI.interceptors.response.use(
  (res) => res,
  async (err) => {
    const request = err.config;
    if (err.response?.status === 401 && !request._retry) {
      if (refreshFlag) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            request.headers["Authorization"] = `Bearer ${token}`;
            return BlogAPI(request);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }
    }
    request._retry = true;
    refreshFlag = true;

    const refreshToken = Cookies.get("refresh-token") ?? null;
    if (!refreshToken) {
      return Promise.reject(err);
    }
  }
);

export default BlogAPI;
