import { FiCode, FiLayers, FiGithub } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './About.css';

const stats = [
  { icon: FiCode, value: '10+', label: 'Projects Completed' },
  { icon: FiLayers, value: '15+', label: 'Technologies Learned' },
  { icon: FiGithub, value: '20+', label: 'GitHub Projects' },
];

function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Get to know me</h2>
          <p className="section-subtitle">
            A quick look at who I am, what I do, and where I'm headed.
          </p>
        </div>

        <div ref={ref} className={`about-grid reveal ${visible ? 'visible' : ''}`}>
          <div className="about-text">
            <p>
              I am a passionate developer focused on building modern, fast,
              responsive and user-friendly web applications. I enjoy working
              with modern frontend technologies and continuously improving my
              backend and full-stack development skills by building real-world projects.
            </p>

            <p>
              <strong>My Journey:</strong> I started out learning the fundamentals
              of HTML, CSS and JavaScript, and gradually moved into React.js to
              build interactive, component-driven interfaces. From there, I expanded
              into the MERN stack — learning Node.js, Express.js and MongoDB to
              build complete, end-to-end applications rather than just the frontend.
            </p>

            <p>
              <strong>Current Focus:</strong> I'm currently deepening my knowledge of
              backend architecture, authentication systems (JWT), and REST API design,
              while continuing to refine my frontend craftsmanship with clean,
              accessible and performant UI.
            </p>

            <p>
              <strong>Career Goal:</strong> My goal is to grow into a well-rounded
              full-stack developer who can take a product from idea to deployment —
              and to contribute to a team where I can keep learning from experienced developers.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-card glass-card">
                  <div className="stat-icon">
                    <Icon />
                  </div>
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
