/**
 * router config
 */
import React, { Suspense, lazy, ReactElement } from "react";
import { Navigate, Outlet, RouteObject, useRoutes } from "react-router-dom";
import Layout from "../layouts/Layout";
import AsideLayout from "../layouts/AsideLayout";
import { NotFound, Spin } from "../components";

const Home = lazy(() => import("../features/home/Home"));
const FrequentlyGuide = lazy(() => import("../features/frequently-guide/FrequentlyGuide"));
const CodeLanguage = lazy(() => import("../features/code-language/CodeLanguage"));

// 设置每个页面的 title 和Suspense
const WrapperComponent = (title: string, Component: ReactElement) => {
  document.title = title;
  return <Suspense fallback={<Spin />}>{Component}</Suspense>;
};

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: WrapperComponent("导航首页", <Home />),
  },
  {
    path: "/nav",
    element: <Layout />,
    children: [
      {
        index: true,
        element: WrapperComponent("常用导航地址", <FrequentlyGuide />),
      },
      {
        path: "code",
        element: <AsideLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <Navigate to={`/nav/code/fronted`} />,
          },
          {
            path: ":id",
            element: WrapperComponent("编程语言", <CodeLanguage />),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const Element = () => useRoutes(routerConfig);

export default Element;
