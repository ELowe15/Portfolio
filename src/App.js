import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    link: 'https://example.com/project1',
    video: 'https://via.placeholder.com/300', // Example video/image URL
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    link: 'https://example.com/project2',
    video: 'https://via.placeholder.com/300',
  },
  // Add more projects here
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Evan's Portfolio</h1>
        <p className="mt-2">Welcome to my portfolio website!</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
        >
          Toggle Dark Mode
        </button>
      </header>

      <section className="my-10 px-6">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
              {project.video && (
                <img src={project.video} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
              )}
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 mt-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10 px-6">
        <h2 className="text-3xl font-semibold text-center">Connect With Me</h2>
        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-3xl text-gray-600 dark:text-white"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-3xl text-gray-600 dark:text-white"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 Evan's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
