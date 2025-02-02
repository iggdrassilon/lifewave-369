import React from "react";
import { motion } from "framer-motion";
import Footer from "@/src/components/modules/Footer";
import DnaHeader from "@/src/components/modules/home/DnaHeader";
import VideoSection from "@/src/components/VideoSection";
import PatentSection from "@/src/components/modules/patents/PatentSection";
import FounderBio from "@/src/components/modules/patents/FounderBio";
import BackToTop from "@/src/components/BackToTop";

const Patents = () => {
  return (
    <div className="min-h-screen bg-white">
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