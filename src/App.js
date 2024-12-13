import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { projects, jobs, imageRoot } from './Work.js';
import { MediaCarousel } from './Carousel.js';
import emailjs from 'emailjs-com';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

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

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 px-2 py-1 rounded-full text-sm font-bold text-yellow-400 bg-black hover:bg-gray-700 transition dark:bg-gray-500 dark:hover:bg-gray-600 z-10"
      >
        {darkMode ? '☀' : '🌙'}
      </button>

      <header className="bg-gray-300 text-black p-6 dark:bg-gray-800 dark:text-white relative">
        <div className="flex justify-between items-center">
          {/* Contact Section */}
          <div className="flex flex-col items-start justify-center h-full">
            <a
              href="https://github.com/ELowe15"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 text-gray-600 dark:text-white text-sm md:text-xl flex items-center"
            >
              <i className="fab fa-github"></i> <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/evan-lowe-53a7112aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white text-sm md:text-xl flex items-center"
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
      <section className="flex flex-col lg:flex-row items-center justify-center bg-gray-400 text-black p-6 dark:bg-gray-700 dark:text-white">
        {/* Picture Section */}
        <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600 flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
          <img
            src={imageRoot + 'Me.png'} // Replace with actual path to your picture
            alt="Profile picture"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center max-w-4xl">
          <p className="text-base md:text-lg">
            <p>Welcome to my portfolio built with Javascript, React, HTML and Tailwind CSS! This site showcases my projects, skills, and experience.</p>
            <br />
            <p>Feel free to explore and connect with me through GitHub, LinkedIn, or by sending a direct message in the contact section below!</p>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="my-10 px-6 dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
            >
              <MediaCarousel media={project.media} />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>

              {/* Tools Section */}
              {project.tools && (
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  className="text-gray-600 mt-4 inline-block dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              {project.githubLink && (
                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    className="text-gray-600 dark:text-white"
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
      </section>

      {/* Jobs Section */}
      <section className="my-10 px-6 dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-semibold text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
              
              {/* Job Title and Company Name */}
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">@</p>
              <p className="text-2xl font-semibold">{job.company}</p>

              <p className="text-gray-600 dark:text-gray-400 mt-2">{job.description}</p>

              {/* Tools Section */}
              {job.tools && (
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {job.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 text-sm rounded-full"
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
                  className="text-gray-600 mt-4 inline-block dark:text-blue-400"
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
      <section className="my-10 px-6 dark:bg-gray-900 dark:text-white">
        <div className="mt-10 bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">Contact Me</h3>
          <form onSubmit={sendEmail} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(Optional)"
                  className="w-full p-2 mt-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 mt-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
          {statusMessage && (
            <div className="mt-4 text-center text-lg text-red-500">{statusMessage}</div>
          )}
        </div>
      </section>

      <footer className="p-6 bg-gray-300 text-center dark:bg-gray-900 dark:text-white">
        <p>&copy; 2024 Evan's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;