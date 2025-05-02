import usePublic from '@/src/hooks/use-lang'

import Header from '@/src/components/modules/patents/Header'
import Researches from '@/src/components/modules/patents/ResearchesAB/Researches'
import PhotoTherapy from '@/src/components/modules/patents/Middle/PhotoTherapy'
import Acupressure from '@/src/components/modules/patents/Middle/Acupressure'
import OurResearches from '@/src/components/modules/patents/OurResearches/OurResearches'
import Technology from '@/src/components/modules/patents/Technology/Technology'
import OurPatents from '@/src/components/modules/patents/OurPatents/OurPatents'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Patents = () => {
  const UI = usePublic().UI
  const readMore = UI.patents.readmore
  const content = usePublic().CONTENT
  const links = usePublic().LINKS
  const location = useLocation()

  useEffect(() => {
    if (document.title !== content.patents.name) {
      document.title = content.patents.name
    }
  }, [])

  return (
    <div className='min-h-screen bg-white'>
      <main>
        <Header
          title={content.patents.header}
          image={links.content.patentsPage.earthbackground}
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
        <OurPatents content={content.patents.OurPatents} />
        <Technology
          content={content.patents.Technologies}
          images={links.content.patentsPage.technologies}
          readmore={readMore}
        />
        <OurResearches
          content={content.patents.reseatchesDocuments}
          readmore={readMore}
          mode='before_acupressure'
        />
        <Acupressure
          content={content.patents.Acupressure}
          images={links.content.patentsPage.acupressure}
          readmore={readMore}
        />
        <OurResearches
          content={content.patents.reseatchesDocuments}
          readmore={readMore}
          mode='after_acupressure'
        />
      </main>
    </div>
  )
}

export default Patents
