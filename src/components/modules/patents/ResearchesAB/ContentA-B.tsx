import PatentsButton from "@/src/components/atoms/PatentsButton"
import { cn } from "@/src/lib/utils"

type Content = {
  content: {
    title: string;
    description: string;
    link: string;
  }
  customStyle?: {
    title?: string;
    description?: string;
    parent?: string;
  }
}

const ContentAB = ({content, customStyle}: Content) => {
  return (
    <>
      <h2
        className={cn(
          'text-center',
          `${customStyle?.title}`
        )}
      >
        {content.title}
      </h2>
      <div 
        className={cn(
          "mt-2",
          `${customStyle?.description}`
        )}
      >
        {content.description}
      </div>
      <PatentsButton
        customStyle={cn(
          'bg-red-800/0 text-black mt-[30px]',
          'border-[1px] border-black/300 hover:border-black duration-300 ease-in-out'
        )}
        link={content.link}
        title={content.title}
      />
    </>
  )
}

export default ContentAB
