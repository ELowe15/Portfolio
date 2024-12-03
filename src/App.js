import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const imageRoot = '/Portfolio/images/';

// Define your projects with media (images/videos) and optional link
const projects = [
  {
    title: 'Race Simulator',
    description: 'A racing game simulator built with JavaScript.',
    link: 'https://elowe15.github.io/RaceSimulator/',
    githubLink: 'https://github.com/ELowe15/RaceSimulator',
    media: [imageRoot + 'RaceSimDemo.mp4', imageRoot + 'bballRace.png'],
  },
  {
    title: 'XM-23 Emulator',
    description:
      'The XM-23 Emulator emulates the hardware behavior of the 16-bit von Neumann XM-23 machine, providing an environment to debug, analyze, and execute programs in a virtual environment.',
    link: '',
    githubLink: 'https://github.com/ELowe15/XM-23-Emulator',
    media: [imageRoot + 'xm23.png'],
  },
  {
    title: 'Oil Sensing Robot Simulation',
    description:
      'This project is designed to control and manage data from multiple sensors used in a sensor platform, including SBL (Short Baseline Location), Depth, and Oil sensors. It processes sensor data, calculates location coordinates based on sensor inputs, and sends data to a host PC for further use.',
    link: '',
    githubLink: 'https://github.com/ELowe15/Oil_Sensing_Robot',
    media: [imageRoot + 'oil.png', imageRoot + 'oilTerm1.png', imageRoot + 'oilTerm2.png'],
  },
  {
    title: 'Craps Dice Game',
    description:
      'This Verilog-based dice game simulates a simple craps game. It rolls two dice, checks if the player wins, loses, or continues to roll, and displays the results. The game uses a state machine to manage different phases like "natural," "craps," or "point" rolls.',
    link: '',
    githubLink: 'https://github.com/ELowe15/Craps',
    media: [imageRoot + 'craps.png'],
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true); // Set darkMode to true by default

  useEffect(() => {
    const htmlElement = document.documentElement; // Select the <html> element
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 px-2 py-1 rounded-full text-sm font-bold text-white bg-black hover:bg-gray-700 transition dark:bg-gray-400 dark:hover:bg-gray-600"
      >
        {darkMode ? '☀' : '🌙'}
      </button>

      <header className="bg-purple-600 text-white p-6 text-center dark:bg-gray-800 dark:text-white">
        <h1 className="text-4xl font-bold">Evan's Portfolio</h1>
        <p className="mt-2">Welcome to my portfolio website! A work in progress.</p>
      </header>

      <section className="my-10 px-6 dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
            >
              <MediaCarousel media={project.media} />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-purple-600 mt-4 inline-block dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
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
            </div>
          ))}
        </div>
      </section>

      <section className="my-10 px-6 dark:bg-gray-900 dark:text-white">
        <h2 className="text-3xl font-semibold text-center">Connect With Me</h2>
        <div className="flex justify-center mt-4">
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

      <footer className="p-6 bg-purple-600 text-white text-center dark:bg-gray-800 dark:text-white">
        <p>&copy; 2024 Evan's Portfolio</p>
      </footer>
    </div>
  );
}

// Carousel Component for Media
function MediaCarousel({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false); // Full-screen state
  const mediaContainerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else if (mediaContainerRef.current.requestFullscreen) {
      mediaContainerRef.current.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen); // Update state
  };

  const currentMedia = media[currentIndex];

  return (
    <div
      ref={mediaContainerRef}
      className="relative h-80 transition-all ease-in-out"
      style={{ backgroundColor: 'black' }}
    >
      {media.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-[-1.6rem] top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full dark:bg-gray-700 dark:text-white"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-1.6rem] top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full dark:bg-gray-700 dark:text-white"
          >
            &gt;
          </button>
        </>
      )}
      <div className="w-full h-full flex justify-center items-center">
        {currentMedia.endsWith('.mp4') ? (
          <video
            src={currentMedia}
            className="w-full h-full object-contain rounded-lg"
            controls
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={currentMedia}
              alt={`Media ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute bottom-4 right-4 bg-transparent text-white p-2"
              onClick={toggleFullScreen}
            >
              <i
                className={`fas ${
                  isFullScreen ? 'fa-compress' : 'fa-expand'
                } text-lg`}
              ></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
