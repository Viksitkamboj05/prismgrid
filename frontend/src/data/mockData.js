export const dashboardStats = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2 this month",
    type: "primary",
  },
  {
    title: "High Risk Projects",
    value: "4",
    change: "+1 this week",
    type: "danger",
  },
  {
    title: "Avg Delay Probability",
    value: "68%",
    change: "-5% improvement",
    type: "warning",
  },
  {
    title: "Predicted Cost Overrun",
    value: "₹2.4Cr",
    change: "Across active portfolio",
    type: "success",
  },
];

export const riskTrendData = [
  { month: "Jan", risk: 42, delay: 38, cost: 30 },
  { month: "Feb", risk: 49, delay: 44, cost: 35 },
  { month: "Mar", risk: 57, delay: 51, cost: 40 },
  { month: "Apr", risk: 62, delay: 58, cost: 49 },
  { month: "May", risk: 68, delay: 63, cost: 55 },
  { month: "Jun", risk: 64, delay: 57, cost: 52 },
];

export const projectDistribution = [
  { name: "Low Risk", value: 4 },
  { name: "Medium Risk", value: 4 },
  { name: "High Risk", value: 4 },
];

export const costForecastData = [
  { name: "Metro Line", planned: 120, actual: 138 },
  { name: "Solar Grid", planned: 95, actual: 104 },
  { name: "Bridge Link", planned: 88, actual: 101 },
  { name: "Smart Highway", planned: 150, actual: 171 },
];

export const projects = [
  {
    id: "p1",
    name: "Metro Line Phase 2",
    location: "Delhi NCR",
    status: "Active",
    budget: "₹120Cr",
    spent: "₹84Cr",
    deadline: "2026-07-20",
    riskScore: 82,
    delayProbability: 71,
    costOverrunEstimate: "₹1.2Cr",
    riskLevel: "High",
    progress: 68,
    manager: "Aarav Mehta",
    description:
      "Urban mobility expansion project involving station development, rail systems integration, and vendor coordination across multiple packages.",
    mainRiskFactors: [
      "Vendor performance drop",
      "Material procurement delay",
      "Weather disruption",
    ],
    recommendations: [
      "Reallocate labor to delayed work fronts",
      "Accelerate procurement approvals",
      "Review backup vendor availability",
    ],
  },
  {
    id: "p2",
    name: "Western Solar Grid",
    location: "Rajasthan",
    status: "Active",
    budget: "₹95Cr",
    spent: "₹61Cr",
    deadline: "2026-08-14",
    riskScore: 64,
    delayProbability: 52,
    costOverrunEstimate: "₹0.7Cr",
    riskLevel: "Medium",
    progress: 57,
    manager: "Riya Sethi",
    description:
      "Renewable energy grid infrastructure project focused on large-scale solar field deployment and transmission readiness.",
    mainRiskFactors: [
      "Manpower shortage",
      "Permitting dependencies",
      "Equipment transportation risk",
    ],
    recommendations: [
      "Increase workforce in installation phase",
      "Create alternate logistics route",
      "Monitor site approvals weekly",
    ],
  },
  {
    id: "p3",
    name: "Riverfront Bridge Link",
    location: "Ahmedabad",
    status: "Monitoring",
    budget: "₹88Cr",
    spent: "₹72Cr",
    deadline: "2026-06-02",
    riskScore: 74,
    delayProbability: 61,
    costOverrunEstimate: "₹0.9Cr",
    riskLevel: "High",
    progress: 79,
    manager: "Kabir Anand",
    description:
      "Critical bridge connectivity program with concrete package dependencies, environmental checks, and phased approvals.",
    mainRiskFactors: [
      "Concrete supply inconsistency",
      "Inspection backlog",
      "Seasonal river conditions",
    ],
    recommendations: [
      "Lock reserve material stock",
      "Coordinate inspection fast-track",
      "Shift non-critical tasks earlier",
    ],
  },
  {
    id: "p4",
    name: "Smart Highway Corridor",
    location: "Mumbai-Pune",
    status: "Active",
    budget: "₹150Cr",
    spent: "₹102Cr",
    deadline: "2026-10-05",
    riskScore: 58,
    delayProbability: 46,
    costOverrunEstimate: "₹0.5Cr",
    riskLevel: "Medium",
    progress: 63,
    manager: "Vihaan Malhotra",
    description:
      "Highway modernization corridor involving sensors, signage, roadway enhancement, and coordination across smart systems vendors.",
    mainRiskFactors: [
      "Coordination overlap",
      "Utility shifting delays",
      "Scope creep risk",
    ],
    recommendations: [
      "Freeze non-essential scope additions",
      "Split critical path ownership",
      "Review vendor coordination weekly",
    ],
  },
  {
    id: "p5",
    name: "Eastern Water Network",
    location: "Kolkata",
    status: "Stable",
    budget: "₹73Cr",
    spent: "₹43Cr",
    deadline: "2026-11-18",
    riskScore: 36,
    delayProbability: 24,
    costOverrunEstimate: "₹0.2Cr",
    riskLevel: "Low",
    progress: 48,
    manager: "Ananya Roy",
    description:
      "Urban water distribution upgrade program focused on phased replacement, monitoring units, and improved civic integration.",
    mainRiskFactors: [
      "Low localized logistics risk",
      "Minor procurement dependency",
    ],
    recommendations: [
      "Maintain current monitoring cycle",
      "Preserve vendor response SLA",
    ],
  },
];

