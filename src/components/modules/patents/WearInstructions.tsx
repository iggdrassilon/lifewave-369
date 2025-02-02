import React from "react";
import { motion } from "framer-motion";

const WearInstructions = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-space-medium">
        How To Wear
      </h2>
      <div className="prose max-w-none">
        <p>Instructions coming soon...</p>
      </div>
    </motion.section>
  );
};

export default WearInstructions;