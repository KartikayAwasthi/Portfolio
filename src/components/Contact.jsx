import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaGithub
} from "react-icons/fa6";

const easing = [0.22, 1, 0.36, 1];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "ikartikay.awasthi@gmail.com",
      link: "mailto:ikartikay.awasthi@gmail.com"
    },
    {
      title: "Phone",
      value: "+91 81818 62121",
      link: "tel:+918181862121"
    },
    {
      title: "Location",
      value: "Kanpur, Uttar Pradesh, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/kartikay_awasthi/",
      hover: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/",
      hover: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/",
      hover: "hover:text-white"
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/",
      hover: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      link: "https://twitter.com/",
      hover: "hover:text-gray-300"
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Open to full-time roles, freelance work, and meaningful collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="block p-5 rounded-2xl bg-white/5 border border-white/20 hover:border-white transition"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    {info.title}
                  </p>
                  <p className="text-white font-medium mt-1">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-4">
                Connect with me
              </p>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-gray-400 transition hover:border-white ${social.hover}`}
                    >
                      <Icon className="text-lg" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-[1px] bg-gradient-to-b from-white/30 to-white/10"
          >
            <div className="rounded-3xl bg-[#0e0e0e]/90 backdrop-blur-xl p-10">
              <h3 className="text-2xl font-semibold mb-8">
                Send a Message
              </h3>

              {/* Success Message */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-xl bg-white/10 text-sm"
                  >
                    ✅ Message sent successfully.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email"].map((field) => (
                  <div key={field} className="relative">
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="peer w-full p-4 rounded-xl bg-black/40 border border-white text-white outline-none focus:ring-1 focus:ring-white"
                    />
                    <label className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs transition-all">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </div>
                ))}

                <div className="relative">
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="peer w-full p-4 rounded-xl bg-black/40 border border-white text-white outline-none resize-none focus:ring-1 focus:ring-white"
                  />
                  <label className="absolute left-4 top-4 text-sm text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs transition-all">
                    Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
