/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/src/lib/utils'

const ContentElement = ({content, readmore}: any) => {
  return (
    <div
      className={cn(
        'p-16',
        'rounded-xl'
      )}
      style={{
        border: '1px solid black'
      }}
    >
      <div
        className={cn(
          'py-4 text-center'
        )}
      >
        {content.title}
      </div>
      <a
        className={cn(
          'py-2 rounded-lg',
          'flex justify-center items-center',
          'bg-blue-500/80 text-white'
        )}
        href={content.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {readmore}
      </a> 
    </div>
  )
}

export default ContentElement
