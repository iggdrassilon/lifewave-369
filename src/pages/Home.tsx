import React from "react";
import { motion } from "framer-motion";
import Footer from "@/src/components/modules/Footer";
import DnaHero from "@/src/components/modules/home/Intro";
import VideoSection from "@/src/components/VideoSection";
import HowItWorks from "@/src/components/HowItWorks";
import WearInstructions from "@/src/components/modules/patents/WearInstructions";
import Timeline from "@/src/components/modules/home/Timeline";
import ProductCards from "@/src/components/ProductCards";
import Disclaimer from "@/src/components/Disclaimer";
import Contact from "@/src/components/Contact";
import BackToTop from "@/src/components/BackToTop";
import SpaceBackground from "@/src/components/SpaceBackground";
import SpaceLines from "@/src/components/SpaceLines";

const Home = () => {
  return (
    <div className="min-h-screen bg-transparent relative">
      {/* <SpaceBackground /> */}
      {/* <SpaceLines /> */}
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

export default Home;