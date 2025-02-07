import { MotionSection } from "@/src/components/layouts/motionLayout"
import AnimatedCounter from "@/src/components/ui/AnimatedCounter"
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
      <>
        <h2 className='text-3xl font-bold text-center mb-8 text-title flex items-center justify-center'>
          <WaveText text={`${content.home.unfortunately}`} color="var(--description-color)" />
        </h2>
        <div className='text-2xl text-description prose max-w-none flex items-center justify-center'>
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
        <div className='text-2xl text-description prose max-w-none flex items-center justify-center'>
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
        <div className='text-2xl text-description prose max-w-none flex items-center justify-center'>
          {content.home.to60years}
        </div>
        <div className='my-[80px] text-2xl text-description prose max-w-none flex items-center justify-center'>
          {content.home.stemcells}
        </div>
      </>
    </MotionSection>
  )
}

export default Unfortunately