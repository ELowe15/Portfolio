import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import emailjs from 'emailjs-com';

const imageRoot = '/Portfolio/images/';

const projects = [
  {
    title: 'Race Simulator',
    description: 'A fun, interactive Fantasy Sports Race application where users can simulate races with customizable players across different sports. The races are intended to determine fantasy draft orders randomly.',
    link: 'https://elowe15.github.io/RaceSimulator/',
    githubLink: 'https://github.com/ELowe15/RaceSimulator',
    media: [imageRoot + 'bballRace.png', imageRoot + 'fballRace.png', imageRoot + 'hockeyRace.png', imageRoot + 'baseballRace.png',imageRoot + 'RaceSimDemo.mp4',],
    tools: ['JavaScript', 'JSON', 'HTML', 'CSS'],
  },
  {
    title: 'XM-23 Emulator',
    description:
      'The XM-23 Emulator emulates the hardware behavior of the 16-bit von Neumann XM-23 machine, providing an environment to debug, analyze, and execute programs in a virtual environment.',
    link: '',
    githubLink: 'https://github.com/ELowe15/XM-23-Emulator',
    media: [imageRoot + 'xm23.png', imageRoot + 'EmulatorArray.mp4'],
    tools: ['C', 'Assembly', 'Debugger Development', 'Cache', 'Hardware Emulation', 'Interupt Handling'],
  },
  {
    title: 'Brain Computer Interface',
    description: 'A multithreaded game played solely with the user’s mind. This was accomplished by inhibiting certain brain signals in the user and then reading them in real time with an EEG headset.',
    link: '',
    githubLink: '',
    media: [imageRoot + 'Gambit.webp'],
    tools: ['Python', 'Multithreading', 'Real Time Data Processing', 'EEG', 'Sensors', 'Game Design', 'Bluetooth', 'UDP'],
  },
  {
    title: 'Oil Sensing Robot Simulation',
    description:
      'This project simulates control and communication from multiple sensors used in a sensor platform, including SBL (Short Baseline Location), Depth, and Oil sensors. It processes sensor data, calculates location coordinates based on sensor inputs, and sends data to a host PC for further use.',
    link: '',
    githubLink: 'https://github.com/ELowe15/Oil_Sensing_Robot',
    media: [imageRoot + 'oil.png', imageRoot + 'oilTerm1.png', imageRoot + 'oilTerm2.png'],
    tools: ['C', 'Multithreading', 'USART', 'Microcontroller', 'Real Time Communcation', 'Embedded Device'],
  },
  {
    title: 'Robot Navigation',
    description: 'Developed navigation software and implemented on a Raspberry Pi which connected to a robot and its sensors. The navigation algorithm utilized sensor information to map an environment allowing the robot to safely move without collisions',
    link: '',
    githubLink: '',
    media: ['https://www.youtube.com/embed/LiJEoqCagCQ?start=48'], // Embedded YouTube link
    tools: ['Python', 'C++', 'Raspberry Pi', 'Linux', 'Lidar'],
  },
  {
    title: 'Craps Dice Game',
    description:
      'This Verilog-based dice game simulates a simple craps game. It rolls two dice, checks if the player wins, loses, or continues to roll, and displays the results. The game uses a state machine to manage different phases like "natural," "craps," or "point" rolls.',
    link: '',
    githubLink: 'https://github.com/ELowe15/Craps',
    media: [imageRoot + 'craps.png'],
    tools: ['Verilog', 'Digital Design', 'FPGA'],
  },
];

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
        </div>

        {/* Portfolio Title Section*/}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Evan Lowe's Portfolio
          </h1>
        </div>
      </header>

      {/* Summary Section */}
      <section className="bg-gray-400 text-black p-6 dark:bg-gray-700 dark:text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg">
            Welcome to my portfolio built with Javascript, React, HTML and Tailwind CSS! This site showcases my projects, skills, and experience. Feel free to explore and connect with me through GitHub, LinkedIn, or by sending a direct message in the contact section below!
          </p>
        </div>
      </section>

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

const MediaCarousel = ({ media }) => {
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
      className={`relative h-80 transition-all ease-in-out ${isFullScreen ? 'fullscreen-active' : ''}`}
      style={{ backgroundColor: 'black' }}
    >
      {/* Navigation Arrows */}
      {media.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute ${
              isFullScreen ? 'left-2' : 'left-[-1.6rem]'
            } top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full dark:bg-gray-700 dark:text-white z-50`}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className={`absolute ${
              isFullScreen ? 'right-2' : 'right-[-1.6rem]'
            } top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full dark:bg-gray-700 dark:text-white z-50`}
          >
            &gt;
          </button>
        </>
      )}
      <div className="w-full h-full flex justify-center items-center">
        {currentMedia.includes('youtube.com/embed') ? (
          // Render YouTube iframe
          <iframe
            src={currentMedia}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        ) : currentMedia.endsWith('.mp4') ? (
          // Render video
          <video
            src={currentMedia}
            className="w-full h-full object-contain rounded-lg"
            controls
          />
        ) : (
          // Render image with full-screen button
          <div className="relative w-full h-full">
            <img
              src={currentMedia}
              alt={`Media ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute bottom-2 right-2 bg-transparent text-white p-2 hidden sm:block"
              onClick={toggleFullScreen}
            >
              <i
                className={`fas ${isFullScreen ? 'fa-compress' : 'fa-expand'} text-lg`}
              ></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
