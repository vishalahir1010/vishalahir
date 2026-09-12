import { FiExternalLink, FiGithub, FiImage } from 'react-icons/fi';
import { projects } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of real-world projects showcasing my frontend and full-stack work.
          </p>
        </div>

        <div ref={ref} className={`projects-grid reveal ${visible ? 'visible' : ''}`}>
          {projects.map((project) => (
            <article key={project.id} className="project-card glass-card">
              <div className="project-image-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <FiImage />
                    <span>Add screenshot in src/data/projects.js</span>
                  </div>
                )}
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub <FiGithub />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
