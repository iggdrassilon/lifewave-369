import { MotionSection } from '../../layouts/motionLayout'

const Disclaimer = () => {
  return (
    <MotionSection
      height_initial={80}
      height_viewported={0}
      duration={0.3}
      delay={0.2}
      once={true}
      className='container mx-auto px-4 py-16'
    >
      <>
        <div className='prose max-w-none'>
          <p className='text-sm text-gray-600 text-center'>
            Disclaimer content coming soon...
          </p>
        </div>
      </>
    </MotionSection>
  )
}

export default Disclaimer
