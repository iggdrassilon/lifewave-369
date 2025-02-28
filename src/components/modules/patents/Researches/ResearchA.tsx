import GridSectionSimple from "@/src/components/layouts/GridSectionSimple"
import { ResearchesT } from "./Researches"

const ResearchA = ({ content, images }: ResearchesT) => {
  return (
    <>
      <GridSectionSimple 
        title={content.title}
        description={content.subtitle}
        content={
          <>
            <h2>
              {content.a.title}
            </h2>
            <div>
              {content.a.description}
            </div>
          </>
        }
        image={{
          src: images.researchA,
          alt: 'research A'
        }}
        imageOnRight={true}
        imageOnTop={false}
        imageFirstInColumn={false}
        headerOnTop={true}
      />
    </>
  )
}

export default ResearchA
