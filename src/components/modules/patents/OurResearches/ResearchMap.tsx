import { cn } from '@/src/lib/utils'
import { Documents } from './OurResearches'
import ContentPattern from './ContentBlock'

type ResearchMapT = {
  readmore: string;
  content: {
    title: string;
    description: string;
    documents: Documents;
  };
}

const ResearchMap = (props: ResearchMapT) => {
  const { readmore, content } = props
  return (
    <>
      <h2 
        className="text-3xl font-semibold tracking-tight text-center mt-4 text-title"
      >
        {content.title}
      </h2>
      <div
        className={cn(
          "text-center max-w-3xl mx-auto",
          // headerOnTop ? "order-1" : "order-2"
        )}
      >
        <div className="text leading-relaxed">
          {content.description}
        </div>
      </div>
      <div
        className={cn(
          "grid gap-8 items-center",
          "grid-cols-1 md:grid-cols-2",
        )}
      >
        {Object.entries(content.documents).map((item, index) => (
          <ContentPattern
            key={index}
            readmore={readmore}
            content={item[1]}
            mode='research'
            even={index}
          />
        ))}
      </div>
    </>
  )
}

export default ResearchMap
