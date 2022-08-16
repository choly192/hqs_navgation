import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RequestInterceptors {
  // request interceptor
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;

  // response interceptor
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

// customer definitely params
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}
