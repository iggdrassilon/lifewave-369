/* eslint-disable @typescript-eslint/no-explicit-any */
import PatentsButton from '@/src/components/atoms/PatentsButton'
import { cn } from '@/src/lib/utils'

const ContentElement = ({ content, readmore }: any) => {
  return (
    <div
      className={cn('p-16', 'rounded-xl', 'flex items-center flex-col')}
      style={{
        border: '1px solid black',
      }}
    >
      <div className={cn('py-4 text-center min-h-[120px]')}>
        {content.title}
      </div>
      <PatentsButton
        customStyle='w-[100%] lg:w-[60%]'
        link={content.link}
        title={readmore}
      />
    </div>
  )
}

export default ContentElement
