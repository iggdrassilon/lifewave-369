import { MotionSection } from "@/src/components/layouts/motionLayout"
import WaveText from "@/src/components/ui/waveText"
import useLang from "@/src/hooks/use-lang"

const Revolution = () => {
  const content = useLang().CONTENT
  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.6}
      delay={0.3}
      once={true}
      className='container mx-auto px-4 py-2'
    >
      <>
        <h2 className='text-center mb-8 text-title flex items-center justify-center'>
          <WaveText text={`${content.home.revol}`} color="var(--description-color)" />
        </h2>
        <div className='text-2xl text-description prose max-w-none flex items-center justify-center'>
          {content.home.firstinworld}
        </div>
        <div className="flex items-center justify-center my-[50px]">
          <div className="w-[300px] h-[400px] md:w-[400px] md:h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/woman-patched.PNG')]"></div>
        </div>
        <div className='text-2xl text-description prose max-w-none flex items-center justify-center'>
          {content.home.enerhyuse}
        </div>
        <div className="flex items-center justify-center my-[50px]">
          <div className="w-full h-[350px] md:w-[600px] md:h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/sun.png')]"></div>
        </div>
      </>
    </MotionSection>
  )
}

export default Revolution
