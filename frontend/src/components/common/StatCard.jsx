function StatCard({ title, value, change, type = "primary" }) {
  return (
    <div className={`stat-card glass-card ${type}`}>
      <span>{title}</span>
      <h3>{value}</h3>
      <p>{change}</p>
    </div>
  );
}

export default StatCard;