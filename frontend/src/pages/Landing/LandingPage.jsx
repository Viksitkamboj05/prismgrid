import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineChartBar, HiOutlineShieldCheck } from "react-icons/hi";
import { FiActivity, FiLayers, FiMap, FiBell } from "react-icons/fi";
import { BsBarChartSteps } from "react-icons/bs";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SectionHeading from "../../components/common/SectionHeading";
import "../../styles/landing.css";
import landingpng from "../../assets/auth.png";

const fadeUp = {
    hidden: { opacity: 0, y: 38 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const features = [
    {
        icon: <FiActivity />,
        title: "Predict Delay Before It Happens",
        desc: "Turn project timelines, vendor signals, and cost indicators into proactive delay forecasting.",
    },
    {
        icon: <HiOutlineChartBar />,
        title: "Live Risk Intelligence",
        desc: "Monitor risk scores, trend shifts, and escalation patterns through one unified intelligence layer.",
    },
    {
        icon: <FiBell />,
        title: "Actionable Alert Engine",
        desc: "Send strategic alerts with root-cause context and suggested mitigation pathways for rapid action.",
    },
    {
        icon: <FiMap />,
        title: "Geo-Spatial Risk Visibility",
        desc: "Visualize project sites and identify environmental, logistics, and location-based risk zones.",
    },
    {
        icon: <FiLayers />,
        title: "Scenario Simulation",
        desc: "Adjust budget, manpower, vendors, and timelines to see outcome changes before making decisions.",
    },
    {
        icon: <HiOutlineShieldCheck />,
        title: "Compliance & Governance Support",
        desc: "Track obligations, issue flags, and maintain stronger regulatory awareness across the project lifecycle.",
    },
];

const metrics = [
    { value: "89%", label: "risk visibility coverage" },
    { value: "32%", label: "faster mitigation response" },
    { value: "24/7", label: "continuous monitoring flow" },
];

const workflow = [
    "Collect real-time project data",
    "Clean and structure incoming signals",
    "Generate AI-powered risk scores",
    "Trigger alerts and recommendations",
    "Simulate decisions before execution",
    "Visualize outcomes for leadership",
];

function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />

            <main>
                <section className="hero-section">
                    <div className="blur-orb one"></div>
                    <div className="blur-orb two"></div>

                    <div className="container hero-grid">
                        <div className="hero-left">
                            <motion.div
                                className="section-tag"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={0.05}
                            >
                                AI-Powered Infrastructure Intelligence
                            </motion.div>

                            <motion.h1
                                className="hero-title"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={0.15}
                            >
                                Predict project risk before delays and overruns begin to scale.
                            </motion.h1>

                            <motion.p
                                className="hero-text"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={0.24}
                            >
                                PRISM-GRID transforms fragmented project signals into predictive insights,
                                real-time alerts, and scenario-driven decisions for modern infrastructure teams.
                            </motion.p>

                            <motion.div
                                className="hero-actions"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={0.34}
                            >
                                <a href="/app/dashboard" className="primary-btn">
                                    Explore Platform <HiOutlineArrowRight />
                                </a>
                                <a href="#workflow" className="secondary-btn">See Intelligence Flow</a>
                            </motion.div>

                            <motion.div
                                className="hero-metrics"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={0.42}
                            >
                                {metrics.map((item) => (
                                    <div key={item.label} className="hero-metric-card glass-card">
                                        <h3>{item.value}</h3>
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            className="hero-right"
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.15, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="hero-visual glass-card">
                                <div className="hero-visual-header">
                                    <div>
                                        <span className="mini-label">Project Intelligence Console</span>
                                        <h3>Executive Risk Overview</h3>
                                    </div>
                                    <span className="live-pill">Live</span>
                                </div>

                                <div className="hero-chart-area">
                                    <div className="chart-line chart-line-1"></div>
                                    <div className="chart-line chart-line-2"></div>
                                    <div className="chart-line chart-line-3"></div>
                                </div>

                                <div className="hero-kpis">
                                    <div className="hero-kpi">
                                        <span>Active Projects</span>
                                        <strong>12</strong>
                                    </div>
                                    <div className="hero-kpi danger">
                                        <span>High Risk</span>
                                        <strong>4</strong>
                                    </div>
                                    <div className="hero-kpi warning">
                                        <span>Delay Probability</span>
                                        <strong>68%</strong>
                                    </div>
                                    <div className="hero-kpi success">
                                        <span>Actioned Alerts</span>
                                        <strong>21</strong>
                                    </div>
                                </div>

                                <div className="hero-visual-image">
                                    <div className="image-placeholder">
                                        <img src={landingpng} alt=" Wait While the Image is Loading..." />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="section" id="features">
                    <div className="container">
                        <SectionHeading
                            tag="Core Platform Features"
                            title="A proactive intelligence layer for high-stakes infrastructure execution."
                            subtitle="Designed to move project operations from reactive monitoring to predictive decision-making through analytics, alerts, and scenario simulation."
                            center
                        />

                        <div className="grid-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="feature-card glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: index * 0.08 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section workflow-section" id="workflow">
                    <div className="container workflow-grid">
                        <motion.div
                            className="workflow-left"
                            initial={{ opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.85 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <SectionHeading
                                tag="Intelligence Workflow"
                                title="From fragmented signals to confident strategic action."
                                subtitle="PRISM-GRID unifies project data, interprets evolving risk, and helps teams act earlier with more precision."
                            />

                            <div className="workflow-list">
                                {workflow.map((step, index) => (
                                    <div key={step} className="workflow-item glass-card">
                                        <div className="workflow-index">0{index + 1}</div>
                                        <p>{step}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="workflow-right"
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.85 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="workflow-visual glass-card">
                                <div className="workflow-panel top">
                                    <BsBarChartSteps />
                                    <div>
                                        <h4>Risk Trend Tracking</h4>
                                        <p>Monitor shifts in delay probability and cost variance patterns.</p>
                                    </div>
                                </div>

                                <div className="workflow-panel middle">
                                    <div className="image-placeholder">
                                        <p>Paste process visualization image here</p>
                                        <span>
                                            Prompt: minimal futuristic workflow visualization for AI project intelligence,
                                            dark enterprise theme, connected nodes showing data collection, preprocessing,
                                            ML prediction, alerts, simulation, dashboard
                                        </span>
                                    </div>
                                </div>

                                <div className="workflow-panel bottom">
                                    <div className="mini-stat">
                                        <span>Vendor score drop</span>
                                        <strong>-18%</strong>
                                    </div>
                                    <div className="mini-stat">
                                        <span>Predicted overrun</span>
                                        <strong>₹2.4Cr</strong>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="section intelligence-section" id="intelligence">
                    <div className="container">
                        <SectionHeading
                            tag="Why PRISM-GRID Stands Out"
                            title="Not another dashboard. A decision-support system built for complex project risk."
                            subtitle="The platform combines operational visibility, explainable risk scoring, alerts, simulations, and strategic monitoring in one cohesive ecosystem."
                        />

                        <div className="intelligence-strip glass-card">
                            <div className="intelligence-content">
                                <h3>Explainable AI + Scenario Awareness</h3>
                                <p>
                                    Instead of only showing a number, PRISM-GRID explains why risk is increasing
                                    and what teams should change next. This makes the platform useful not just for
                                    analysts, but for real project decision-makers.
                                </p>

                                <ul>
                                    <li>Vendor impact analysis</li>
                                    <li>Cost overrun forecasting</li>
                                    <li>Delay probability explanation</li>
                                    <li>Mitigation recommendation support</li>
                                </ul>
                            </div>

                            <div className="intelligence-image">
                                <div className="image-placeholder">
                                    <p>Paste AI explanation panel image here</p>
                                    <span>
                                        Prompt: explainable AI analytics card UI for project risk platform, showing why
                                        delay risk is high due to weather, vendor performance, and cost trend, premium
                                        glass dashboard design, dark theme
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section cta-section">
                    <div className="container">
                        <motion.div
                            className="cta-card glass-card"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85 }}
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <div>
                                <span className="section-tag">Start Building Smarter Execution</span>
                                <h2>Transform project uncertainty into visible, measurable intelligence.</h2>
                                <p>
                                    Build a platform that predicts, explains, and helps prevent execution failure
                                    before it becomes expensive.
                                </p>
                            </div>

                            <div className="cta-actions">
                                <button className="primary-btn">Launch PRISM-GRID</button>
                                <button className="secondary-btn">View Demo Modules</button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default LandingPage;