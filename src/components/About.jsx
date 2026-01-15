import React from "react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const timeline = [
  {
    year: "2023 – Present",
    title: "Full-Stack Developer",
    org: "Freelance / Client Projects",
    desc:
      "Developing production-ready full-stack applications using React, Next.js, Java, and Spring Boot for real clients across multiple industries."
  },
  {
    year: "2021 – 2023",
    title: "Frontend Developer",
    org: "Agency & Startup Environment",
    desc:
      "Built scalable UI systems, responsive layouts, and SEO-optimized websites while collaborating with designers and backend teams."
  },
  {
    year: "2019 – 2021",
    title: "Web Developer",
    org: "CMS & Early Projects",
    desc:
      "Started professional journey with HTML, CSS, JavaScript, WordPress, and Shopify while building strong UI & performance fundamentals."
  }
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Client Projects" },
  { value: "3+", label: "Production Apps" },
  { value: "100%", label: "Client Satisfaction" }
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/5 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20 items-center mb-28"
        >
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Building reliable <br />
              <span className="text-white/70">full-stack products</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              I’m <strong className="text-white">Kartikay Awasthi</strong>, a
              full-stack developer with strong expertise in modern frontend
              systems and solid backend engineering using Java & Spring.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                React.js
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                Java & Spring Boot
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                OOPs & DSA
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="relative mx-auto">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/30 to-white/5 blur-2xl" />
            <div className="relative rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 p-4 w-[280px] sm:w-[320px]">
              <img
                src="/profile.jpg"
                alt="Kartikay Awasthi"
                className="rounded-[24px] object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center hover:border-white/30 transition"
            >
              <h3 className="text-3xl font-bold mb-1">{s.value}</h3>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-16 mb-28">
          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Frontend Expertise
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>⚛ React.js (Hooks, Performance, Scalable Architecture)</li>
              <li>🎨 Tailwind CSS & Responsive Design Systems</li>
              <li>⚡ Next.js SEO & Optimized Rendering</li>
              <li>🧠 UI State Management & Component Reusability</li>
            </ul>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Backend & Core CS
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>☕ Java, Spring Boot, REST APIs</li>
              <li>🧩 OOPs, SOLID Principles & Clean Architecture</li>
              <li>📊 DSA & Problem Solving (Arrays, Strings, Recursion)</li>
              <li>🔐 Secure & Scalable Backend Integration</li>
            </ul>
          </motion.div>
        </div>

        {/* TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-10">
            Professional Journey
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/30 transition"
              >
                <p className="text-sm text-gray-400 mb-2">{t.year}</p>
                <h4 className="text-lg font-semibold mb-1">{t.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{t.org}</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
