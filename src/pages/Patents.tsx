import usePublic from '@/src/hooks/use-lang'

import Header from '@/src/components/modules/patents/Header'
import Researches from '@/src/components/modules/patents/Researches/Researches'
import PhotoTherapy from '@/src/components/modules/patents/Middle/PhotoTherapy'
import Acupressure from '@/src/components/modules/patents/Middle/Acupressure'
import OurResearches from '@/src/components/modules/patents/OurResearches/OurResearches'
import Technology from '../components/modules/patents/Technology/Technology'

const Patents = () => {
  const UI = usePublic().UI
  const readMore = UI.patents.readmore
  const content = usePublic().CONTENT
  const links = usePublic().LINKS
  return (
    <div className='min-h-screen bg-whitep'>
      <main>
        <Header
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
          content={content.patents.Acupressure}
          images={links.content.patentsPage.acupressure}
          readmore={readMore}
        />
        <Technology 
          content={content.patents.Technologies}
          images={links.content.patentsPage.technologies}
          readmore={readMore}
        />
        <OurResearches
          content={content.patents.reseatchesDocuments}
          readmore={readMore}
        />
      </main>
    </div>
  )
}

export default Patents
