import PageHeader from "../../components/common/PageHeader";
import "../../styles/pages.css";

function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Manage account preferences, alert rules, and interface behavior."
        action={<button className="primary-btn">Save Changes</button>}
      />

      <div className="settings-grid">
        <div className="info-card glass-card">
          <h3>Profile</h3>
          <div className="settings-form">
            <input type="text" value="Vineet Singh Saini" readOnly />
            <input type="email" value="vineet@example.com" readOnly />
            <input type="text" value="Project Admin" readOnly />
          </div>
        </div>

        <div className="info-card glass-card">
          <h3>Notifications</h3>
          <div className="settings-switches">
            <label>
              <input type="checkbox" defaultChecked />
              <span>Email alerts</span>
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              <span>Dashboard notifications</span>
            </label>

            <label>
              <input type="checkbox" />
              <span>Weekly intelligence summary</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;