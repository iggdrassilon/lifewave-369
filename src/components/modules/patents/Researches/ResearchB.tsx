import GridSectionSimple from "@/src/components/layouts/GridSectionSimple"
import { ResearchesT } from "./Researches"

const ResearchB = ({ content, images }: ResearchesT) => {
  return (
    <>
      <GridSectionSimple 
        content={
          <>
            <h2>
              {content.b.title}
            </h2>
            <div>
              {content.b.description}
            </div>
          </>
        }
        image={{
          src: images.researchB,
          alt: 'research A'
        }}
        imageOnRight={false}
        imageOnTop={false}
        imageFirstInColumn={true}
        headerOnTop={true}
      />
    </>
  )
}

export default ResearchB
