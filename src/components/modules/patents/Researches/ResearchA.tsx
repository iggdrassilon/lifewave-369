import GridSectionSimple from "@/src/components/layouts/GridSectionSimple"
import { ResearchesT } from "./Researches"
import ContentAB from "./ContentA-B"

const ResearchA = ({ content, images }: ResearchesT) => {
  return (
    <>
      <GridSectionSimple 
        title={content.title}
        description={content.subtitle}
        content={
          <ContentAB content={content.a} />
        }
        image={{
          src: images.researchA,
          alt: 'research A'
        }}
        imageOnRight={true}
        imageOnTop={false}
        imageFirstInColumn={false}
        headerOnTop={true}
        imageMode={true}
      />
    </>
  )
}

export default ResearchA
