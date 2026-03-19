import { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import "../../styles/pages.css";

function SimulationPage() {
  const [budget, setBudget] = useState(10);
  const [vendor, setVendor] = useState(65);
  const [manpower, setManpower] = useState(70);
  const [timeline, setTimeline] = useState(12);

  const simulatedRisk = Math.max(28, 90 - budget * 0.8 - vendor * 0.22 - manpower * 0.18 + timeline * 0.9);
  const delay = Math.max(20, 84 - budget * 0.6 - manpower * 0.2 - vendor * 0.18 + timeline * 0.75);
  const overrun = Math.max(0.2, 3.8 - budget * 0.05 - vendor * 0.02);

  return (
    <div>
      <PageHeader
        title="Scenario Simulation"
        subtitle="Adjust critical variables to estimate how risk and project outcomes may change."
      />

      <div className="simulation-grid">
        <div className="simulation-panel glass-card">
          <h3>Input Variables</h3>

          <div className="simulation-input-block">
            <div className="simulation-input-head">
              <label>Budget Increase (%)</label>
              <span className="simulation-value">{budget}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
          </div>

          <div className="simulation-input-block">
            <div className="simulation-input-head">
              <label>Vendor Reliability</label>
              <span className="simulation-value">{vendor}</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={vendor}
              onChange={(e) => setVendor(Number(e.target.value))}
            />
          </div>

          <div className="simulation-input-block">
            <div className="simulation-input-head">
              <label>Manpower Availability</label>
              <span className="simulation-value">{manpower}</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={manpower}
              onChange={(e) => setManpower(Number(e.target.value))}
            />
          </div>

          <div className="simulation-input-block">
            <div className="simulation-input-head">
              <label>Timeline Pressure</label>
              <span className="simulation-value">{timeline}</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              value={timeline}
              onChange={(e) => setTimeline(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="simulation-results">
          <div className="metric-box glass-card">
            <span>Simulated Risk Score</span>
            <h2>{simulatedRisk.toFixed(0)}</h2>
          </div>

          <div className="metric-box glass-card">
            <span>Predicted Delay Probability</span>
            <h2>{delay.toFixed(0)}%</h2>
          </div>

          <div className="metric-box glass-card">
            <span>Estimated Cost Overrun</span>
            <h2>₹{overrun.toFixed(1)}Cr</h2>
          </div>

          <div className="info-card glass-card">
            <h3>Interpretation</h3>
            <p>
              Increasing budget flexibility and improving vendor reliability meaningfully reduce
              predicted project risk. High timeline pressure sharply increases delay exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimulationPage;