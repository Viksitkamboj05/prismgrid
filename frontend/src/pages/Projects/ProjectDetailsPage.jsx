import { useParams } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { projects } from "../../data/mockData";
import "../../styles/pages.css";

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id) || projects[0];

  return (
    <div>
      <PageHeader
        title={project.name}
        subtitle={project.description}
        action={<button className="primary-btn">Run Simulation</button>}
      />

      <div className="details-grid">
        <div className="details-main">
          <div className="info-card glass-card">
            <h3>Project Overview</h3>
            <div className="info-grid">
              <div><span>Location</span><strong>{project.location}</strong></div>
              <div><span>Status</span><strong>{project.status}</strong></div>
              <div><span>Budget</span><strong>{project.budget}</strong></div>
              <div><span>Spent</span><strong>{project.spent}</strong></div>
              <div><span>Deadline</span><strong>{project.deadline}</strong></div>
              <div><span>Manager</span><strong>{project.manager}</strong></div>
            </div>
          </div>

          <div className="info-card glass-card">
            <h3>Risk Drivers</h3>
            <div className="tag-list">
              {project.mainRiskFactors.map((item) => (
                <span key={item} className="soft-tag">{item}</span>
              ))}
            </div>
          </div>

          <div className="info-card glass-card">
            <h3>Recommended Actions</h3>
            <ul className="details-list">
              {project.recommendations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-card glass-card">
            <h3>Project Illustration</h3>
            <div className="image-placeholder">
              <p>Paste project visual here</p>
              <span>
                Prompt: premium infrastructure project visualization dashboard image, metro line
                construction project with futuristic analytics overlay, dark blue enterprise style,
                elegant and realistic
              </span>
            </div>
          </div>
        </div>

        <div className="details-side">
          <div className="metric-box glass-card">
            <span>Risk Score</span>
            <h2>{project.riskScore}</h2>
          </div>

          <div className="metric-box glass-card">
            <span>Delay Probability</span>
            <h2>{project.delayProbability}%</h2>
          </div>

          <div className="metric-box glass-card">
            <span>Progress</span>
            <h2>{project.progress}%</h2>
          </div>

          <div className="metric-box glass-card">
            <span>Cost Overrun Estimate</span>
            <h2>{project.costOverrunEstimate}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;