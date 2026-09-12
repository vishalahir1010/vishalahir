import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

// =========================================================
// EMAILJS CONFIGURATION
// 1. Create a free account at https://www.emailjs.com/
// 2. Create an Email Service + Email Template
// 3. Copy .env.example to .env and fill in your own IDs there
//    (Public Key is safe to expose in frontend code, but env
//    vars keep config out of source control and easy to change
//    per environment without touching component code)
// =========================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const initialFormState = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [ref, visible] = useReveal();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple client-side validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData(initialFormState);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={ref} className={`contact-grid reveal ${visible ? 'visible' : ''}`}>
          {/* ---------------- LEFT SIDE ---------------- */}
          <div className="contact-info">
            <h2 className="contact-heading">Let's Work Together! 🚀</h2>
            <p className="contact-text">
              Have a project or opportunity in mind? Feel free to contact me.
            </p>

            <div className="contact-socials">
              <a
                href="https://github.com/vishalahir1010"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FiGithub /> <span>GitHub</span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin /> <span>LinkedIn</span>
              </a>
              <a
                href="mailto:ahirv2641@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FiMail /> <span>Email</span>
              </a>
            </div>
          </div>

          {/* ---------------- RIGHT SIDE: FORM ---------------- */}
          <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="form-status success" role="status">
                ✅ Your message has been sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status error" role="alert">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