export const alerts = [
  {
    id: "a1",
    title: "High Delay Risk Detected",
    project: "Metro Line Phase 2",
    severity: "High",
    time: "10 mins ago",
    reason: "Vendor performance dropped 18% and procurement timeline slipped by 6 days.",
    recommendation: "Review backup suppliers and rebalance field workforce.",
  },
  {
    id: "a2",
    title: "Cost Escalation Warning",
    project: "Riverfront Bridge Link",
    severity: "Medium",
    time: "45 mins ago",
    reason: "Concrete package costs rose above projected monthly trend.",
    recommendation: "Audit material sourcing contracts and reserve quantities.",
  },
  {
    id: "a3",
    title: "Compliance Review Required",
    project: "Western Solar Grid",
    severity: "Medium",
    time: "2 hours ago",
    reason: "Pending site clearance may affect planned installation start.",
    recommendation: "Escalate permit follow-up and adjust task sequencing.",
  },
  {
    id: "a4",
    title: "Resource Allocation Opportunity",
    project: "Smart Highway Corridor",
    severity: "Low",
    time: "Today",
    reason: "Underutilized workforce capacity detected in non-critical segment.",
    recommendation: "Move available crew toward delayed utility shifting package.",
  },
];

export const vendors = [
  {
    name: "Axis Infra Supply",
    reliability: 89,
    delayedDeliveries: 1,
    costDeviation: "Low",
    complianceIssues: 0,
    riskLevel: "Low",
  },
  {
    name: "BuildCore Logistics",
    reliability: 62,
    delayedDeliveries: 5,
    costDeviation: "Medium",
    complianceIssues: 1,
    riskLevel: "Medium",
  },
  {
    name: "Nova Steel Partners",
    reliability: 48,
    delayedDeliveries: 7,
    costDeviation: "High",
    complianceIssues: 2,
    riskLevel: "High",
  },
  {
    name: "TerraGrid Systems",
    reliability: 76,
    delayedDeliveries: 2,
    costDeviation: "Low",
    complianceIssues: 0,
    riskLevel: "Low",
  },
];

export const reports = [
  {
    title: "Monthly Risk Intelligence Summary",
    subtitle: "Portfolio-wide risk pattern overview and mitigation suggestions",
    status: "Ready",
  },
  {
    title: "Cost Overrun Forecast Report",
    subtitle: "Projected variance analysis for high-priority projects",
    status: "Ready",
  },
  {
    title: "Vendor Risk Scoring Review",
    subtitle: "Reliability and delay trend performance snapshot",
    status: "Draft",
  },
];