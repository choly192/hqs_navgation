import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import App from "./App";
import { store } from "./store/store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
