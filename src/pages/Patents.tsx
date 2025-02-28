import { motion } from 'framer-motion'
import DnaHeader from '@/src/components/modules/patents/DnaHeader'
import PatentSection from '@/src/components/modules/patents/PatentSection'
import FounderBio from '@/src/components/modules/patents/FounderBio'

const Patents = () => {
  return (
    <div className='min-h-screen bg-white'>
      <main>
        <DnaHeader title='Science and Research' />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='container mx-auto px-4 py-16'
        >
          
        </motion.section>

        <PatentSection />
        <FounderBio />
      </main>
    </div>
  )
}

export default Patents
