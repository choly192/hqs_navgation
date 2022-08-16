/**
 * test api 管理
 */
import http from "../http";

import { RequestConfig } from "../http.type";

interface CommonRequestConfig<T> extends RequestConfig {
  data?: T;
}

interface CommonResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

const serverRequest = <D, T = any>(options: CommonRequestConfig<D>) => {
  const { method = "GET" } = options;
  if (method.toUpperCase() === "GET") {
    options.params = options.data;
    // options.url = options.url;
  }
  return http.request<CommonResponse<T>>(options);
};

export { serverRequest };
