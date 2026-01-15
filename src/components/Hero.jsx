import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "Java & Spring Boot Engineer",
  "React.js Frontend Specialist",
  "Problem Solver"
];

const techIcons = [
  { name: "Java", src: "/icons/Java.svg" },
  { name: "Spring", src: "/icons/Spring.svg" },
  { name: "React", src: "/icons/React.svg" },
  { name: "Tailwind CSS", src: "/icons/Tailwind CSS.svg" }
];

const Hero = () => {
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");
  const [phase, setPhase] = useState("greeting");
  const [roleIndex, setRoleIndex] = useState(0);

  const greetingText = "Hi, I'm";
  const nameText = "Kartikay Awasthi";

  /* Typing effect */
  useEffect(() => {
    let g = 0;
    let n = 0;

    const greetInterval = setInterval(() => {
      if (g < greetingText.length) {
        setGreeting(greetingText.slice(0, g + 1));
        g++;
      } else {
        clearInterval(greetInterval);
        setPhase("name");

        setTimeout(() => {
          const nameInterval = setInterval(() => {
            if (n < nameText.length) {
              setName(nameText.slice(0, n + 1));
              n++;
            } else {
              clearInterval(nameInterval);
              setPhase("done");
            }
          }, 120);
        }, 300);
      }
    }, 80);

    return () => clearInterval(greetInterval);
  }, []);

  /* Rotating roles */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kartikay_Awasthi_Resume.pdf";
    link.download = "Kartikay_Awasthi_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-[#0b0b0b] to-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="block text-white">
                {greeting}
                {phase === "greeting" && (
                  <span className="inline-block w-1 h-10 bg-white ml-2 animate-pulse" />
                )}
              </span>

              <span className="block text-gray-300 mt-2">
                {name}
                {phase !== "done" && (
                  <span className="inline-block w-1 h-10 bg-gray-400 ml-2 animate-pulse" />
                )}
              </span>
            </h1>

            {/* Rotating Role */}
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-6"
            >
              {roles[roleIndex]}
            </motion.p>

            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Building scalable, production-ready applications using{" "}
              <span className="text-white font-medium">
                Java, Spring Boot, React.js
              </span>{" "}
              and modern UI systems.
            </p>

            {/* Tech Icons (SVG from public/icons) */}
            <div className="flex gap-6 justify-center lg:justify-start mb-10">
              {techIcons.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="w-14 h-14 rounded-xl bg-white border border-white/20 flex items-center justify-center shadow-lg"
                  title={tech.name}
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-7 h-7 object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                View Projects
              </motion.a>

              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          {/* PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/40 to-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-[260px] sm:w-[320px] rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 p-4">
                <img
                  src="/profile.jpg"
                  alt="Kartikay Awasthi"
                  className="rounded-[24px] object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm flex flex-col items-center"
        >
          <span className="mb-1">Scroll</span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
