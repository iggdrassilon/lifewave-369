/* eslint-disable @typescript-eslint/no-explicit-any */
import WaveText from "@/src/components/ui/waveText"

const SecondBlock = (content: any) => {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse mx-0 md:mx-10 items-center md:items-start justify-center">
        <div className="flex items-center justify-center my-[50px]">
          <div className="w-full h-[350px] w-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('/images/sun.png')]"></div>
        </div>
        <text className='md:mt-20 mt-0 text-right max-w-descr md:max-w-descr_md text-2xl text-description prose flex items-center justify-center'>
          <WaveText
            color="text-description"
            text={content.home.enerhyuse}
            textSize="text-2xl md:text-2xl"
          />
        </text>
      </div>
    </>
  )
}

export { SecondBlock }