import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiDownload } from 'react-icons/fi';
import { heroFloatingIcons } from '../data/skills';
import './Hero.css';
import vishal from "../assets/images/vishal.jpeg"

// Place your real profile photo at: src/assets/images/profile.jpg
// Then uncomment the import below and replace the placeholder <div>.
// import profileImg from '../assets/images/profile.jpg';

// Place your resume PDF at: public/resume.pdf
// (files in `public/` are served as-is at the site root, so no import needed)

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* ---------------- LEFT: TEXT CONTENT ---------------- */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-greeting">Hi, I'm Vishal Ahir 👋</p>

          <h1 className="hero-title">
            Frontend Developer <br />
            <span className="hero-title-accent">&amp; MERN Stack Developer</span>
          </h1>

          <p className="hero-description">
            I build modern, fast, responsive and user-friendly web applications.
            Passionate about clean frontend experiences, and continuously
            sharpening my backend and full-stack skills by building real-world projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <FiMail />
            </a>
          </div>

          {/* Resume download link — place your PDF at public/resume.pdf */}
          <a href="public\resume.pdf"  className="hero-resume-link" target='_blank'>
            <FiDownload /> Download Resume
          </a>
        </motion.div>

        {/* ---------------- RIGHT: PROFILE IMAGE ---------------- */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-glow" aria-hidden="true"></div>

          <div className="hero-image-frame">
            {/*
              REPLACE THIS PLACEHOLDER with your real photo:
              <img src={profileImg} alt="Vishal Ahir - Frontend Developer" className="hero-image" />
            */}
            
            <div className="hero-image-placeholder">
              <img src={vishal} alt="" />
            </div>
          </div>

          {/* Floating technology icons around the image */}
          {heroFloatingIcons.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className={`floating-icon floating-icon-${index + 1}`}
                style={{ color: tech.color }}
                title={tech.name}
                aria-hidden="true"
              >
                <Icon />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
