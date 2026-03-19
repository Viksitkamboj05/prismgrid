import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
    return (
        <motion.header
            className="navbar-wrap"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
            <div className="container">
                <nav className="navbar glass-card">
                    <Link to="/" className="navbar-brand">
                        <div className="brand-mark">
                            <span className="brand-core"></span>
                        </div>
                        <div className="brand-text">
                            <h3>PRISM-GRID</h3>
                            <p>Project Intelligence Platform</p>
                        </div>
                    </Link>

                    <div className="navbar-links">
                        <a href="#features">Features</a>
                        <a href="#workflow">Workflow</a>
                        <a href="#intelligence">Intelligence</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="navbar-actions">
                        <Link to="/login" className="secondary-btn">Login</Link>
                        <Link to="/app/dashboard" className="primary-btn">Get Started</Link>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}

export default Navbar;