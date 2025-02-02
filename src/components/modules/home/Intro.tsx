import React from "react";
import { motion } from "framer-motion";

const DnaHero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-white overflow-hidden">
   
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