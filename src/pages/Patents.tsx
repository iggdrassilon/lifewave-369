import usePublic from '@/src/hooks/use-lang'

import DnaHeader from '@/src/components/modules/patents/DnaHeader'
import Researches from '@/src/components/modules/patents/Researches/Researches'
import PhotoTherapy from '@/src/components/modules/patents/Middle/PhotoTherapy'
import Acupressure from '@/src/components/modules/patents/Middle/Acupressure'
import OutPatents from '@/src/components/modules/patents/OurPatents'
import Technology from '../components/modules/patents/Technology/Technology'

const Patents = () => {
  const content = usePublic().CONTENT
  const links = usePublic().LINKS
  const UI = usePublic().UI
  const readMore = UI.patents.readmore
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
          readmore={readMore}
        />
        <Acupressure 
          content={content.patents.Accupressure}
          images={links.content.patentsPage.accupressure}
          readmore={readMore}
        />
        <Technology 
          content={content.patents.Technologies}
          images={links.content.patentsPage.technologies}
          readmore={readMore}
        />
        {/* <OurPatents /> */}
      </main>
    </div>
  )
}

export default Patents
