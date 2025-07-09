import React from 'react';

const toolsAndTech = [
  'C', 'Java', 'JavaScript', 'SQL',
  'HTML', 'CSS', 'React.js', 'Tailwind CSS',
  'Bootstrap', 'Material-UI', 'Context API', 'Node.js',
  'Express.js', 'RESTful APIs', 'JWT', 'OAuth',
  'MongoDB', 'MySQL', 'MongoDB Pipelining', 'Postman', 'Netlify',
  'Vercel', 'Vite', 'Git', 'MongoDB Atlas', 'OpenAI API', 'Stripe',
  'Cloudinary', 'Nodemailer', 'Multer', 'Axios', 'CORS', 'Figma', 'Canva'
];

const Tools = () => {
  return (
    <section className="px-4 py-10 bg-gray-800 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Tools & Technologies I Work With</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {toolsAndTech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 hover:bg-green-400 text-white text-sm px-4 py-2 rounded-md shadow-sm transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
