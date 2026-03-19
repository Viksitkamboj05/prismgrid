import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiLayers, FiArrowRight } from "react-icons/fi";
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

function SignupPage() {
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
            <div className="auth-panel-tag">AI-Powered Project Intelligence</div>

            <h1>Create your PRISM-GRID account</h1>
            <p>
              Set up your workspace to start tracking infrastructure projects,
              forecasting risk, and turning fragmented signals into strategic action.
            </p>

            <div className="auth-visual glass-card">
              <div className="auth-visual-top">
                <span className="auth-visual-mini">Predictive Operations Layer</span>
                <div className="auth-live-pill">Ready to Deploy</div>
              </div>

              <div className="auth-feature-stack">
                <div className="auth-feature-pill">Delay Forecasting</div>
                <div className="auth-feature-pill">Risk Scoring</div>
                <div className="auth-feature-pill">Scenario Simulation</div>
                <div className="auth-feature-pill">Vendor Monitoring</div>
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
                <div className="auth-form-badge">Create Account</div>
                <h2>Get started</h2>
                <p>
                  Build your risk intelligence workspace and prepare your project stack for predictive monitoring.
                </p>
              </div>

              <form className="auth-form">
                <div className="input-group">
                  <label>Full Name</label>
                  <div className="input-shell">
                    <span className="input-icon">
                      <FiUser />
                    </span>
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <div className="input-shell">
                    <span className="input-icon">
                      <FiMail />
                    </span>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="auth-form-two-col">
                  <div className="input-group">
                    <label>Password</label>
                    <div className="input-shell">
                      <span className="input-icon">
                        <FiLock />
                      </span>
                      <input type="password" placeholder="Create password" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Confirm Password</label>
                    <div className="input-shell">
                      <span className="input-icon">
                        <FiLock />
                      </span>
                      <input type="password" placeholder="Confirm password" />
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <label>Role</label>
                  <div className="input-shell select-shell">
                    <span className="input-icon">
                      <FiLayers />
                    </span>
                    <select defaultValue="Project Manager">
                      <option>Project Manager</option>
                      <option>Analyst</option>
                      <option>Admin</option>
                    </select>
                  </div>
                </div>

                <label className="checkbox-row">
                  <input type="checkbox" />
                  <span>I agree to the platform terms and access policies</span>
                </label>

                <button type="button" className="primary-btn auth-btn premium-auth-btn">
                  Create Account <FiArrowRight />
                </button>
              </form>

              <div className="auth-divider">
                <span></span>
                <p>Platform Onboarding</p>
                <span></span>
              </div>

              <p className="auth-switch">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SignupPage;