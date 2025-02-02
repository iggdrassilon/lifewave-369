import React from "react";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="prose max-w-none">
        <p className="text-sm text-gray-600 text-center">
          Disclaimer content coming soon...
        </p>
      </div>
    </motion.section>
  );
};

export default Disclaimer;