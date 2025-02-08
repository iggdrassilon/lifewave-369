import { MotionSection } from "@/src/components/layouts/motionLayout"
import TextAnimated from "@/src/components/ui/textAnimations"
import WaveText from "@/src/components/ui/waveText"
import useLang from "@/src/hooks/use-lang"
import { FirstBlock } from "./FirstBlock"

const Revolution = () => {
  const content = useLang().CONTENT
  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='container mx-auto px-4 py-2 flex flex-col items-center'
    >
      <div className="bg-blue-600 overflow-hidden">
        <FirstBlock content={content} />
      </div>
    </MotionSection>
  )
}

export default Revolution
