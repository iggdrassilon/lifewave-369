import { MotionSection } from "@/src/components/layouts/motionLayout"
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
        <h2 className='text-3xl font-bold text-center mb-8 text-space-medium'>
          We know
        </h2>
        <div className='prose max-w-none'>
          <WaveText text="Content coming soon..." />
        </div>
      </>
    </MotionSection>
  )
}

export default WeKnow