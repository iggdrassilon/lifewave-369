import { motion } from 'framer-motion'

const Story = () => {
  return (
    <div className='min-h-screen bg-white'>
      <main className='container mx-auto px-4 py-16'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl font-bold text-center mb-12 text-space-medium'
        >
          STORY OF LIFEWAVE
        </motion.h1>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <p className='text-gray-600'>Story page coming sooooooooooooon...</p>
        </div>
      </main>
    </div>
  )
}

export default Story
