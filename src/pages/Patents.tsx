import { motion } from 'framer-motion'
import DnaHeader from '@/src/components/modules/patents/DnaHeader'
import usePublic from '../hooks/use-lang'

const Patents = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS
  return (
    <div className='min-h-screen bg-white'>
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='mx-auto pt-16'
        >
          <DnaHeader 
            title={content.patents.header}
            image={links.content.earthbackground}
          />
        </motion.section>
        {/* <Research /> */}
        {/* <PhotoTherapy /> */}
        {/* <Acupressure /> */}
        {/* <OurPatents /> */}
      </main>
    </div>
  )
}

export default Patents
