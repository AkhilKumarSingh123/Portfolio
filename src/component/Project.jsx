
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projectsData = [
  {
    title: 'MediAlert AI (MERN + AI Integrated)',
    image: '../Medi.jpeg',
    description:
      'An AI-driven medical assistance platform offering disease prediction, emergency alerts, and treatment suggestions. Integrated JWT-based role authentication for doctors, patients, and admins.',
    tags: ['ReactJS', 'Node.js', 'MongoDB', 'JWT', 'AI', 'Tailwind', 'Express'],
    liveDemo: 'https://medialert-ai-frontend.onrender.com/',
    code: 'https://github.com/AkhilKumarSingh123/MediAlert-AI',
    type: 'Featured',
    category: 'Backend',
  },
  {
    title: 'Personal Portfolio Website',
    image: '../Portfolio.png', // Replace with your actual image path
    description:
      'A modern, responsive portfolio built with React and Tailwind CSS. Showcases projects, skills, resume, and contact information with animations and clean UI.',
    tags: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Vite'],
    liveDemo: 'https://akhil-kumar-singh-portfolio-llge.onrender.com', // Replace with your live link
    code: 'https://github.com/AkhilKumarSingh123/Portfolio', // Replace with your GitHub link
    type: 'Featured',
    category: 'Frontend',
  },
  {
    title: 'Employees Management System',
    image: '../EMS.jpeg',
    description:
      'A Task Management System built using MERN Stack with admin-controlled assignment, employee dashboards, and real-time tracking via MongoDB Storage.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    liveDemo: 'https://ems-p5ma.onrender.com',
    code: 'https://github.com/AkhilKumarSingh123/EMS',
    type: 'Featured',
    category: 'Backend',
  },
  {
    title: 'Bookstore Application (MERN Stack)',
    image: '../Bookstore.jpeg',
    description:
      'A full-stack platform with JWT-based login, admin-only book management, and content access toggling. Enables seamless browsing of books.',
    tags: ['ReactJS', 'Node.js', 'MongoDB', 'JWT', 'Express'],
    liveDemo: 'https://bookstore-mern.vercel.app',
    code: 'https://github.com/AkhilKumarSingh123/bookStore',
    type: 'Featured',
    category: 'Backend',
  },
];

const tabs = ['All Projects', 'Featured', 'Frontend', 'Backend'];

const Project = () => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const filteredProjects =
    activeTab === 'All Projects'
      ? projectsData
      : projectsData.filter((p) =>
          activeTab === 'Featured'
            ? p.type === 'Featured'
            : p.category === activeTab
        );

  return (
    <section className="px-8 py-30 md:px-4 md:py-28 bg-gray-700 text-gray-900 bg-gray-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
        <p className="text-white mb-8">
          Here are some of the projects I've worked on. Each project represents different skills and challenges I've tackled.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border ${
                activeTab === tab
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-400 text-white border-gray-300'
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile/Tablet - Swiper View */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-600 border rounded-xl overflow-hidden shadow text-left w-[90%] mx-auto">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    {project.type === 'Featured' && (
                      <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-white mb-3">
                      {project.description.length > 120
                        ? project.description.slice(0, 120) + '...'
                        : project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-white mb-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-500 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:underline"
                      >
                        Code ↗
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-600 text-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition text-left"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.type === 'Featured' && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-white mb-3">
                  {project.description.length > 120
                    ? project.description.slice(0, 120) + '...'
                    : project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-white mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-500 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:underline"
                  >
                    Code ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
