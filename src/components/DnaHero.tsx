import React from "react";
import { motion } from "framer-motion";

const DnaHero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Add DNA SVG animation here */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full opacity-10"
        >
          {/* Placeholder for DNA SVG */}
          <div className="w-full h-full bg-gradient-to-r from-space-light to-secondary opacity-20" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-space-dark mb-6">
          Transform Your Health
        </h1>
        <p className="text-xl md:text-2xl text-space-medium max-w-2xl mx-auto">
          Advanced Stem Cell Activation Technology
        </p>
      </motion.div>
    </div>
  );
};

export default DnaHero;