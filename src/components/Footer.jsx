import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">
            VISHAL<span>.DEV</span>
          </p>
          <p className="footer-tagline">Building modern web experiences.</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <p className="footer-copyright">
        © {year} Vishal Ahir. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
