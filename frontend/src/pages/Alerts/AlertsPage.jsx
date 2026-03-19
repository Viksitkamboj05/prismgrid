import PageHeader from "../../components/common/PageHeader";
import { alerts } from "../../data/mockData";
import "../../styles/pages.css";

function AlertsPage() {
  return (
    <div>
      <PageHeader
        title="Risk Alerts"
        subtitle="Track issues, identify root causes, and surface recommended actions early."
      />

      <div className="alerts-grid">
        {alerts.map((alert) => (
          <div className="alert-card glass-card" key={alert.id}>
            <div className="alert-top">
              <div>
                <h3>{alert.title}</h3>
                <p>{alert.project}</p>
              </div>
              <span className={`severity-pill ${alert.severity.toLowerCase()}`}>
                {alert.severity}
              </span>
            </div>

            <div className="alert-body">
              <p><strong>Reason:</strong> {alert.reason}</p>
              <p><strong>Recommendation:</strong> {alert.recommendation}</p>
            </div>

            <div className="alert-bottom">
              <span>{alert.time}</span>
              <button className="secondary-btn">Review Alert</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertsPage;