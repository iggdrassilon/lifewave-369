/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { MotionSection } from '@/src/components/layouts/motionLayout'
import { cn } from '@/src/lib/utils'

interface VideoSectionProps {
  title: string
  videoUrl: string
  buttons?: string[]
  ref: any
}

const VideoSection = ({ title, videoUrl, buttons, ref }: VideoSectionProps) => {
  const min_height = 'min-h-[320px] lg:h-[500px]'
  const height = 'h-[100%]'

  return (
    <MotionSection
      height_initial={0}
      opacity_initial={0}
      height_viewported={0}
      duration={0.3}
      delay={0.2}
      once={true}
      className='max-w-4xl mx-auto h-auto'
      sectionMounted={() => ''}
    >
      <>
        {/* <h2 className='text-3xl md:text-4xl font-bold text-space-dark text-center mb-8'>
          {title}
        </h2> */}

        <div ref={ref} className={`aspect-w-16 aspect-h-9 h-[100%] ${min_height}`}>
          <iframe
            src={videoUrl}
            title={title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className={`w-[100%] h-auto ${min_height}`}
          />
        </div>

        {buttons && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {buttons.map((button) => (
              <motion.button
                key={button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'py-2 px-4',
                  'bg-primary text-white',
                  'hover:bg-space-light transition-colors'
                )}
              >
                {button}
              </motion.button>
            ))}
          </div>
        )}
      </>
    </MotionSection>
  )
}

export default VideoSection
