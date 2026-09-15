// =========================================================
// PROJECTS DATA
// Edit this file to update your project details.
// Place project screenshots inside: src/assets/images/
// Then import them below and reference them in the `image` field.
// =========================================================
import luxeScentImg from '../assets/images/luxe-scent.jpg';
import aureliaImg from '../assets/images/aurelia-resort.jpg';
import nexoraImg from "../assets/images/nexora-ecommerce.png"

// Add your Nexora screenshot to src/assets/images/ (e.g. nexora.jpg),
// then uncomment this import and set it as the `image` below.
// import nexoraImg from '../assets/images/nexora.jpg';

export const projects = [
  {
    id: 1,
    title: 'Nexora E-Commerce',
    description:
      'A full-featured MERN stack e-commerce platform with secure authentication, product management, a dynamic shopping cart, and complete order handling wrapped in a modern, responsive UI.',
    image: nexoraImg, // replace with imported image, e.g. nexoraImg
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Authentication', 'Product Management', 'Shopping Cart', 'Orders', 'Modern UI'],
    liveLink: 'https://nexoraecommerce.netlify.app/',
    githubLink: 'https://github.com/vishalahir1010/nexora',
  },
  {
    id: 2,
    title: 'Luxe Scent — Perfume E-Commerce',
    description:
      'A premium perfume e-commerce storefront with product browsing, cart, search and a dark/light theme toggle — built with a full MERN stack backend for products, cart and order handling.',
    image: luxeScentImg,
    tech: ['React', 'React', 'JavaScript', 'CSS3'],
    features: ['Product Catalog', 'Shopping Cart', 'Search', 'Dark/Light Theme', 'Responsive Design'],
    liveLink: 'https://luxesent.netlify.app',
    githubLink: 'https://github.com/vishalahir1010/Perfumes-',
  },
  {
    id: 3,
    title: 'Aurelia Resort & Spa — Hotel Booking',
    description:
      'A luxury resort booking website with an immersive hero, live check-in/check-out and guest search, suite browsing, and a fully responsive layout built for a premium hospitality brand.',
    image: aureliaImg,
    tech: ['React', 'JavaScript', 'CSS3'],
    features: ['Hotel Listings', 'Room Details', 'Booking Search Widget', 'Responsive Design'],
    liveLink: 'https://hotelaurelia.netlify.app',
    githubLink: 'https://github.com/vishalahir1010/Hotel',
  },
];
