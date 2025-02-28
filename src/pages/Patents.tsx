import usePublic from '@/src/hooks/use-lang'

import DnaHeader from '@/src/components/modules/patents/DnaHeader'
import Researches from '@/src/components/modules/patents/Researches/Researches'
import PhotoTherapy from '@/src/components/modules/patents/Middle/PhotoTherapy'
import Acupressure from '@/src/components/modules/patents/Acupressure'
import OutPatents from '@/src/components/modules/patents/OurPatents'

const Patents = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS
  const UI = usePublic().UI
  return (
    <div className='min-h-screen bg-whitep'>
      <main>
        <DnaHeader 
          title={content.patents.header}
          image={links.content.earthbackground}
        />
        <Researches 
          content={content.patents.researches}
          images={links.content.patentsPage.research}
        />
        <PhotoTherapy
          content={content.patents.PhotoTherapy}
          images={links.content.patentsPage.phototherapy}
          readmore={UI.patents.readmore}
        />
        <Acupressure 
          content={content.patents.Accupressure}
          images={links.content.patentsPage.accupressure}
          readmore={UI.patents.readmore}
        />
        {/* <OurPatents /> */}
      </main>
    </div>
  )
}

export default Patents
