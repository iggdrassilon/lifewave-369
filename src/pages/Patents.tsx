import { motion } from 'framer-motion'

import usePublic from '@/src/hooks/use-lang'

import DnaHeader from '@/src/components/modules/patents/DnaHeader'
import Researches from '@/src/components/modules/patents/Researches/Researches'
import PhotoTherapy from '@/src/components/modules/patents/PhotoTherapy'
import Acupressure from '@/src/components/modules/patents/Acupressure'
import OutPatents from '@/src/components/modules/patents/OurPatents'

const Patents = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS
  return (
    <div className='min-h-screen bg-white'>
      <main>
        <DnaHeader 
          title={content.patents.header}
          image={links.content.earthbackground}
        />
        <Researches 
          content={content.patents.researches}
          images={links.content.patentsPage.research}
        />
        {/* <PhotoTherapy /> */}
        {/* <Acupressure /> */}
        {/* <OurPatents /> */}
      </main>
    </div>
  )
}

export default Patents
