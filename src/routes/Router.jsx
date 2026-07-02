import { createBrowserRouter } from "react-router-dom";
import { LayoutPrincipal, LayoutSecundary } from "../layouts";
import {
  LoginPage,
  RegisterPage,
  PanelPage,
  SurvivorsPage,
  AdminPage,
  NotFoundPage,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <LayoutPrincipal />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/survivors",
        element: <SurvivorsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <LayoutSecundary />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <PanelPage />,
      },

      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);
