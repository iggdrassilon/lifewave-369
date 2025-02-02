import React from "react";
import { motion } from "framer-motion";

const ProductCards = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-space-medium">
        Our Products
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <p>Products coming soon...</p>
      </div>
    </motion.section>
  );
};

export default ProductCards;