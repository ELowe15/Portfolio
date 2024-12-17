export const imageRoot = '/Portfolio/images/';

export const projects = [
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

export const jobs = [
  {
    title: 'Software Engineering Co-op',
    company: 'General Dynamics',
    description: 'Developed graphical user interfaces for submarine acoustics.',
    link: 'https://gdmissionsystems.ca/',
    tools: ['Java', 'C++', 'Linux', 'Ubuntu', 'Agile', 'Git', 'Servers', 'OOP', 'GUI'],
  },
  {
    title: 'Electrical Engineering Co-op',
    company: 'Aethera Technologies',
    description: 'Created GUIs to communicate with electronics.',
    link: 'https://aethera.com/',
    tools: ['Python', 'TCP/IP', 'Modbus', 'OOP', 'Bitbucket', 'GUI', 'Verilog'],
  },
  {
    title: 'Technical Project Specialist',
    company: 'TruLeaf',
    description: 'Designed a mobile sensor kit for vegetation health and off-grid power solutions. Also, established relationships with suppliers using technical layouts and specifications.',
    link: 'https://www.truleaf.ca/',
    tools: ['AutoCAD', 'Excel'],
  },
  {
    title: 'Supervisor ',
    company: 'Brilliant Labs',
    description: 'Organised workshops for children, teaching them critical thinking and problem-solving using technology',
    link: 'https://www.brilliantlabs.ca/',
    tools: ['Electronics', 'Robotics', 'Electricity', 'Microcontrollers', '3D Design'],
  },
];