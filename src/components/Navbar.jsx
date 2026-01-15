import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const navLinks = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "skills", label: "Skills" },
  { name: "projects", label: "Projects" },
  { name: "contact", label: "Contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: easing }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
          : "bg-black/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            onClick={() => {
              setIsOpen(false);
              setActive("home");
            }}
            className="cursor-pointer flex items-center gap-3"
          >
            <img
              src="/logo/kartikay-logo.png"
              alt="Kartikay Awasthi"
              className="w-9 h-9"
            />
            <span className="hidden sm:block text-white font-semibold">
              Kartikay Awasthi
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  to={link.name}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  onSetActive={() => setActive(link.name)}
                  className={`cursor-pointer font-medium transition ${
                    active === link.name
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>

                {active === link.name && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"
                  />
                )}
              </div>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white rounded"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white rounded"
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-6 py-10 space-y-6 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.name}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => {
                      setIsOpen(false);
                      setActive(link.name);
                    }}
                    className="block text-2xl font-semibold text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 md:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
