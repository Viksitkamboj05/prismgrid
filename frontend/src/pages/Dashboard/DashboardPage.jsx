import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";
import {
    dashboardStats,
    riskTrendData,
    projectDistribution,
    costForecastData,
    projects,
    alerts,
} from "../../data/mockData";
import "../../styles/dashboard.css";

function DashboardPage() {
    return (
        <div>
            <PageHeader
                title="Executive Dashboard"
                subtitle="A real-time overview of project performance, risk movement, and actionable intelligence."
                action={<button className="primary-btn">Generate Snapshot</button>}
            />

            <div className="stats-grid">
                {dashboardStats.map((item) => (
                    <StatCard key={item.title} {...item} />
                ))}
            </div>

            <div className="dashboard-grid-two">
                <div className="chart-card glass-card">
                    <div className="card-head">
                        <h3>Risk Trend Overview</h3>
                        <p>Portfolio movement across recent periods</p>
                    </div>

                    <div className="chart-box">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={riskTrendData}>
                                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                                <XAxis dataKey="month" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip />
                                <Line type="monotone" dataKey="risk" stroke="#6d93ff" strokeWidth={2.5} dot={false} />
                                <Line type="monotone" dataKey="delay" stroke="#67d4ff" strokeWidth={2.5} dot={false} />
                                <Line type="monotone" dataKey="cost" stroke="#ffcb70" strokeWidth={2.5} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card glass-card">
                    <div className="card-head">
                        <h3>Project Risk Distribution</h3>
                        <p>Current spread across all active initiatives</p>
                    </div>

                    <div className="chart-box">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={projectDistribution}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    dataKey="value"
                                    label
                                >
                                    <Cell fill="#6ee7a8" />
                                    <Cell fill="#ffcb70" />
                                    <Cell fill="#ff7f8e" />
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid-two">
                <div className="chart-card glass-card">
                    <div className="card-head">
                        <h3>Planned vs Actual Cost</h3>
                        <p>Portfolio cost movement snapshot</p>
                    </div>

                    <div className="chart-box">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={costForecastData}>
                                <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip />
                                <Bar dataKey="planned" fill="#6d93ff" radius={[8, 8, 0, 0]} />
                                <Bar dataKey="actual" fill="#67d4ff" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="list-card glass-card">
                    <div className="card-head">
                        <h3>Recent Alerts</h3>
                        <p>Latest risk events requiring attention</p>
                    </div>

                    <div className="alert-mini-list">
                        {alerts.slice(0, 4).map((alert) => (
                            <div className="alert-mini-item" key={alert.id}>
                                <div>
                                    <h4>{alert.title}</h4>
                                    <p>{alert.project}</p>
                                </div>
                                <span className={`severity-pill ${alert.severity.toLowerCase()}`}>
                                    {alert.severity}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="table-card glass-card">
                <div className="card-head">
                    <h3>High Visibility Projects</h3>
                    <p>Priority programs with active monitoring</p>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Risk Score</th>
                                <th>Delay Probability</th>
                                <th>Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.slice(0, 4).map((project) => (
                                <tr key={project.id}>
                                    <td>{project.name}</td>
                                    <td>{project.location}</td>
                                    <td>{project.status}</td>
                                    <td>{project.riskScore}</td>
                                    <td>{project.delayProbability}%</td>
                                    <td>{project.budget}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;