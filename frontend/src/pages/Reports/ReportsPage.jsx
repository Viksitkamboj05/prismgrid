import PageHeader from "../../components/common/PageHeader";
import { reports } from "../../data/mockData";
import "../../styles/pages.css";

function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Reports"
        subtitle="Access summarized intelligence views, forecasting snapshots, and export-ready analysis."
        action={<button className="primary-btn">Create Report</button>}
      />

      <div className="reports-grid">
        {reports.map((report) => (
          <div className="report-card glass-card" key={report.title}>
            <div>
              <h3>{report.title}</h3>
              <p>{report.subtitle}</p>
            </div>

            <div className="report-bottom">
              <span className={`severity-pill ${report.status === "Ready" ? "low" : "medium"}`}>
                {report.status}
              </span>
              <button className="secondary-btn">Open Report</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportsPage;