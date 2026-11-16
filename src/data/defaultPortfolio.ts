import { PortfolioData } from '../types/portfolio';

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  fullName: 'Likhitha Sunkari',
  academicStatus: 'B.Tech in Computer Science & Engineering · Class of 2027',
  school: 'School of Engineering & Technology',
  department: 'Department of Computer Science & Engineering',
  registrationNumber: 'CSE-2023-0611',
  section: 'CSE-B',
  location: 'Hyderabad, India',
  headline: 'Building thoughtful software systems and human-centered web applications.',
  intro:
    'Third-year Computer Science undergraduate focused on full-stack web engineering, applied machine learning, and accessible interface design. I enjoy turning complex academic and real-world problems into fast, reliable software.',
  heroImageUrl: '/src/assets/images/hero_student_portrait_1794845510801.jpg',
  cgpaStat: '8.92 / 10',
  projectsCountStat: '4 Shipped',
  certificationsCountStat: '5 Verified',
  focusStat: 'Full-Stack & ML',
  aboutSummary:
    'I am an undergraduate computer science student passionate about bridging solid algorithmic foundations with clean, intuitive user experiences. Through coursework, hackathons, and independent builds, I have developed end-to-end applications spanning React, TypeScript, Python, and embedded computer vision.',
  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      institution: 'School of Engineering & Technology',
      period: '2023 – 2027 (Expected)',
      highlight: 'Current CGPA: 8.92 / 10 · Dean’s Academic Merit List',
      coursework:
        'Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Machine Learning, Web Engineering',
    },
    {
      id: 'edu-2',
      degree: 'Senior Secondary Education (Class XII — MPC)',
      institution: 'Sri Chaitanya Junior College',
      period: '2021 – 2023',
      highlight: '96.4% Aggregate · Mathematics, Physics & Chemistry',
      coursework:
        'Calculus, Linear Algebra, Classical Mechanics, Problem Solving & Logic',
    },
  ],
  interests: [
    {
      title: 'Full-Stack Web Architecture',
      detail: 'Designing type-safe APIs, responsive React interfaces, and maintainable relational data models.',
    },
    {
      title: 'Applied Machine Learning',
      detail: 'Exploring computer vision and lightweight inference pipelines that solve practical campus and accessibility needs.',
    },
    {
      title: 'Design Systems & Accessibility',
      detail: 'Crafting legible typography, high-contrast palettes, and keyboard-first web interactions.',
    },
    {
      title: 'Competitive Programming',
      detail: 'Practicing graph algorithms, dynamic programming, and time-complexity optimization.',
    },
  ],
  learningGoals:
    'Over the next year, I am deepening my understanding of distributed systems, cloud-native deployment workflows, and transformer-based NLP evaluation so I can build resilient production services at scale.',
  careerAspirations:
    'My goal is to contribute as a Software Development Engineer or Applied AI Engineer on product teams that care deeply about reliability, clarity, and measurable user impact.',
  skills: [
    {
      id: 'sk-1',
      name: 'Python',
      category: 'languages',
      levelLabel: 'Advanced',
      proficiency: 92,
      context: 'Machine learning pipelines, FastAPI backends, and algorithmic problem solving',
    },
    {
      id: 'sk-2',
      name: 'TypeScript & JavaScript',
      category: 'languages',
      levelLabel: 'Advanced',
      proficiency: 90,
      context: 'Strict frontend state modeling, React applications, and Node.js services',
    },
    {
      id: 'sk-3',
      name: 'Java',
      category: 'languages',
      levelLabel: 'Proficient',
      proficiency: 84,
      context: 'Object-oriented design, data structures, and backend foundations',
    },
    {
      id: 'sk-4',
      name: 'C / C++',
      category: 'languages',
      levelLabel: 'Proficient',
      proficiency: 80,
      context: 'Competitive programming, memory management, and embedded firmware',
    },
    {
      id: 'sk-5',
      name: 'SQL',
      category: 'languages',
      levelLabel: 'Proficient',
      proficiency: 85,
      context: 'Schema normalization, indexing, and analytical queries in PostgreSQL & MySQL',
    },
    {
      id: 'sk-6',
      name: 'React & Next.js',
      category: 'technical',
      levelLabel: 'Advanced',
      proficiency: 90,
      context: 'Component architecture, custom hooks, and accessible responsive interfaces',
    },
    {
      id: 'sk-7',
      name: 'Node.js & Express',
      category: 'technical',
      levelLabel: 'Proficient',
      proficiency: 82,
      context: 'RESTful API design, authentication middleware, and server-side validation',
    },
    {
      id: 'sk-8',
      name: 'Tailwind CSS',
      category: 'technical',
      levelLabel: 'Advanced',
      proficiency: 91,
      context: 'Utility-first design systems, responsive grids, and typographic polish',
    },
    {
      id: 'sk-9',
      name: 'TensorFlow & OpenCV',
      category: 'technical',
      levelLabel: 'Intermediate',
      proficiency: 78,
      context: 'Image classification, quantization for edge devices, and real-time frame processing',
    },
    {
      id: 'sk-10',
      name: 'Git, GitHub & Docker',
      category: 'technical',
      levelLabel: 'Proficient',
      proficiency: 86,
      context: 'Branching workflows, pull-request reviews, and containerized local environments',
    },
    {
      id: 'sk-11',
      name: 'Technical Documentation',
      category: 'other',
      levelLabel: 'Strong',
      proficiency: 90,
      context: 'Writing clear architecture specs, READMEs, and academic project reports',
    },
    {
      id: 'sk-12',
      name: 'UI/UX Wireframing',
      category: 'other',
      levelLabel: 'Strong',
      proficiency: 85,
      context: 'Rapid prototyping in Figma, user flow mapping, and usability testing',
    },
    {
      id: 'sk-13',
      name: 'Team Collaboration & Agile',
      category: 'other',
      levelLabel: 'Strong',
      proficiency: 88,
      context: 'Sprint planning, hackathon team coordination, and peer code reviews',
    },
    {
      id: 'sk-14',
      name: 'Presentation & Communication',
      category: 'other',
      levelLabel: 'Strong',
      proficiency: 87,
      context: 'Delivering live project demos, technical seminars, and jury pitches',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'CampusWay: Interactive Indoor & Transit Navigator',
      category: 'Full-Stack Web',
      year: '2026',
      role: 'Lead Full-Stack Developer',
      summary:
        'A responsive campus wayfinding web app helping new students locate lecture halls, labs, shuttle stops, and accessible ramps using shortest-path routing.',
      architecture:
        'Built with React, TypeScript, and a weighted graph A* routing engine in Node.js backed by PostgreSQL spatial tables. Supports offline-ready floor plans and live shuttle timetable lookups.',
      outcomes: [
        'Reduced average building search time to under 8 seconds during university orientation.',
        'Modeled 42 campus buildings and 130+ pedestrian and accessible walkway nodes.',
        'Achieved 98 Lighthouse accessibility and performance score on mobile viewports.',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      imageUrl: '/src/assets/images/project_campus_wayfinder_1794845511488.jpg',
      imageAlt: 'Laptop and smartphone displaying the CampusWay interactive university map interface',
      repoUrl: 'https://github.com/likhitha-sunkari/campus-wayfinder',
      liveUrl: 'https://github.com/likhitha-sunkari/campus-wayfinder',
    },
    {
      id: 'proj-2',
      title: 'ScholarFlow: Semester Planner & Spaced-Repetition Tracker',
      category: 'Full-Stack Web',
      year: '2025',
      role: 'Product Designer & Developer',
      summary:
        'An academic workload organizer combining weekly coursework scheduling, deadline prioritization, and SM-2 spaced-repetition revision reminders.',
      architecture:
        'Single-page TypeScript application with modular state persistence, calendar conflict detection, and automated weekly study-hour analytics.',
      outcomes: [
        'Adopted by 60+ classmates during midterm preparation for structured revision cycles.',
        'Zero-latency local persistence with JSON/CSV schedule export.',
      ],
      technologies: ['TypeScript', 'React', 'Vite', 'Express', 'SQLite'],
      imageUrl: '/src/assets/images/project_smart_notes_1794845512268.jpg',
      imageAlt: 'Minimalist workspace with laptop displaying ScholarFlow weekly academic planner',
      repoUrl: 'https://github.com/likhitha-sunkari/scholarflow-planner',
      liveUrl: 'https://github.com/likhitha-sunkari/scholarflow-planner',
    },
    {
      id: 'proj-3',
      title: 'SightAssist: Edge Computer Vision Obstacle Detector',
      category: 'Embedded & Systems',
      year: '2025',
      role: 'ML & Embedded Firmware Lead',
      summary:
        'A low-power wearable camera module running quantized object detection on an edge microcontroller to provide real-time audio proximity cues for visually impaired users.',
      architecture:
        'Trained a lightweight MobileNetV2-SSD model in TensorFlow, quantized weights to INT8 via TFLite Micro, and deployed onto an STM32/ESP32 camera board with ultrasonic sensor fusion.',
      outcomes: [
        'Achieved 14 FPS inference latency under 1.8W power draw without cloud connectivity.',
        'Selected as Top-10 Finalist project at the Regional Engineering Innovation Expo.',
      ],
      technologies: ['Python', 'TensorFlow Lite', 'OpenCV', 'C++', 'Embedded Hardware'],
      imageUrl: '/src/assets/images/project_edge_vision_1794845512823.jpg',
      imageAlt: 'Embedded computer vision microcontroller board and camera module in aluminum housing',
      repoUrl: 'https://github.com/likhitha-sunkari/sight-assist-edge',
    },
    {
      id: 'proj-4',
      title: 'AeroPulse: Urban Air Quality Forecasting Dashboard',
      category: 'Machine Learning',
      year: '2026',
      role: 'ML Researcher & Frontend Developer',
      summary:
        'Time-series forecasting platform predicting 24-hour PM2.5 and NO2 concentrations across urban monitoring stations using gradient-boosted trees and LSTM ensembles.',
      architecture:
        'FastAPI inference service serving scikit-learn and PyTorch forecasting models, paired with an interactive geospatial heatmap and station comparison interface.',
      outcomes: [
        'Improved 24-hour AQI RMSE by 18.4% over baseline moving-average models across 12 stations.',
        'Published clean reproducible training notebooks and REST API documentation.',
      ],
      technologies: ['Python', 'FastAPI', 'PyTorch', 'scikit-learn', 'React'],
      imageUrl: '/src/assets/images/project_env_analytics_1794845512831.jpg',
      imageAlt: 'Studio monitor showing geospatial air quality heatmap and PM2.5 forecast charts',
      repoUrl: 'https://github.com/likhitha-sunkari/aeropulse-aqi',
    },
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'Smart India Hackathon — Institutional Round Winner',
      category: 'Award',
      issuer: 'Ministry of Education Innovation Cell & University Chapter',
      date: 'September 2025',
      description:
        'Led a 4-member team building an accessible campus transit and safety routing prototype, ranking 1st among 48 competing engineering teams.',
    },
    {
      id: 'ach-2',
      title: 'AWS Certified Cloud Practitioner',
      category: 'Certification',
      issuer: 'Amazon Web Services',
      date: 'June 2026',
      credentialId: 'AWS-CP-2026-8419',
      description:
        'Validated foundational knowledge of cloud architecture, IAM security best practices, compute/storage services, and billing optimization.',
    },
    {
      id: 'ach-3',
      title: 'NPTEL Elite + Gold Certification: Design and Analysis of Algorithms',
      category: 'Certification',
      issuer: 'IIT Madras / NPTEL',
      date: 'November 2025',
      credentialId: 'NPTEL25CS-91042',
      description:
        'Scored in the top 2% nationally across proctored examinations covering greedy strategies, graph algorithms, and NP-completeness.',
    },
    {
      id: 'ach-4',
      title: 'Dean’s Academic Merit List (Semesters I–V)',
      category: 'Award',
      issuer: 'School of Engineering & Technology',
      date: '2023 – 2026',
      description:
        'Recognized consecutively across five semesters for maintaining an 8.92+ CGPA and top 5% departmental academic standing.',
    },
    {
      id: 'ach-5',
      title: 'National Coding Symposium & Open-Source Sprint',
      category: 'Participation',
      issuer: 'IEEE Student Branch',
      date: 'February 2026',
      description:
        'Contributed accessibility and keyboard-navigation patches to student-led open-source documentation tools during a 24-hour sprint.',
    },
    {
      id: 'ach-6',
      title: 'Google Data Analytics Professional Certificate',
      category: 'Certification',
      issuer: 'Coursera / Google',
      date: 'January 2025',
      credentialId: 'GDA-2025-3301',
      description:
        'Completed 8-course specialization covering SQL querying, R/Python data cleaning, exploratory visualization, and structured reporting.',
    },
  ],
  email: 'sunkarilikhitha0611@gmail.com',
  social: {
    github: 'https://github.com/likhitha-sunkari',
    linkedin: 'https://www.linkedin.com/in/likhitha-sunkari',
    leetcode: 'https://leetcode.com/likhitha-sunkari',
    website: 'https://likhithasunkari.dev',
  },
};
