import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import "../../styles/auth.css";
import authpng from "../../assets/auth.png";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-bg-orb auth-bg-orb-one"></div>
      <div className="auth-bg-orb auth-bg-orb-two"></div>

      <motion.div
        className="auth-card glass-card"
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="auth-card-grid">
          <motion.div
            className="auth-left"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.08}
          >
            <div className="auth-panel-tag">Secure Platform Access</div>

            <h1>Welcome back to PRISM-GRID</h1>
            <p>
              Sign in to access predictive project intelligence, active risk alerts,
              and strategic execution insights across your infrastructure portfolio.
            </p>

            <div className="auth-visual glass-card">
              <div className="auth-visual-top">
                <span className="auth-visual-mini">Project Intelligence Layer</span>
                <div className="auth-live-pill">Live Monitoring</div>
              </div>

              <div className="auth-visual-kpis">
                <div className="auth-kpi-box">
                  <span>High Risk Projects</span>
                  <strong>04</strong>
                </div>
                <div className="auth-kpi-box">
                  <span>Portfolio Risk Shift</span>
                  <strong>-12%</strong>
                </div>
              </div>

              <div className="image-placeholder auth-image-placeholder">
                <img src={authpng} alt=" Wait While the Image is Loading..." />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="auth-right"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.18}
          >
            <div className="auth-form-wrap">
              <div className="auth-form-head">
                <div className="auth-form-badge">Sign In</div>
                <h2>Access your workspace</h2>
                <p>
                  Continue managing predictive insights, project monitoring, and risk intelligence.
                </p>
              </div>

              <form className="auth-form">
                <div className="input-group">
                  <label>Email Address</label>
                  <div className="input-shell">
                    <span className="input-icon">
                      <FiMail />
                    </span>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="input-group">
                  <div className="input-label-row">
                    <label>Password</label>
                    <button type="button" className="auth-inline-link">
                      Forgot password?
                    </button>
                  </div>

                  <div className="input-shell">
                    <span className="input-icon">
                      <FiLock />
                    </span>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                </div>

                <label className="checkbox-row">
                  <input type="checkbox" />
                  <span>Keep me signed in on this device</span>
                </label>

                <button type="button" className="primary-btn auth-btn premium-auth-btn">
                  Login <FiArrowRight />
                </button>
              </form>

              <div className="auth-divider">
                <span></span>
                <p>Enterprise Access</p>
                <span></span>
              </div>

              <p className="auth-switch">
                Don’t have an account? <Link to="/signup">Create one</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;