import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =======================
   Tech Icon Mapping
   ======================= */
const techIcons = {
  "React.js": "/icons/React.svg",
  "Next.js": "/icons/Next.js.svg",
  JavaScript: "/icons/JavaScript.svg",
  "Tailwind CSS": "/icons/Tailwind CSS.svg",
  Vercel: "/icons/Vercel.svg",
  Netlify: "/icons/Netlify.svg",
  "Google Sheets": "/icons/GoogleSheets.svg",
  "Resend API": "/icons/Resend.svg"
};

/* =======================
   Projects Data
   ======================= */
const projectsData = [
  {
    id: 1,
    title: "WeWravel – Travel Agency Platform",
    description:
      "Modern travel agency website featuring destination listings, immersive UI, responsive design, and optimized performance for real-world users.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
    image: "/project1.png",
    demo: "https://wewravel.com/",
    role: "Frontend Developer",
    teamSize: "Solo Project",
    features: [
      "SEO Optimized Pages",
      "Responsive UI",
      "Fast Page Loads",
      "Modern Design System"
    ]
  },
  {
    id: 2,
    title: "Anthem Fans & Appliances",
    description:
      "Premium product website for a ceiling fan and appliances brand, built with a focus on performance, animations, and brand storytelling.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Google Sheets",
      "Netlify"
    ],
    image: "/project2.png",
    demo: "https://anthemappliances.com/",
    role: "Full-Stack Developer",
    teamSize: "Client Project",
    features: [
      "Product Showcase",
      "Dealer & Contact Forms",
      "Google Sheets Integration",
      "Smooth Animations"
    ]
  },
  {
    id: 3,
    title: "SimplyMusicIndia – Music Production Company",
    description:
      "Corporate website for a music production company with clean UI, fast delivery emails, and scalable architecture.",
    technologies: ["Next.js", "Tailwind CSS", "Resend API", "Vercel"],
    image: "/project3.png",
    demo: "https://www.simplymusicindia.com/",
    role: "Frontend Developer",
    teamSize: "Solo Project",
    features: [
      "Email Automation",
      "Fast Deployment",
      "SEO Friendly Pages",
      "Minimal UI Design"
    ]
  }
];

const easing = [0.22, 1, 0.36, 1];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Selected Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world products built for production environments with a strong
            focus on performance and UX.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, ease: easing }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/5"
            >
              <div className="rounded-3xl bg-[#0e0e0e]/90 backdrop-blur-xl overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Role & Team */}
                  <div className="flex justify-between text-xs text-gray-400 mb-6">
                    <span>
                      <strong className="text-gray-300">Role:</strong>{" "}
                      {project.role}
                    </span>
                    <span>
                      <strong className="text-gray-300">Team:</strong>{" "}
                      {project.teamSize}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Icons (WHITE BACKGROUND) */}
                  <div className="flex items-center flex-wrap gap-4 mb-6">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="group relative w-11 h-11 rounded-xl bg-white border border-black/10 flex items-center justify-center shadow-sm hover:shadow-md transition"
                      >
                        <img
                          src={techIcons[tech]}
                          alt={tech}
                          className="w-6 h-6 object-contain"
                        />

                        {/* Tooltip */}
                        <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition text-xs bg-black text-white px-2 py-1 rounded-md whitespace-nowrap">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
                  >
                    View Case Study
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease: easing }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0e0e0e] rounded-3xl max-w-xl w-full p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              {/* Modal Tech Icons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {selectedProject.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="group relative w-11 h-11 rounded-xl bg-white border border-black/10 flex items-center justify-center shadow-sm"
                  >
                    <img
                      src={techIcons[tech]}
                      alt={tech}
                      className="w-6 h-6"
                    />

                    <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition text-xs bg-black text-white px-2 py-1 rounded-md whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition"
              >
                Visit Live Website
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
