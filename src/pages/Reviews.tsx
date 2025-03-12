/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { useIsMobile } from '@/src/hooks/use-mobile'

import ReviewCard from '@/src/components/modules/reviews/ReviewCard'
import usePublic from '../hooks/use-lang'
import VideoLayout from '../components/layouts/VideoLayout'
import { cn } from '../lib/utils'

const Reviews: React.FC = () => {
  const reviews = usePublic().REVIEWS
  const content = usePublic().CONTENT
  const links = usePublic().LINKS
  const isMobile = useIsMobile()

  const videoRef = useRef<any>(null)

  // UI
  const bgColor = 'bg-sky-300/25 rounded-xl p-4 text-white backdrop-blur-[2px]'

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    document.title = content.reviews.main.name
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container min-h-screen mt-[64px] px-4 py-12 md:px-12 lg:px-24"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
          className={cn(
            'text-center mb-6',
            `${bgColor}`
          )}
        >
          <>
            <h1 className="text-4xl font-bold tracking-tight mb-8">
              {content.reviews.main.title}
            </h1>
            <p className="text-lg max-w-2xl mb-2 mx-auto">
              {content.reviews.main.description}
            </p>
          </>
        </motion.div>
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {reviews.map((review: any) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              path={review.path}
              title={review.title}
              description={review.description}
              bgColor={bgColor}
            />
          ))}
        </div>
      </motion.div>
      <VideoLayout
        preview={links.previews.reviewsBG}
        link={links.videos.reviewsBG}
        opacity='10'
        customClass='fixed top-[64px] md:top-0'
        videoRef={videoRef}
        cover={true} 
      />
      <div
        className={cn(
          'fixed -z-[1] top-[80px] w-[100%] left-0',
          'flex gap-10 justify-center'
        )}
      >
        {links.content.reviewsPage.guys.map((guy: string, index: number) => (
          <img
            key={index}
            alt='guy'
            src={guy}
            className='object-contain'
          />
        ))}
      </div>
    </>
  )
}

export default Reviews
