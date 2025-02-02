import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Research = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-space-medium"
        >
          Research & Studies
        </motion.h1>
        
        {/* Research content will be added here */}
        <div className="prose max-w-none">
          <p className="text-gray-600">Research content coming soon...</p>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Research;