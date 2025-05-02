import GridSectionSimple from '@/src/components/layouts/GridSectionSimple'
import { ResearchesT } from './Researches'
import ContentAB from './ContentA-B'

const ResearchB = ({ content, images }: ResearchesT) => {
  return (
    <>
      <GridSectionSimple
        content={
          <ContentAB
            content={content.b}
            customStyle={{
              description: 'text-right',
            }}
          />
        }
        image={{
          src: images.researchB,
          alt: 'research B',
        }}
        imageOnRight={false}
        imageOnTop={false}
        imageFirstInColumn={true}
        headerOnTop={true}
        imageMode={true}
      />
    </>
  )
}

export default ResearchB
