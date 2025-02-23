import { MotionLayout } from '@/src/components/layouts/motionLayout'

import DnaHero from '@/src/components/modules/home/main/MainSectionDNA'
import HowItWorks from '@/src/components/modules/home/HowItWorks'
import WeKnow from '@/src/components/modules/home/we-know/WeKnow'
import Revolution from '@/src/components/modules/home/Revolution/Revolution'
import Unfortunately from '@/src/components/modules/home/we-know/Unfortunately'
import HowToUse from '@/src/components/modules/home/HowToUse/HowToUse'
import Notice from '@/src/components/modules/home/Notice'
import ActivateDNA from '@/src/components/modules/home/ActivateDNA/ActivateDNA'
import BreakThrough from '@/src/components/modules/home/BreakThrough'
import Patents from '@/src/components/modules/home/Patents'

const Home = () => {
  return (
    <div className='bg-transparent relative'>
      <main>
        {/* <DnaHero />
        <MotionLayout duration={0.5} delay={0.3}>
          <WeKnow />
        </MotionLayout>
        <MotionLayout duration={0.5} delay={0.3}>
          <Revolution />
        </MotionLayout>
        <MotionLayout duration={0.5} delay={0.3}>
         <HowItWorks />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <Unfortunately />
        </MotionLayout> */}
        <MotionLayout duration={1} delay={0.4}>
          <ActivateDNA />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <HowToUse />
        </MotionLayout>
        {/* <MotionLayout duration={1} delay={0.4}>
          <BreakThrough />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <Patents />
        </MotionLayout>
        <MotionLayout duration={1} delay={0.4}>
          <Notice />
        </MotionLayout> */}
      </main>
    </div>
  )
}

export default Home
