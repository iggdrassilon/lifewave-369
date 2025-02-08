/* eslint-disable @typescript-eslint/no-explicit-any */
import WaveText from "@/src/components/ui/waveText"
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
import { MotionDescription } from "@/src/components/layouts/motionLayout";

const SecondBlock = ({ content }: any) => {
  const smScreen = 768;
  const xlScreen = 1200;
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth < xlScreen);
  const [isSmScreen, setIsSmScreen] = useState(window.innerWidth < smScreen);
  const [state, setState] = useState(false)
  const [viewed, setViewed] = useState({
    sun: false,
    description: false
  });

  const [ref, inView] = useInView();
  // const [titleRef, titleInView] = useInView();

  useEffect(() => {
    const handleResize = () => {
      setIsXlScreen(window.innerWidth < xlScreen);
      setIsSmScreen(window.innerWidth < smScreen)
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setViewed((prev) => ({
      sun: prev.sun || inView,
      description: prev.description || inView
    }));
  }, [inView]);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center w-[100%]">
        <motion.div
          initial={{
            opacity: 0,
            translateX: !isXlScreen ? 0 : '-200px',
            translateY: '150px',
          }}
          animate={{
            opacity: viewed.sun ? 1 : 0,
            translateX: viewed.sun ? !isXlScreen ? '100px' : 0 : null,
            translateY: viewed.sun ? !isSmScreen ? '50px' : '-50px' : '250px',
          }}
          transition={{ duration: 2, delay: 0.2 }}
          className="z-10 flex items-center justify-center mt-[50px] md:my-0 my-[50px]"
        >
          <div className="z-10 w-full h-[350px] w-[30px] md:h-[400px] md:w-[400px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/sun.png')]"></div>
        </motion.div>
        <div className="relative flex mx-0 pt-5 md:mx-0 items-center md:items-start justify-center xl:w-[60%] md:pr-[3rem] xl:pr-20">
          {viewed.sun && (
            <text className='md:mt-0 ml-0 md:text-right sm:text-center max-w-descr md:max-w-descr_md xl:max-w-[100%] text-2xl text-description prose flex items-center justify-center'>
              <MotionDescription
                refForGirl={ref}
                color="text-description"
                children={content.home.enerhyuse}
                className="text-2xl md:text-2xl z-10 px-2 md:mt-10 mt-[3rem] ml-0 xl:pr-0 min-w-descr sm:w-[100%] md:min-w-0 md:max-w-descr_md prose flex items-center justify-center text-white"
                duration={1}
                delay={0.6}
                height_initial={60}
                height_viewported={0}
                once={true}
                complete={() => setState(true)}
              />
            </text>
          )}
        </div>
      </div >
      <div ref={ref} className="absolute rotate-180 top-[50%] right-0 -z-1 w-[100%] h-[100%] min-h-[530px] md:w-[101%] md:h-[100%] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/layout-wave.png')]"></div>
      <div className="absolute top-0 right-0 rotate-180 -z-10 w-[100%] h-[100%] md:w-[100%] md:h-[100%] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/blue-graphs.jpg')]"></div>
    </>
  )
}

export { SecondBlock }