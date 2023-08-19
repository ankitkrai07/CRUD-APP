import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Admin } from "./Admin";
import { Login } from "./Login";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h2>404 Page not found!</h2>} />
    </Routes>
  );
};
