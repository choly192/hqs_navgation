/**
 * 请求封装
 */
import axios from "axios";
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestConfig, RequestInterceptors } from "./http.type";

class HttpRequest {
  // 创建 axios实例
  private instance: AxiosInstance;

  // interceptor object
  private interceptorsObj: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config?.interceptors ?? {};

    // 封装拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log("global request interceptors");
        return res;
      },
      (err: any) => err
    );

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptorCatch,
      this.interceptorsObj?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorCatch
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log("global response interceptors");
        return res.data;
      },
      (err: any) => err
    );
  }

  public request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }

          resolve(res);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}

const BASE_URL = "https://cnodejs.org/api/v1";
const http = new HttpRequest({
  baseURL: BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    //request interceptor
    requestInterceptors: config => {
      console.log("实例请求拦截器");
      return config;
    },
    responseInterceptors: response => {
      console.log("实例响应拦截器");
      return response;
    },
  },
});

export default http;
