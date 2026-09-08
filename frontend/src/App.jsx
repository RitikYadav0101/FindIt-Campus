import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./pages/components/ProtectedRoute";function App() {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return (
    <Routes>

      {/* HOME - Protected */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={
          isLoggedIn
            ? <Navigate to="/" replace />
            : <Login />
        }
      />

      {/* SIGNUP */}
      <Route
        path="/signup"
        element={
          isLoggedIn
            ? <Navigate to="/" replace />
            : <Signup />
        }
      />

      {/* Unknown URL */}
      <Route
        path="*"
        element={
          <Navigate
            to={isLoggedIn ? "/" : "/login"}
            replace
          />
        }
      />

    </Routes>
  );
}

export default App;