import React from 'react'

import PatentsButton from '@/src/components/atoms/PatentsButton'

import { cn } from '@/src/lib/utils'

type TechnologyPatternT = {
  image: string;
  content: {
    title: string;
    description: string;
    link: string;
  }
  readmore: string;
}

const TechnologyPattern = (props: TechnologyPatternT) => {
  const { image, content, readmore } = props

  return (
    <div
      className={cn(
        '',
        'flex flex-col justify-center items-center md:p-8 text-black',
      )}
    >
      <img 
        src={image}
        alt="image of pattern"
        className='mb-4 max-w-[100%] rounded-xl'
      />
      <h3
        className='pb-4'
      >
        {content.title}
      </h3>
      <div
        className='pb-4 text-center md:min-h-[230px] lg:min-h-[140px]'
      >
        {content.description}
      </div>
      <PatentsButton
        customStyle='w-[50%] md:w-[100%] lg:w-[55%]'
        link={content.link}
        title={readmore}
      />
    </div>
  )
}

export default TechnologyPattern
