import { createBrowserRouter } from "react-router-dom";
import { LayoutPrincipal, LayoutSecundary } from "../layouts";
import { LoginPage, RegisterPage, PanelPage } from "../pages";
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
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <LayoutSecundary />{" "}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <PanelPage />,
      },
    ],
  },
]);
