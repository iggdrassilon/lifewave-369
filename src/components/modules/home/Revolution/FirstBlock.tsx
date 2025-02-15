/* eslint-disable @typescript-eslint/no-explicit-any */
import { MotionDescription } from "@/src/components/layouts/motionLayout"
import TextAnimated from "@/src/components/ui/textAnimations"
import WaveText from "@/src/components/ui/waveText"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const FirstBlock = ({ content }: any) => {
  // state of complete status of description
  const [state, setState] = useState(false)
  const [viewed, setViewed] = useState({
    girl: false,
    titles: false
  });

  const [ref, inView] = useInView();
  const [titleRef, titleInView] = useInView();

  useEffect(() => {
    setViewed((prev) => ({
      girl: prev.girl || inView,
      titles: prev.titles || titleInView
    }));
  }, [inView, titleInView]);

  return (
    <>
      <div className="overflow-hidden">
        <h2 className={`relative text-center my-20 flex items-center justify-center overflow-hidden`} ref={titleRef}>
          <TextAnimated mode='slide-left' textSizes=" text-3xl md:text-5xl" text={`${content.home.revol}`} color="text-black  font-normal z-10" delay={0.4} duration={0.3} space={0.1} />
          {/* <div className="absolute z-[9] select-none top-[-30px] w-[100%] flex justify-center items-center">
            <img src="/images/brush_2.jpg" className="h-[70px] w-[500px]" alt="background" />
          </div> */}
        </h2>
        <div className="flex w-[100%] md:flex-row mx-0 md:mx-0 flex-col items-center md:items-start justify-center">
          {viewed.titles && (
            <MotionDescription
              refOne={ref}
              color="text-neutral-700"
              children={content.home.firstinworld}
              className="text-xl/tight md:text-[26px]/tight font-normal z-10 px-2 md:mt-[50px] mt-0 ml-0 md:ml-10 min-w-descr sm:w-[80%] w-[calc(100%-40px)] md:min-w-0 md:max-w-descr_md prose flex items-center justify-center"
              style={''}
              duration={1}
              delay={0.6}
              height_initial={60}
              height_viewported={0}
              once={true}
              complete={() => setState(true)}
            />
          )}
          <motion.div
            initial={{ opacity: 0, translateX: '170px' }}
            animate={{
              opacity: viewed.girl ? 1 : 0,
              translateX: viewed.girl ? 0 : '170px'
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="z-10 flex items-center justify-center mt-[50px] md:my-0"
          >
            <div className="w-[300px] h-[400px] md:w-[400px] md:h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/girl_patched.png')]"></div>
          </motion.div>
        </div>
        <div className="absolute top-0 -z-1 w-[100%] h-[100%] md:w-[100%] md:h-[100%] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/layout-wave.png')]"></div>
        <div className="absolute bottom-0 -z-10 w-[100%] h-[50%] md:w-[100%] md:h-[100%] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/blue-graphs.jpg')]"></div>
      </div>
      <div className="absolute z-[9] top-[83%] md:top-[84%] w-[100%] flex justify-center items-center">
        <img src="/images/perla.png" className="h-[300px] w-[100%]" alt="background" />
      </div>
    </>
  )
}

export { FirstBlock }