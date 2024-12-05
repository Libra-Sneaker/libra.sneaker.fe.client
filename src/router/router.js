import DefaultLayout from "../layout/DefaultLayout";
import MiddlewareRouter from "../middleware/AuthGuard";
import NotAuthorized from "../pages/401";
import Forbidden from "../pages/403";
import NotFound from "../pages/404";
import Oops from "../pages/500";
import BrandManagement from "../pages/brandManagement/BrandManagement";
import NotAceptable from "../pages/not-aceptable";
import React from "react";
import { Navigate } from "react-router-dom";
import { SCREEN } from "./screen";

const generalRoutes = [
  { path: "*", element: <NotFound /> },
  { path: "/not-found", element: <NotFound /> },
  { path: "/not-authorization", element: <NotAuthorized /> },
  { path: "/forbidden", element: <Forbidden /> },
  { path: "/error", element: <Oops /> },
  { path: "/not-aceptable/*", element: <NotAceptable /> },
];

const adminRoutes = [
  { path: "/", element: <Navigate replace to={SCREEN.brandManagement.path} /> },
  {
    path: SCREEN.brandManagement.path,
    element: (
      <MiddlewareRouter>
        <DefaultLayout>
          <BrandManagement />
        </DefaultLayout>
      </MiddlewareRouter>
    ),
  },
];

const routes = [...generalRoutes, ...adminRoutes];

export default routes;
