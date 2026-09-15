import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* Navbar shadow on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* Active navigation section */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* Lock page scroll when mobile menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  /* Close menu */
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav
        className="navbar-inner container"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleLinkClick}
        >
          VISHAL<span>.DEV</span>
        </a>

        {/* Navigation */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            );
          })}

          {/* Mobile Hire Me */}
          <li className="navbar-hire-mobile">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={handleLinkClick}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          {/* Theme */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } mode`}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          {/* Desktop Hire Me */}
          <a
            href="#contact"
            className="btn btn-primary navbar-hire-desktop"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;