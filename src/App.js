import React, { useState } from 'react';
import './App.css';

// Define your projects with a link to the GitHub repo
const projects = [
  {
    title: 'Race Simulator',
    description: 'A racing game simulator built with JavaScript.',
    link: 'https://elowe15.github.io/RaceSimulator/',
    githubLink: 'https://github.com/ELowe15/RaceSimulator', // Add GitHub link
    video: 'https://via.placeholder.com/300', // Example video/image URL
  },
  {
    title: 'Project 2',
    description: 'A description of Project 2.',
    link: 'https://example.com/project2',
    githubLink: 'https://github.com/ELowe15/Project2', // Add GitHub link
    video: 'https://via.placeholder.com/300',
  },
  // Add more projects here as needed
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
              <div className="mt-4">
                {/* GitHub Repo Link */}
                <a
                  href={project.githubLink}
                  className="text-gray-600 dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-xl"></i> GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10 px-6">
        <h2 className="text-3xl font-semibold text-center">Connect With Me</h2>
        <div className="flex justify-center mt-4">
          {/* GitHub and LinkedIn Icons */}
          <a
            href="https://github.com/ELowe15"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-3xl text-gray-600 dark:text-white"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/evan-lowe-53a7112aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-3xl text-gray-600 dark:text-white"
          >
            <i className="fab fa-linkedin"></i>
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
