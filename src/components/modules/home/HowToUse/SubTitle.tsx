import TextAnimated from '@/src/components/ui/textAnimations'
import { cn } from '@/src/lib/utils'
import { useEffect } from 'react'

type SubTitleT = {
  content: string;
  status: boolean;
  endAnim: (value: boolean) => void;
  customCl: {
    parent: string;
    child: string;
  }  
}

const SubTitle = (props: SubTitleT) => {
  const { content, customCl, status, endAnim } = props

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        endAnim(true)
      }, 222)
    }
  }, [status])

  return (
    <>
     <div className={cn(
        'mt-[20px] py-[4px] pt-[10px] gap-0 min-h-[54px]', // CORDS
        'flex items-center justify-center', // CTR
        'text-sm', // FONT
        'text-description', // COLOR
        'bg-neutral-200 rounded-xl backdrop-blur-sm',
        `${customCl.parent}`
      )}>
        {status && (
          <TextAnimated
            text={`${content}`} 
            color="" 
            textSizes={cn(
              `${customCl.child}`,
              'font-bold'
            )} 
            delay={0.3}          
            duration={0.1} 
            space={0.02} 
            mode='slide-left' 
          />
        )}
      </div> 
    </>
  )
}

export default SubTitle
