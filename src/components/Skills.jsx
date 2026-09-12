import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

function Skills() {
  const [ref, visible] = useReveal();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', ...skillCategories.map((cat) => cat.title)];

  const visibleCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            Technologies and tools I use to design, build and ship applications.
          </p>
        </div>

        {/* Everything below fades/slides in together once scrolled into view */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Category filter tabs */}
          <div className="skills-tabs" role="tablist" aria-label="Skill categories">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`skill-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'All' ? 'All Skills' : tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="skills-categories"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {visibleCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={category.title} className="skill-category">
                    <h3 className="skill-category-title">
                      <span className="skill-category-icon">
                        <CategoryIcon />
                      </span>
                      {category.title}
                      <span className="skill-count">{category.skills.length}</span>
                    </h3>

                    <div className="skill-grid">
                      {category.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="skill-card glass-card"
                            style={{ '--skill-color': skill.color }}
                          >
                            <span className="skill-icon-badge">
                              <Icon className="skill-icon" />
                            </span>
                            <span className="skill-name">{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Skills;
