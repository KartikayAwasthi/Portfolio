import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillRing from "./SkillRing";

const easing = [0.22, 1, 0.36, 1];

const skillCards = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "/icons/React.svg", level: 90 },
      { name: "JavaScript", icon: "/icons/JavaScript.svg", level: 88 },
      { name: "HTML5", icon: "/icons/HTML5.svg", level: 92 },
      { name: "CSS3", icon: "/icons/CSS3.svg", level: 90 },
      { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: "/icons/Java.svg", level: 90 },
      { name: "Spring Boot", icon: "/icons/Spring.svg", level: 88 },
      { name: "Spring MVC", icon: "/icons/Spring.svg", level: 85 },
      { name: "REST APIs", icon: "/icons/Postman.svg", level: 90 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "/icons/MySQL.svg", level: 85 },
      { name: "MongoDB", icon: "/icons/MongoDB.svg", level: 80 }
    ]
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: "/icons/Git.svg", level: 90 },
      { name: "GitHub", icon: "/icons/GitHub.svg", level: 88 },
      { name: "Netlify", icon: "/icons/Netlify.svg", level: 85 },
      { name: "Vercel", icon: "/icons/Vercel.svg", level: 88 }
    ]
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative py-28 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-white/5 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A refined technology stack I use to craft scalable, high-performance
            digital experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: easing
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.035 }}
              className="group relative rounded-[28px] p-[1px] bg-gradient-to-b from-white/25 to-white/5"
            >
              <div className="relative rounded-[28px] bg-[#0e0e0e]/90 backdrop-blur-xl p-10 h-full">
                <h3 className="text-xl font-semibold mb-12">
                  {card.title}
                </h3>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                  {card.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="flex flex-col items-center text-center gap-4 cursor-pointer"
                      >
                        {/* Ring + Icon */}
                        <div className="relative w-16 h-16 flex items-center justify-center">
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute"
                              >
                                <SkillRing percent={skill.level} />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Icon */}
                          <div className="absolute w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center shadow-lg">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-20 h-20"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
