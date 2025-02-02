import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DnaHeader from "@/components/DnaHeader";
import VideoSection from "@/components/VideoSection";
import PatentSection from "@/components/PatentSection";
import FounderBio from "@/components/FounderBio";
import BackToTop from "@/components/BackToTop";

const Patents = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <DnaHeader title="Science and Research" />
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <VideoSection
            title="HOW IT WORKS"
            videoUrl="https://www.youtube.com/embed/lMESLSNnauA?feature=oembed"
          />
        </motion.section>

        <PatentSection />
        <FounderBio />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Patents;