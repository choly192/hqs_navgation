import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "./aside/Aside";
import "static/css/aside.less";

const AsideLayout = () => {
  return (
    <section className="flex">
      <Aside />
      <Outlet />
    </section>
  );
};
export default AsideLayout;
