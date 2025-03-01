import { cn } from '@/src/lib/utils'
import React from 'react'

type PatentsButtonT = {
  link: string;
  title: string;
  customStyle?: string;
}

const PatentsButton = (props: PatentsButtonT) => {
  const { customStyle, link, title } = props

  return (
    <a
      className={cn(
        'py-2 rounded-lg',
        'flex justify-center items-center',
        'bg-blue-500/80 text-white',
        `${customStyle}`
      )}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {title}
    </a> 
  )
}

export default PatentsButton
