import { MotionSection } from '../../layouts/motionLayout'

const ProductCards = () => {
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
          Our Products
        </h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <p>Products coming soon...</p>
        </div>
      </>
    </MotionSection>
  )
}

export default ProductCards
