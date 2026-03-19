import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { projects } from "../../data/mockData";
import "../../styles/pages.css";

function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="Monitor active programs, their current progress, and risk performance."
        action={<button className="primary-btn">Add Project</button>}
      />

      <div className="filters-row glass-card">
        <input type="text" placeholder="Search project..." />
        <select>
          <option>All Risk Levels</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <select>
          <option>All Status</option>
          <option>Active</option>
          <option>Monitoring</option>
          <option>Stable</option>
        </select>
      </div>

      <div className="table-card glass-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Location</th>
                <th>Status</th>
                <th>Budget</th>
                <th>Deadline</th>
                <th>Risk</th>
                <th>Delay %</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.location}</td>
                  <td>{project.status}</td>
                  <td>{project.budget}</td>
                  <td>{project.deadline}</td>
                  <td>
                    <span className={`severity-pill ${project.riskLevel.toLowerCase()}`}>
                      {project.riskLevel}
                    </span>
                  </td>
                  <td>{project.delayProbability}%</td>
                  <td>
                    <Link to={`/app/projects/${project.id}`} className="table-link-btn">
                      View Details
                    </Link>
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

export default ProjectsPage;