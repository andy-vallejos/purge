import { Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, RegisterPage } from "../pages";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
