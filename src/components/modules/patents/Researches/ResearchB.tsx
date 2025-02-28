import GridSectionSimple from "@/src/components/layouts/GridSectionSimple"
import { ResearchesT } from "./Researches"
import ContentAB from "./ContentA-B"

const ResearchB = ({ content, images }: ResearchesT) => {
  return (
    <>
      <GridSectionSimple 
        content={
          <ContentAB content={content} />
        }
        image={{
          src: images.researchB,
          alt: 'research A'
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
