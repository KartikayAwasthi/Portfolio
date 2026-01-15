import React from "react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/KartikayAwasthi/",
      icon: "/icons/LinkedIn.svg"
    },
    {
      name: "GitHub",
      href: "https://github.com/kartikay-awasthi",
      icon: "/icons/GitHub.svg"
    },
    {
      name: "Email",
      href: "mailto:ikartikay.awasthi@gmail.com",
      icon: "/icons/Mail.svg"
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kartikay_Awasthi_Resume.pdf";
    link.download = "Kartikay_Awasthi_Resume.pdf";
    link.click();
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-16">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold tracking-tight">
              Kartikay Awasthi
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Full-stack developer specializing in Java, Spring Boot, React.js,
              and modern UI systems. Focused on building scalable,
              production-ready web applications.
            </p>

            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easing }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">
              Navigation
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">
              Get in Touch
            </h4>

            <p className="text-gray-400">
              Kanpur, Uttar Pradesh, India
            </p>

            <a
              href="mailto:ikartikay.awasthi@gmail.com"
              className="block text-gray-400 hover:text-white transition"
            >
              ikartikay.awasthi@gmail.com
            </a>

            <a
              href="tel:+918181862121"
              className="block text-gray-400 hover:text-white transition"
            >
              +91 81818 62121
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-11 h-11 rounded-xl bg-white border border-white/20 flex items-center justify-center shadow-lg"
                  title={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {year} Kartikay Awasthi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
