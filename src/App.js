import React, { useEffect, useState } from 'react';
import './App.css';
import { projects, jobs, imageRoot } from './Work.js';
import { MediaCarousel } from './Carousel.js';
import emailjs from 'emailjs-com';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the saved dark mode state from localStorage, default to true if not found
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? savedDarkMode === 'true' : true; // Default to true if not saved
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const htmlElement = document.documentElement;

    // Save the dark mode state to localStorage
    localStorage.setItem('darkMode', darkMode);

    if (darkMode) {
      htmlElement.classList.add('dark');
      htmlElement.style.backgroundColor = ''; // Reset background color when dark mode is active
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.style.backgroundColor = '#F4F1EC'; // Set background color to white when dark mode is inactive
    }
  }, [darkMode]); // Run this effect when darkMode changes

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatusMessage('Please fill in all fields.');
      setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
      return;
    }

    emailjs
      .sendForm('service_ls4awwg', 'template_6phj3ib', e.target, 'jBRS5-M513Scz5SCC')
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('Error sending message. Please try again.');
          setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
        }
      );
      
  };

  const [showAll, setShowAll] = useState(false); // State declaration for toggling

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold text-black dark:text-white bg-lightButton dark:bg-gray-500 hover:bg-lightButtonHover dark:hover:bg-gray-600 transition z-10"
        >
        {darkMode ? '☀' : '☾'}
      </button>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-black text-sm font-bold dark:text-white bg-lightButton dark:bg-gray-500 hover:bg-lightButtonHover dark:hover:bg-gray-600 transition z-10"
        >
          ↑
        </button>
      )}

      <header className="bg-lightMain text-black p-6 dark:bg-main dark:text-white relative">
        <div className="flex justify-between items-center">
          {/* Contact Section */}
          <div className="flex flex-col items-start justify-center h-full">
            <a
              href="https://github.com/ELowe15"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 text-lightText dark:text-white text-sm md:text-xl flex items-center"
            >
              <i className="fab fa-github"></i> <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/evan-lowe-53a7112aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightText dark:text-white text-sm md:text-xl flex items-center"
            >
              <i className="fab fa-linkedin"></i> <span className="ml-2">LinkedIn</span>
            </a>
          </div>

          {/* Portfolio Title Section*/}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Evan Lowe's Portfolio
            </h1>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center bg-summary text-black p-6 dark:bg-gray700 dark:text-white">
        {/* Picture Section */}
        <div className="w-80 h-80 rounded-full overflow-hidden bg-gray200 dark:bg-gray600 flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
          <img
            src={imageRoot + 'Me.png'} // Replace with actual path to your picture
            alt="Profile picture"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center max-w-4xl">
          <p className="text-base md:text-lg">
            <p>
              Welcome to my portfolio showcasing my projects, skills, and experience. Feel free to explore and connect with me 
              through GitHub, LinkedIn, or by sending a direct message in the contact section below. 
            </p>
            <br />
            <p>
              This site is built with Javascript, React, HTML, and Tailwind CSS featuring dark and light mode settings. It is 
              also powered with Google Analytics and EmailJS to handle the contact communication. 
              {' '}
              <a 
                href="https://github.com/ELowe15/Portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-inherit"
              >
                <i className="fab fa-github text-xl"></i> GitHub Repo
              </a>
            </p>
          </p>
        </div>
      </section>

      <section className="my-10 px-6 dark:bg-background dark:text-white">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.slice(0, showAll ? projects.length : 6).map((project, index) => (
            <div
              key={index}
              className="bg-lightMain p-6 rounded-lg shadow-lg dark:bg-main dark:text-white"
            >
              <MediaCarousel media={project.media} />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-lightText dark:text-darkText mt-2">{project.description}</p>

              {/* Tools Section */}
              {project.tools && (
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-block bg-lightTool text-black dark:bg-darkTool dark:text-white px-2 py-1 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  className="text-lightLink mt-4 inline-block dark:text-darkLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project
                </a>
              )}
              {project.githubLink && (
                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    className="text-lightText dark:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github text-xl"></i> GitHub Repo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="w-12 h-12 bg-lightButton hover:bg-lightButtonHover text-black rounded-full shadow-lg dark:bg-darkTool dark:text-white dark:hover:bg-hoverDarkTool flex items-center justify-center"
          >
            {showAll ? (
              <span className="text-2xl">▲</span> // Up arrow
            ) : (
              <span className="text-2xl">▼</span> // Down arrow
            )}
          </button>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="my-10 px-6 dark:bg-background dark:text-white">
        <h2 className="text-3xl font-semibold text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-lightMain p-6 rounded-lg shadow-lg dark:bg-main dark:text-white">
              {/* Job Title and Company Name */}
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-sm text-lightText dark:text-white">@</p>
              <p className="text-2xl font-semibold">{job.company}</p>

              <p className="text-lightText dark:text-darkText mt-2">{job.description}</p>

              {/* Tools Section */}
              {job.tools && (
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {job.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-block bg-lightTool text-black dark:bg-darkTool dark:text-white px-2 py-1 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {/* Company Website Link */}
              {job.link && (
                <a
                  href={job.link}
                  className="text-lightLink mt-4 inline-block dark:text-darkLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Company Website
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="my-10 px-6 dark:bg-background dark:text-white">
        <div className="mt-10 bg-lightMain dark:bg-main p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">Contact Me</h3>
          <form onSubmit={sendEmail} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lightText dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray300 dark:border-gray700 dark:bg-background dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lightText dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray300 dark:border-gray700 dark:bg-background dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-lightText dark:text-white">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(Optional)"
                  className="w-full p-2 mt-2 rounded-md border border-gray300 dark:border-gray700 dark:bg-background dark:text-white"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lightText dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 mt-2 rounded-md border border-gray300 dark:border-gray700 dark:bg-background dark:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-lightButton text-black dark:text-white px-4 py-2 rounded-md hover:bg-lightButtonHover dark:bg-darkButton dark:hover:bg-darkButtonHover transition"
            >
              Send Message
            </button>
          </form>
          {statusMessage && (
            <div className={`mt-4 text-center text-lg text-red-500`}>{statusMessage}</div>
          )}
        </div>
      </section>

      <footer className={`p-6 bg-lightMain text-center dark:bg-background dark:text-white`}>
        <p>&copy; 2025 Evan's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;