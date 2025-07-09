
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_fbvd1dh',
        'template_fwao1da',
        formData,
        'E5CmD7_yJKPD8rqDj'
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSuccessMessage(true);

          setTimeout(() => {
            setSuccessMessage(false);
          }, 6000);
        },
        (error) => {
          console.error('Email sending error:', error);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section className="px-8 py-30 md:px-4 text-gray-800 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-white max-w-1xl mx-auto mb-12">
          Have a project in mind or want to discuss a potential opportunity? I’d love to hear from you! Feel free to reach out using the form below or through any of my contact channels.
        </p>

        {successMessage && (
          <div className="mb-8 transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-4 bg-green-100 border border-green-400 text-green-800 p-4 rounded-xl shadow-md">
              <FaCheckCircle className="text-green-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-green-700 text-lg">Message Sent Successfully!</h4>
                <p className="text-sm text-green-700">
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="font-bold text-left text-3sm text-white">Get in Touch</h2>
            <div className="flex items-start gap-4 bg-gray-700 p-2 rounded-xl">
              <FaEnvelope className="text-green-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-green-400 text-left">Email</h4>
                <p className="text-gray-50">akhil4dnpg@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-700 p-2 rounded-xl">
              <FaMapMarkerAlt className="text-green-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-green-400 text-left">Location</h4>
                <p className="text-left text-gray-50">Gorakhpur, Uttar Pradesh, India</p>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4 text-left font-bold text-3sm">Follow Me</h4>
              <div className="flex gap-5 text-2xl text-gray-100">
                <a
                  href="https://github.com/AkhilKumarSingh123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil-kumar-singh-851802218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-700 p-6 rounded-xl shadow">
            <h2 className="font-bold text-left text-3sm mb-5 text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 w-full border border-gray-200 text-white bg-gray-600 rounded-xl"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 w-full border border-gray-200 text-white bg-gray-600 rounded-xl"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 w-full border border-gray-200 text-white bg-gray-600 rounded-xl"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                className="p-3 w-full border border-gray-300 text-white bg-gray-600 rounded-xl"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
              >
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
