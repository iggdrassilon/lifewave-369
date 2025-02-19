import { MotionSection } from '../../layouts/motionLayout'

const Timeline = () => {
  return (
    <MotionSection
      opacity_initial={0}
      height_initial={80}
      height_viewported={0}
      duration={0.3}
      delay={0.2}
      once={true}
      sectionMounted={() => ''}
      className='container mx-auto px-4 py-16'
    >
      <>
        <h2 className='text-3xl font-bold text-center mb-8 text-space-medium'>
          Timeline
        </h2>
        <div className='prose max-w-none'>
          <p>Timeline content coming soon...</p>
        </div>
      </>
    </MotionSection>
  )
}

export default Timeline
