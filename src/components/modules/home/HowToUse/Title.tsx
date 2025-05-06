import TextAnimated from '@/src/components/ui/textAnimations'
import { cn } from '@/src/lib/utils'

type HouUseTitleT = {
  content: string
  customCl: {
    parent: string
    child: string
  }
}

const Title = (props: HouUseTitleT) => {
  const { content, customCl } = props
  return (
    <>
      <div
        className={cn(
          'mt-8 mb-4 py-[4px] pt-[10px] gap-0', // CORDS
          'flex items-center justify-center', // CTR
          'text-sm text-zinc-700', // FONT
          // 'text-description', // COLOR
          // 'bg-neutral-200 rounded-xl backdrop-blur-sm',
          // `${customCl.parent}`
        )}
      >
        <TextAnimated
          text={`${content}`}
          color=''
          textSizes={cn('font-bold', `${customCl.child}`)}
          delay={0.3}
          duration={0.1}
          space={0.02}
          mode='slide-left'
        />
      </div>
    </>
  )
}

export default Title
