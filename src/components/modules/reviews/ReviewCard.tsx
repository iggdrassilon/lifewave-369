import { setStateAction } from '@/src/context/states'
import usePublic from '@/src/hooks/use-lang'
import useStates from '@/src/hooks/useStates'
import { cn } from '@/src/lib/utils'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

interface ReviewCardProps {
  id: string
  path: string
  title: string
  description: string
  bgColor?: string
  totalLength: number
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  path,
  title,
  description,
  bgColor,
  totalLength,
}: ReviewCardProps) => {
  const firstDownloadState = useStates().states

  useEffect(() => {
    if (totalLength === Number(id)) {
      setStateAction({ key: 'reviews', value: true })
    }
  }, [id])

  const content = usePublic().CONTENT
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: firstDownloadState['reviews'] ? 0 : 0.5,
        delay: firstDownloadState['reviews'] ? 0 : parseInt(id) * 0.1,
      }}
      className='review-card w-full'
    >
      <Link to={`/reviews/${path}`} className='block h-full'>
        <div className={cn(`${bgColor}`, 'h-full flex flex-col justify-center')}>
          <h3 className='text-xl font-medium tracking-tight text-center'>
            {title}
          </h3>
          <div className={cn(
            `${description ? 'mb-[6px]' : 'mb-[24px] md:mb-[18px]'}`,
            'w-full h-1 bg-gradient-to-r from-blue-400 to-blue-100 rounded-full'
          )} />
          {description && (
            <p className='text-[15px] flex-grow w-[94%] pl-[5px] pb-[15px]'>
              {description}
            </p>
          )}
          <div
            className='absolute m-0 flex items-center justify-center w-[28px] h-[28px] bottom-[10px]'
            style={{ right: 'calc(1rem - 9px)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g>
                <path 
                  d="M15.383,8.076a1,1,0,0,0-1.09.217l-6,6A1,1,0,0,0,9,16h6a1,1,0,0,0,1-1V9A1,1,0,0,0,15.383,8.076Z" 
                  style={{ fill: '#fff' }}
                />
              </g>
            </svg>
          </div>
          {/* <div className='pt-4? flex justify-end'> */}
            {/* <span className=' text-sm font-medium'> */}
              {/* {content.reviews.main.turnIt} */}
            {/* </span> */}
          {/* </div> */}
        </div>
      </Link>
    </motion.div>
  )
}

export default ReviewCard
