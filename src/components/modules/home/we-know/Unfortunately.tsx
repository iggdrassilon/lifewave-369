import { MotionSection } from "@/src/components/layouts/motionLayout"
import AnimatedCounter from "@/src/components/ui/AnimatedCounter"
import TextAnimated from "@/src/components/ui/textAnimations"
import WaveText from "@/src/components/ui/waveText"
import useLang from "@/src/hooks/use-lang"

const Unfortunately = () => {
  const content = useLang().CONTENT

  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='container px-4 py-2'
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className='font-bold text-center mb-8 flex items-center justify-center'>
          <TextAnimated text={`${content.home.unfortunately}`} color="text-title" delay={0.3} duration={0.1} space={0.1} mode='slide-left' />
        </h2>
        <div className='text-2xl max-w-[500px] text-description prose text-center'>
          {content.home.slowlyregenerate}
        </div>
        <AnimatedCounter
          endValue={50}
          duration={3000}
          color='var(--persentage-color)'
          radius={50}
          sizeBox={220}
          delay={0.4}
        />
        <div className='text-xl text-description max-w-[500px] text-center'>
          {content.home.to30years}
        </div>
        <AnimatedCounter
          endValue={90}
          duration={3000}
          color='var(--persentage-color)'
          radius={50}
          sizeBox={220}
          delay={0.4}
        />
        <div className='text-xl text-description max-w-[500px] text-center'>
          {content.home.to60years}
        </div>
        <div className='my-[80px] text-xl text-description prose max-w-[500px] text-center'>
          {content.home.stemcells}
        </div>
      </div>
    </MotionSection>
  )
}

export default Unfortunately