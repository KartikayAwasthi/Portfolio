import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const SkillRing = ({ percent }) => {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, percent, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (value) => {
        setCount(Math.round(value));
      }
    });

    return () => controls.stop();
  }, [percent]);

  return (
    <div className="relative w-16 h-16">
      <svg
        width="64"
        height="64"
        className="rotate-[-90deg]"
      >
        {/* Background ring */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="4"
          fill="none"
        />

        {/* Progress ring */}
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>

      {/* Percentage Text */}
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-green">
        {count}%
      </span>
    </div>
  );
};

export default SkillRing;
