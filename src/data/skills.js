// =========================================================
// SKILLS DATA
// Edit this file to add/remove skills. Icons come from react-icons.
// Each skill has a brand `color` used for its icon badge.
// =========================================================
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs,
  FaGitAlt, FaGithub, FaMobileAlt,
} from 'react-icons/fa';
import { SiVite, SiExpress, SiMongodb, SiMongoose, SiJsonwebtokens, SiPostman } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FiCode,
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript (ES6+)', icon: FaJs, color: '#F7DF1E' },
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Vite', icon: SiVite, color: '#BD34FE' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
      { name: 'Responsive Design', icon: FaMobileAlt, color: '#2563EB' },
    ],
  },
  {
    title: 'Backend Development',
    icon: FiServer,
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
      { name: 'Express.js', icon: SiExpress, color: '#8A8A8A' },
      { name: 'REST APIs', icon: TbApi, color: '#2563EB' },
      { name: 'JWT Authentication', icon: SiJsonwebtokens, color: '#D63AFF' },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#8A8A8A' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

// Floating tech icons shown around the hero profile image
export const heroFloatingIcons = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
];
