import PageHeader from "../../components/common/PageHeader";
import { vendors } from "../../data/mockData";
import "../../styles/pages.css";

function VendorsPage() {
  return (
    <div>
      <PageHeader
        title="Vendor Risk Scoring"
        subtitle="Track supplier reliability, delivery consistency, and compliance exposure."
        action={<button className="primary-btn">Export Summary</button>}
      />

      <div className="table-card glass-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Reliability</th>
                <th>Delayed Deliveries</th>
                <th>Cost Deviation</th>
                <th>Compliance Issues</th>
                <th>Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.name}>
                  <td>{vendor.name}</td>
                  <td>{vendor.reliability}</td>
                  <td>{vendor.delayedDeliveries}</td>
                  <td>{vendor.costDeviation}</td>
                  <td>{vendor.complianceIssues}</td>
                  <td>
                    <span className={`severity-pill ${vendor.riskLevel.toLowerCase()}`}>
                      {vendor.riskLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VendorsPage;