import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import AppTopbar from "./AppTopbar";
import "../../styles/appLayout.css";

function AppLayout() {
  return (
    <div className="app-shell">
      <AppSidebar />

      <div className="app-main">
        <AppTopbar />
        <div className="app-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;