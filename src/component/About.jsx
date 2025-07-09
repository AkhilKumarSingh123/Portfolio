
import React from 'react';
import {
  FaCode,
  FaUserClock,
  FaLightbulb,
  FaLaptopHouse
} from 'react-icons/fa';

const About = () => {
  const languages = [
    'C','Java', 'Html', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS',
    'Node.js', 'Express.js', 'MongoDB', 'MySQL',
  , 'OpenAI API'
  ];

  const highlights = [
    {
      title: 'MERN Stack Developer',
      desc: 'Specializing in React, Node.js, Express.js, MongoDB',
      icon: <FaCode className="text-3xl text-purple-600 mb-2" />,
      bg: 'bg-purple-100'
    },
    {
      title: 'Experience',
      desc: 'Worked on multiple real-world projects to design and develop effective software solutions.',
      icon: <FaUserClock className="text-3xl text-pink-600 mb-2" />,
      bg: 'bg-pink-100'
    },
    {
      title: 'Continuous Learner',
      desc: 'Always exploring new tech to improve skills',
      icon: <FaLightbulb className="text-3xl text-green-600 mb-2" />,
      bg: 'bg-green-100'
    },
    {
      title: 'Remote-Friendly',
      desc: 'Efficient and reliable in remote working environments',
      icon: <FaLaptopHouse className="text-3xl text-red-600 mb-2" />,
      bg: 'bg-red-100'
    }
  ];

  return (
    <section className="bg-gray-700 px-8 py-30 md:px-4 md:py-25 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-50 mb-10">
          I'm a passionate software developer with a keen eye for detail and a commitment to writing clean, efficient code.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} p-4 rounded-xl shadow transition transform hover:scale-105 hover:shadow-xl duration-300`}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-gray-700 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: My Journey */}
        <div>
          <h3 className="text-3xl font-bold mb-4 mt-5 text-white text-left">My Journey</h3>
          <p className="mb-4 text-gray-50 leading-relaxed text-left">
              I have completed my Master of Computer Applications (MCA) from Kamla Nehru Institute of Technology, Sultanpur, with a CGPA of 9.19/10. I possess a strong foundation in data structures, algorithms, and system design. I specialize in full-stack development, with expertise in building scalable backend APIs using Node.js, Express.js, and MongoDB/MySQL, as well as developing responsive and dynamic user interfaces using React.js, Tailwind CSS, and JavaScript.
          </p>
          <p className="text-gray-50 leading-relaxed text-left">
              Built real-time projects like MediAlert AI (AI-integrated medical platform), Employee Management System (role-based dashboards), and Bookstore Web App (book & user management) to strengthen my full-stack development skills.
          </p>
        </div>

        {/* Right: Personal Info */}
        <div className="bg-gray-600 p-6 rounded-xl shadow-md max-w-4xl mx-auto mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6 text-left">
            <div>
              <h4 className="font-semibold text-green-300">Name</h4>
              <p className="text-white">Akhil Kumar Singh</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-300">Email</h4>
              <p className="text-white break-words">akhil4dnpg@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-300">Location</h4>
              <p className="text-white">Gorakhpur</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-300">Availability</h4>
              <p className="text-white">Available for hire</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-green-400 mb-2 text-left">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <span
                  key={index}
                  className="bg-gray-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
