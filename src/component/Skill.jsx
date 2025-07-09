
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SkillBar = ({ name, percent, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-100">{name}</span>
      <span className="text-sm text-green-400">{percent}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ title, skills, color }) => (
  <div className="bg-gray-700 p-8 rounded-xl shadow-md w-full max-w-[400px] lg:max-w-[460px] mx-auto">
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    {skills.map((skill, index) => (
      <SkillBar key={index} name={skill.name} percent={skill.percent} color={color} />
    ))}
  </div>
);


const Skill = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', percent: 95 },
    { name: 'JavaScript', percent: 90 },
    { name: 'React.js', percent: 90 },
    { name: 'Tailwind CSS', percent: 90 },
    { name: 'Bootstrap', percent: 85 },
    { name: 'Material-UI', percent: 85 },
    { name: 'Context API', percent: 80 },
  ];

  const backendSkills = [
    { name: 'MongoDB', percent: 85 },
    { name: 'MySQL', percent: 90 },
    { name: 'Node.js', percent: 85 },
    { name: 'Express.js', percent: 85 },
    { name: 'RESTful APIs', percent: 90 },
    { name: 'JWT', percent: 80 },
    { name: 'API Integration', percent: 85 },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', percent: 90 },
    { name: 'MongoDB Atlas', percent: 75 },
    { name: 'Postman', percent: 85 },
    { name: 'VsCode', percent: 90 },
    { name: 'Vercel/Netlify', percent: 85 },
    { name: 'Testing/Debugging', percent: 90 },
  ];

  return (
    <section className="bg-gray-800 py-12  px-8 py-30 md:px-4 md:py-30 text-gray-900 ">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-white text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-white mb-10">
          I've developed expertise in various technologies through hands-on experience and continuous learning.
        </p>

        {/* Mobile/Tablet View - Swiper Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <SkillCard
                title="Frontend Development"
                skills={frontendSkills}
                color="bg-purple-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard
                title="Backend Development"
                skills={backendSkills}
                color="bg-green-600"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SkillCard
                title="Other Skills"
                skills={otherSkills}
                color="bg-red-500"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Desktop View - 3 Column Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
            color="bg-purple-500"
          />
          <SkillCard
            title="Backend Development"
            skills={backendSkills}
            color="bg-green-500"
          />
          <SkillCard
            title="Other Skills"
            skills={otherSkills}
            color="bg-red-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;






