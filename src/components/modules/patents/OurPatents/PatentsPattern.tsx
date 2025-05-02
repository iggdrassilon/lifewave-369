import { cn } from '@/src/lib/utils'

type PatentsPatternT = {
  title: string
  description: string
}

const PatentsPattern = (props: PatentsPatternT) => {
  const { description, title } = props

  return (
    <div
      className={cn(
        'md:p-8 text-black',
        'flex flex-col justify-center items-center'
      )}
    >
      <h3 className='pb-4 font-bold text-xl'>{title}</h3>
      <div
        className={cn('md:min-h-[230px] lg:min-h-[140px]', 'pb-4 text-center')}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  )
}

export default PatentsPattern
