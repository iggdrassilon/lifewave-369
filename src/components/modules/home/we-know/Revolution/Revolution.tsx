import { MotionSection } from "@/src/components/layouts/motionLayout"
import TextAnimated from "@/src/components/ui/textAnimations"
import WaveText from "@/src/components/ui/waveText"
import useLang from "@/src/hooks/use-lang"
import { FirstBlock } from "./FirstBlock"
import { SecondBlock } from "./SecondBlock"

const Revolution = () => {
  const content = useLang().CONTENT
  return (
    <MotionSection
      height_initial={80}
      opacity_initial={0}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='mx-auto px-0 py-0 flex flex-col items-center'
      sectionMounted={() => ''}
    >
      <>
        <div className="bg-blue-600/80 w-[100%] overflow-hidden relative">
          <FirstBlock content={content} />
        </div>
        <div className="bg-blue-600/80 w-[100%] min-h-[700px] overflow-hidden relative">
          <SecondBlock content={content} />
        </div>
      </>
    </MotionSection>
  )
}

export default Revolution
