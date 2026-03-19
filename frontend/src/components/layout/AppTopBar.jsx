import { FiSearch, FiBell } from "react-icons/fi";

function AppTopbar() {
  return (
    <header className="app-topbar glass-card">
      <div className="topbar-search">
        <FiSearch />
        <input type="text" placeholder="Search projects, alerts, vendors..." />
      </div>

      <div className="topbar-right">
        <button className="topbar-icon-btn">
          <FiBell />
        </button>

        <div className="topbar-user">
          <div className="topbar-avatar">VS</div>
          <div>
            <h4>Vineet</h4>
            <p>Project Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppTopbar;