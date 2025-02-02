import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DnaHero from "@/components/DnaHero";
import VideoSection from "@/components/VideoSection";
import HowItWorks from "@/components/HowItWorks";
import WearInstructions from "@/components/WearInstructions";
import Timeline from "@/components/Timeline";
import ProductCards from "@/components/ProductCards";
import Disclaimer from "@/components/Disclaimer";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import SpaceBackground from "@/components/SpaceBackground";
import SpaceLines from "@/components/SpaceLines";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative">
      <SpaceBackground />
      <SpaceLines />
      <Navigation />
      
      <main>
        <DnaHero />
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16 relative z-10"
        >
          <VideoSection
            title="Activate Your Stem Cells"
            videoUrl="https://www.youtube.com/embed/SXMvqTQ4J1Y?feature=oembed"
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 py-16 relative z-10"
        >
          <VideoSection
            title="How our product Activates Your Own Stem Cells"
            videoUrl="https://www.youtube.com/embed/S-itVjiYD-A?feature=oembed"
            buttons={[
              "Patents and Studies",
              "The Story of Product",
              "GNK-Cu Copper Peptide",
              "Age Reversal with GNK-Cu"
            ]}
          />
        </motion.section>

        <HowItWorks />
        <WearInstructions />
        <Timeline />
        <ProductCards />
        <Disclaimer />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;