import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiBell,
  FiSliders,
  FiTruck,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

function AppSidebar() {
  const navItems = [
    { to: "/app/dashboard", label: "Dashboard", icon: <FiGrid /> },
    { to: "/app/projects", label: "Projects", icon: <FiFolder /> },
    { to: "/app/alerts", label: "Alerts", icon: <FiBell /> },
    { to: "/app/simulation", label: "Simulation", icon: <FiSliders /> },
    { to: "/app/vendors", label: "Vendors", icon: <FiTruck /> },
    { to: "/app/reports", label: "Reports", icon: <FiFileText /> },
    { to: "/app/settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <aside className="app-sidebar glass-card">
      <div className="app-sidebar-brand">
        <div className="brand-mark">
          <span className="brand-core"></span>
        </div>
        <div>
          <h3>PRISM-GRID</h3>
          <p>Intelligence Suite</p>
        </div>
      </div>

      <div className="app-sidebar-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default AppSidebar;