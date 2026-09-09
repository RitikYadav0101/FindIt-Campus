import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import ReportLost from "./pages/ReportLost";
import ReportFound from "./pages/ReportFound";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";

import ProtectedRoute from "./pages/components/ProtectedRoute";
import PublicRoute from "./pages/components/PublicRoute";

function App() {
  return (
    <Routes>

      {/* ================= HOME ================= */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />


      {/* ================= LOGIN ================= */}

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />


      {/* ================= SIGNUP ================= */}

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />


      {/* ================= LOST ITEMS ================= */}

      <Route
        path="/lost"
        element={
          <ProtectedRoute>
            <Lost />
          </ProtectedRoute>
        }
      />


      {/* ================= FOUND ITEMS ================= */}

      <Route
        path="/found"
        element={
          <ProtectedRoute>
            <Found />
          </ProtectedRoute>
        }
      />


      {/* ================= REPORT LOST ================= */}

      <Route
        path="/report-lost"
        element={
          <ProtectedRoute>
            <ReportLost />
          </ProtectedRoute>
        }
      />


      {/* ================= REPORT FOUND ================= */}

      <Route
        path="/report-found"
        element={
          <ProtectedRoute>
            <ReportFound />
          </ProtectedRoute>
        }
      />


      {/* ================= MATCHES ================= */}

      <Route
        path="/matches"
        element={
          <ProtectedRoute>
            <Matches />
          </ProtectedRoute>
        }
      />


      {/* ================= PROFILE ================= */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />


      {/* ================= UNKNOWN ROUTE ================= */}

      <Route
        path="*"
        element={
          <Navigate to="/" replace />
        }
      />

    </Routes>
  );
}

export default App;