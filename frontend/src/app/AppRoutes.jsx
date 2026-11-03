import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import NotFound from "../pages/public/NotFound";

// Authentication pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyEmail from "../pages/auth/VerifyEmail";

// Dashboard pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import GovernmentDashboard from "../pages/government/GovernmentDashboard";
import StartupDashboard from "../pages/startup/StartupDashboard";
import ExpertDashboard from "../pages/expert/ExpertDashboard";

import ProtectedRoute from "../routes/ProtectedRoute";
import RoleRoute from "../routes/RoleRoute";

import { ROLES } from "../constants/roles";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* Protected dashboard routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/admin/dashboard"
          element={
            <RoleRoute allowedRoles={[ROLES.ADMIN]}>
              <AdminDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/government/dashboard"
          element={
            <RoleRoute allowedRoles={[ROLES.GOVERNMENT]}>
              <GovernmentDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/startup/dashboard"
          element={
            <RoleRoute allowedRoles={[ROLES.STARTUP]}>
              <StartupDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/expert/dashboard"
          element={
            <RoleRoute allowedRoles={[ROLES.EXPERT]}>
              <ExpertDashboard />
            </RoleRoute>
          }
        />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;