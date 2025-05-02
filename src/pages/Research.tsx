import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/src/components/modules/Footer'
import BackToTop from '@/src/components/ui/BackToTop'

const Research = () => {
  return (
    <div className='min-h-screen bg-white'>
      <main className='container mx-auto px-4 py-16'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl font-bold text-center mb-12 text-space-medium'
        >
          Research & Studies
        </motion.h1>

        {/* Research content will be added here */}
        <div className='prose max-w-none'>
          <p className='text-gray-600'>Research content coming soon...</p>
        </div>
      </main>
    </div>
  )
}

export default Research
