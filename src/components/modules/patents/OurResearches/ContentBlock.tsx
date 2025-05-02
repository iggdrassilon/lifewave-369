import React from 'react'

import PatentsButton from '@/src/components/atoms/PatentsButton'

import { cn } from '@/src/lib/utils'
import useScreenWidth from '@/src/hooks/useScreenWidth'

type ContentPatternT = {
  content: {
    title: string
    description?: string
    link: string
  }
  readmore: string
  mode?: string
  last?: boolean
  even?: number
}

const ContentPattern = (props: ContentPatternT) => {
  const { content, readmore, mode, last, even } = props

  const isSmallScreen = useScreenWidth()

  return (
    <div
      className={cn(
        `${isSmallScreen && even % 2 === 0 && 'bg-sky-300/20'}`,
        `${!isSmallScreen && mode === 'research' && [0, 3, 4, 7, 8].includes(even) && 'md:bg-sky-300/20'}`,
        `${!isSmallScreen && mode === 'indormation' && [1, 2, 5, 6].includes(even) && 'md:bg-sky-300/20'}`,
        `${!isSmallScreen && mode === 'security' && [1, 2].includes(even) && 'md:bg-sky-300/20'}`,
        'rounded-xl',
        'flex flex-col justify-center items-center p-4 md:p-8'
      )}
    >
      <h3 className='pb-4 text-center md:min-h-[100px]'>{content.title}</h3>
      {content.description && (
        <div
          className={cn(
            'pb-4 text-center ',
            `${mode !== 'security' && !last && 'md:min-h-[160px] lg:min-h-[180px]'}`
          )}
        >
          {content.description}
        </div>
      )}
      <PatentsButton
        customStyle='w-[50%] md:w-[100%] lg:w-[55%]'
        link={content.link}
        title={readmore}
      />
    </div>
  )
}

export default ContentPattern
