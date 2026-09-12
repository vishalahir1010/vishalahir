import { FiBookOpen } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';
import './Education.css';

// Easy to update later — just edit the fields below.
const educationTimeline = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Your College Name',
    university: 'Your University Name',
    duration: 'Start Year – Graduation Year',
    description:
      'Studied core computer science fundamentals including programming, data structures, databases and web development.',
  },
];

function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">My academic background</h2>
          <p className="section-subtitle">
            The foundation that shaped my journey into software development.
          </p>
        </div>

        <div ref={ref} className={`timeline reveal ${visible ? 'visible' : ''}`}>
          {educationTimeline.map((item) => (
            <div key={item.degree} className="timeline-item">
              <div className="timeline-icon">
                <FiBookOpen />
              </div>

              <div className="timeline-card glass-card">
                <span className="timeline-duration">{item.duration}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-institution">
                  {item.institution} &middot; {item.university}
                </p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
