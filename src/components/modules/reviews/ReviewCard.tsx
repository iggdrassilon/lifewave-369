import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import usePublic from '@/src/hooks/use-lang'
import { cn } from '@/src/lib/utils'
import { setStateAction } from '@/src/context/states'
import useStates from '@/src/hooks/useStates'
import styled from 'styled-components'

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
        <div className={cn(`${bgColor}`, 'h-full flex flex-col justify-center pb-[5px]')}>
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
          <ArrowWhite />
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

const ArrowWhite = styled.div`
  position: absolute;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  // border: 1px solid red;
  bottom: 10px;
  right: calc(1rem - 6px);
  &:before {
    position: absolute;
    content: url('/public/icons/arrow-white.svg');
    width: 150%;
    height: 150%;
    // top: 0;
    // top: 50%;
    // left: 50%;
  }
`

export default ReviewCard
