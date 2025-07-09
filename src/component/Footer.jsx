

// import React from "react";
// import Home from "../page/Home.jsx";

// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-700 py-8 px-4 scroll-smooth">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

//         {/* Logo / Name */}
//         <div className="text-center md:text-left">
//           <h2 className="text-2xl font-bold text-white">Akhil Kumar Singh</h2>
//           <p className="text-sm text-green-400">Software Developer</p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-wrap gap-4 justify-center">
//           {[
//             { name: "Home", href: "/" },
//             { name: "About", href: "/about" },
//             { name: "Skills", href: "/skill" },
//             { name: "Projects", href: "/project" },
//             { name: "Resume", href: "/resume" },
//             // { name: "GitHub", href: "#github" },
//             { name: "Contact", href: "/contact" },
//           ].map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-white hover:text-green-400 text-sm transition"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4 text-xl justify-center items-center">
//           {/* GitHub */}
//           <a
//             href="https://github.com/AkhilKumarSingh123"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-green-400"
//           >
//             <FaGithub />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/akhil-kumar-singh-851802218/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-green-400"
//           >
//             <FaLinkedin />
//           </a>

//           {/* LeetCode */}
//           <a
//             href="https://leetcode.com/u/akhil220999/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-80"
//             title="LeetCode"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 50 50"
//               fill="currentColor"
//               className="w-5 h-5 text-white hover:text-green-400"
//             >
//               <path d="M33.64 9.54a13.43 13.43 0 0 0-18.86 0l-1.88 1.88a1.75 1.75 0 0 0 2.48 2.48l1.88-1.88a9.92 9.92 0 0 1 14.02 0 9.92 9.92 0 0 1 0 14.02l-13.3 13.3a1.75 1.75 0 1 0 2.48 2.48l13.3-13.3a13.43 13.43 0 0 0 0-18.86Z"/>
//               <path d="M16.36 40.46a13.43 13.43 0 0 0 18.86 0l1.88-1.88a1.75 1.75 0 0 0-2.48-2.48l-1.88 1.88a9.92 9.92 0 0 1-14.02 0 9.92 9.92 0 0 1 0-14.02l13.3-13.3a1.75 1.75 0 0 0-2.48-2.48l-13.3 13.3a13.43 13.43 0 0 0 0 18.86Z"/>
//             </svg>
//           </a>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="text-center text-green-400 text-sm mt-6">
//         © {new Date().getFullYear()} Akhil Kumar Singh. All rights reserved.
//       </div>
//     </footer>
//   );
// }





// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-700 py-8 px-4 scroll-smooth">
//       <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-6 md:flex-row md:justify-between md:items-center">

//         {/* Name & Role */}
//         <div className="text-center md:text-left">
//           <h2 className="text-2xl font-bold text-white">Akhil Kumar Singh</h2>
//           <p className="text-sm text-green-400">Software Developer</p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-wrap justify-center gap-3 text-center md:justify-start">
//           {[
//             { name: "Home", href: "/" },
//             { name: "About", href: "/about" },
//             { name: "Skills", href: "/skill" },
//             { name: "Projects", href: "/project" },
//             { name: "Resume", href: "/resume" },
//             { name: "Contact", href: "/contact" },
//           ].map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-white hover:text-green-400 text-sm transition"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-5 text-xl md:justify-end">
//           {/* GitHub */}
//           <a
//             href="https://github.com/AkhilKumarSingh123"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-green-400"
//           >
//             <FaGithub />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/akhil-kumar-singh-851802218/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-green-400"
//           >
//             <FaLinkedin />
//           </a>

//           {/* LeetCode */}
//           <a
//             href="https://leetcode.com/u/akhil220999/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-green-400"
//             title="LeetCode"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 50 50"
//               fill="currentColor"
//               className="w-5 h-5"
//             >
//               <path d="M33.64 9.54a13.43 13.43 0 0 0-18.86 0l-1.88 1.88a1.75 1.75 0 0 0 2.48 2.48l1.88-1.88a9.92 9.92 0 0 1 14.02 0 9.92 9.92 0 0 1 0 14.02l-13.3 13.3a1.75 1.75 0 1 0 2.48 2.48l13.3-13.3a13.43 13.43 0 0 0 0-18.86Z" />
//               <path d="M16.36 40.46a13.43 13.43 0 0 0 18.86 0l1.88-1.88a1.75 1.75 0 0 0-2.48-2.48l-1.88 1.88a9.92 9.92 0 0 1-14.02 0 9.92 9.92 0 0 1 0-14.02l13.3-13.3a1.75 1.75 0 0 0-2.48-2.48l-13.3 13.3a13.43 13.43 0 0 0 0 18.86Z" />
//             </svg>
//           </a>
//         </div>
//       </div>

//       {/* Bottom Text */}
//       <div className="text-center text-green-400 text-sm mt-6">
//         © {new Date().getFullYear()} Akhil Kumar Singh. All rights reserved.
//       </div>
//     </footer>
//   );
// }





import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 py-10 px-4  scroll-smooth mb-15 md:mb-0">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-6 md:flex-row md:justify-between md:items-center">

        {/* Name & Role */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Akhil Kumar Singh</h2>
          <p className="text-sm text-green-400">Software Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-center md:justify-start">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Skills", href: "/skill" },
            { name: "Projects", href: "/project" },
            { name: "Resume", href: "/resume" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-green-400 text-sm transition duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-xl md:justify-end">
          {/* GitHub */}
          <a
            href="https://github.com/AkhilKumarSingh123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-200 cursor-pointer"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akhil-kumar-singh-851802218/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-200 cursor-pointer"
          >
            <FaLinkedin />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/akhil220999/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition duration-200 cursor-pointer"
            title="LeetCode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path d="M33.64 9.54a13.43 13.43 0 0 0-18.86 0l-1.88 1.88a1.75 1.75 0 0 0 2.48 2.48l1.88-1.88a9.92 9.92 0 0 1 14.02 0 9.92 9.92 0 0 1 0 14.02l-13.3 13.3a1.75 1.75 0 1 0 2.48 2.48l13.3-13.3a13.43 13.43 0 0 0 0-18.86Z" />
              <path d="M16.36 40.46a13.43 13.43 0 0 0 18.86 0l1.88-1.88a1.75 1.75 0 0 0-2.48-2.48l-1.88 1.88a9.92 9.92 0 0 1-14.02 0 9.92 9.92 0 0 1 0-14.02l13.3-13.3a1.75 1.75 0 0 0-2.48-2.48l-13.3 13.3a13.43 13.43 0 0 0 0 18.86Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-green-400 text-sm mt-8">
        © {new Date().getFullYear()} Akhil Kumar Singh. All rights reserved.
      </div>
    </footer>
  );
}
