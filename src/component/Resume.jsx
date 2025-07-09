import React, { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = {
    projects: [
      {
        date: "02/2025 – 06/2025",
        title: "MediAlert AI (MERN Stack, AI Integrated)",
        tech: "HTML, CSS, JavaScript, ReactJS, MongoDB, AI",
        points: [
          "Developed an AI-driven medical assistance platform with AI-powered disease prediction, emergency alert, and treatment suggestions.",
          "Integrated secure JWT authentication for patients, doctors, and admins.",
          "Ensured instant diagnosis and emergency response.",
        ],
      },
      {
        date: "11/2024 – 01/2025",
        title: "Bookstore Application (MERN Stack)",
        tech: "HTML, CSS, JavaScript, ReactJS, MongoDB",
        points: [
          "Created a secure platform with JWT authentication, free & paid content access, and admin-only book management features.",
          "Enabled seamless browsing with book search, adding, and toggling.",
        ],
      },
      {
        date: "09/2024 – 10/2024",
        title: "Employees Management System",
        tech: "HTML, CSS, JavaScript",
        points: [
          "Built a task management system with admin-controlled task assignment and employee tracking.",
          "Used JavaScript & Local Storage for real-time updates.",
        ],
      },
    ],

    education: [
      {
        date: "2023 – 2025",
        degree: "Masters of Computer Application (CGPA - 9.19)",
        institution: "Kamla Nehru Institute of Technology, Sultanpur",
        courseOutcome:
          "Gained strong conceptual and practical understanding of software development life cycle, full-stack web development, and system design.",
        strongKnowledge: [
          "Data Structures & Algorithms",
          "DBMS", "OOPs",
          "Operating Systems",
          "Computer Networks",
          "MERN Stack Development",
          "Software Engineering Principles",
        ],
        achievements: [],
      },
      {
        date: "2020 – 2023",
        degree: "B.Sc. Computer Science",
        institution: "Digvijay Nath P.G. College (DDUGU), Gorakhpur",
        courseOutcome:
          "Built a foundational understanding of computer systems, programming concepts, and logical problem-solving.",
        strongKnowledge: [
          "C , Java Programming",
          "Mathematics for Computing",
          "Object-Oriented Concepts",
          "Database Management",
          "Web Technologies",
        ],
        achievements: [],
      },
    ],

    certifications: [
      {
        year: "2025",
        title: "Full Stack Development",
        issuer: "Udemy",
        description:
          "Certified in full-stack development covering frontend and backend technologies.",
      },
      {
        year: "2025",
        title: "SQL Crash Course",
        issuer: "Udemy",
        description:
          "Completed SQL fundamentals and advanced querying techniques.",
      },
      {
        year: "2025",
        title: "CSS with JavaScript and Python Programming",
        issuer: "Udemy",
        description:
          "Acquired proficiency in combining CSS with JS and Python for dynamic applications.",
      },
    ],
  };

  return (
    <section className="bg-gray-800 w-full min-h-screen px-8 py-30 md:px-4 md:py-20 text-center">
      <h2 className="text-3xl text-white font-bold mb-2">My Resume</h2>
      <p className="text-white max-w-xl mx-auto mb-6">
        My professional journey showcases a blend of technical expertise,
        collaborative work, and continuous learning. Here’s a snapshot of my
        projects, education, and certifications.
      </p>

      {/* Download Resume Button */}
      <div className="flex justify-center mb-4">
        <a
          href="../public/resume.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-4 py-2 rounded ${
            activeTab === "projects" ? "bg-blue-600 text-white" : "bg-gray-500 text-white"
          }`}
        >
          💻 Projects
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-4 py-2 rounded ${
            activeTab === "education" ? "bg-blue-600 text-white" : "bg-gray-500 text-white"
          }`}
        >
          🎓 Education
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`px-4 py-2 rounded ${
            activeTab === "certifications"
              ? "bg-blue-600 text-white"
              : "bg-gray-500 text-white"
          }`}
        >
          🏅 Certifications
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto text-left">
        {tabs[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white p-4 mb-6 rounded-lg shadow-sm"
          >
            {activeTab === "projects" && (
              <>
                <p className="text-sm text-white">{item.date}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-green-300 italic">{item.tech}</p>
                <ul className="list-disc list-inside text-gray-50 mt-2">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {activeTab === "education" && (
              <>
                <p className="text-sm text-white">{item.date}</p>
                <h3 className="text-lg font-semibold">{item.degree}</h3>
                <p className="text-green-300">{item.institution}</p>

                {/* Course Outcome */}
                {item.courseOutcome && (
                  <p className="text-gray-50 mt-2">
                    <strong>Course Outcome:</strong> {item.courseOutcome}
                  </p>
                )}

                {/* Strong Knowledge Areas */}
                {item.strongKnowledge && item.strongKnowledge.length > 0 && (
                  <div className="mt-2">
                    <strong className="text-gray-100">
                      Strong Knowledge In:
                    </strong>
                    <ul className="list-disc list-inside text-gray-50">
                      {item.strongKnowledge.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements (optional) */}
                {item.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-50 mt-2">
                    {item.achievements.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {activeTab === "certifications" && (
              <>
                <p className="text-sm text-white">{item.year}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-green-300">{item.issuer}</p>
                <p className="text-gray-50 mt-2">{item.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
