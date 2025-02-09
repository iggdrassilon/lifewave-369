import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/src/components/modules/Footer'
import DnaHero from '@/src/components/modules/home/main/MainSectionDNA'
import VideoSection from '@/src/components/modules/home/VideoSection'
import HowItWorks from '@/src/components/modules/home/HowItWorks'
import WearInstructions from '@/src/components/modules/patents/WearInstructions'
import Timeline from '@/src/components/modules/home/Timeline'
import ProductCards from '@/src/components/modules/home/ProductCards'
import Disclaimer from '@/src/components/modules/home/Disclaimer'
import Contact from '@/src/components/modules/home/Contact'
import BackToTop from '@/src/components/BackToTop'
import SpaceBackground from '@/src/components/SpaceBackground'
import SpaceLines from '@/src/components/SpaceLines'
import { MotionLayout } from '../components/layouts/motionLayout'
import WeKnow from '../components/modules/home/we-know/WeKnow'
import Revolution from '../components/modules/home/we-know/Revolution/Revolution'
import Unfortunately from '../components/modules/home/we-know/Unfortunately'
import HowToUse from '../components/modules/home/HowToUse'
import Notice from '../components/modules/home/Notice'

// TODO 
// weknow нужно добавить фон градиент легкий
// revol нужно сделать на синем фоне графы полупрозрачные


const Home = () => {
  return (
    <div className='min-h-screen bg-transparent relative'>
      <main>
        {/* <DnaHero /> */}
        {/* <MotionLayout duration={0.5} delay={0.3}>
          <WeKnow />
        </MotionLayout> */}
        <MotionLayout duration={0.5} delay={0.3}>
          <Revolution />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <Unfortunately />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <HowToUse />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <Notice />
        </MotionLayout>
        
        {/* photo 3 block */}

        {/* <MotionLayout duration={0.5} delay={0}>
          <VideoSection
            title="Activate Your Stem Cells"
            videoUrl="https://www.youtube.com/embed/SXMvqTQ4J1Y?feature=oembed"
          />
        </MotionLayout>
        <MotionLayout duration={0.5} delay={0.3}>
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
        </MotionLayout>
        <MotionLayout duration={0.5} delay={0.3}>
         <HowItWorks />
        </MotionLayout>
        <MotionLayout duration={0.5} delay={0.3}>
          <WearInstructions />
        </MotionLayout>
        <MotionLayout duration={0.5} delay={0.4}>
          <Timeline />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <ProductCards />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <Disclaimer />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <Contact />
        </MotionLayout> */}
      </main>
    </div>
  )
}

export default Home
