import { MotionSection } from "@/src/components/layouts/motionLayout"
import AnimatedCounter from "@/src/components/ui/AnimatedCounter"
import WaveText from "@/src/components/ui/waveText"

const WeKnow = () => {
  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='container mx-auto px-4 py-16'
    >
      <>
        <h2 className='text-3xl font-bold text-center mb-8 text-title'>
          We know
        </h2>
        <div className='max-w-none flex items-center justify-center'>
          <WaveText text="Content coming soon..." color='text-description' />
        </div>
      </>
    </MotionSection>
  )
}

export default WeKnow