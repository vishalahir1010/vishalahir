import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

// =========================================================
// CONTACT DETAILS — edit these with your real information
// =========================================================
const CONTACT_EMAIL = 'ahirv2641@gmail.com';
const CONTACT_PHONE = '91045 70809';
const CONTACT_LOCATION = 'Ahmedabad, Gujarat, India';
const GITHUB_URL = 'https://github.com/vishalahir1010';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kandoriya-vishal';

function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Work Together! 🚀</h2>
          <p className="section-subtitle">
            Have a project or opportunity in mind? Feel free to reach out — I'd love to hear from you.
          </p>
        </div>

        <div ref={ref} className={`contact-card-wrapper reveal ${visible ? 'visible' : ''}`}>
          <div className="contact-detail-card glass-card">
            <div className="contact-detail-grid">
              <div className="contact-detail-item">
                <span className="contact-detail-icon"><FiMail /></span>
                <p className="contact-detail-label">Email</p>
                <p className="contact-detail-value">{CONTACT_EMAIL}</p>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon"><FiPhone /></span>
                <p className="contact-detail-label">Phone</p>
                <p className="contact-detail-value">{CONTACT_PHONE}</p>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon"><FiMapPin /></span>
                <p className="contact-detail-label">Location</p>
                <p className="contact-detail-value">{CONTACT_LOCATION}</p>
              </div>
            </div>

            <div className="contact-detail-divider" />

            <div className="contact-detail-footer">
              <a href={`mailto:ahirv2641@gmail.com`} className="btn btn-primary">
                Email Me <FiSend />
              </a>

              <div className="contact-detail-socials">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;