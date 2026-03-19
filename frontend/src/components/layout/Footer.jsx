import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-card glass-card">
          <div className="footer-top">
            <div>
              <h3>PRISM-GRID</h3>
              <p>
                AI-powered project intelligence for predicting delays, reducing overruns,
                and improving strategic execution.
              </p>
            </div>

            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#workflow">Workflow</a>
              <a href="#intelligence">Intelligence</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 PRISM-GRID. All rights reserved.</span>
            <span>Built with MERN + AI Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;