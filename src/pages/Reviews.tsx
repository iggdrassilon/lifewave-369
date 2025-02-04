import React from "react";
import { motion } from "framer-motion";
import Footer from "@/src/components/modules/Footer";
import BackToTop from "@/src/components/BackToTop";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-space-medium"
        >
          Customer Reviews
        </motion.h1>
        
        {/* Reviews content will be added here */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <p className="text-gray-600">Reviews coming soon...</p>
        </div>
      </main>
    </div>
  );
};

export default Reviews;