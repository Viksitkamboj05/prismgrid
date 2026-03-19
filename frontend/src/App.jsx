import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectDetailsPage from "./pages/Projects/ProjectDetailsPage";
import AlertsPage from "./pages/Alerts/AlertsPage";
import SimulationPage from "./pages/Simulation/SimulationPage";
import VendorsPage from "./pages/Vendors/VendorsPage";
import ReportsPage from "./pages/Reports/ReportsPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/app" element={<AppLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="simulation" element={<SimulationPage />} />
        <Route path="vendors" element={<VendorsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;