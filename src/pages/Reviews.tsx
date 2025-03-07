/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import { useIsMobile } from '@/src/hooks/use-mobile'

import ReviewCard from '@/src/components/modules/reviews/ReviewCard'
import usePublic from '../hooks/use-lang'

const Reviews: React.FC = () => {
  const reviews = usePublic().REVIEWS
  const content = usePublic().CONTENT
  
  const isMobile = useIsMobile()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    document.title = content.reviews.main.name
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen mt-[64px] px-6 py-12 md:px-12 lg:px-24"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1
        }}
        className='text-center'
      >
        <>
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            {content.reviews.main.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-12 mx-auto">
            {content.reviews.main.description}
          </p>
        </>
      </motion.div>

      <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        {reviews.map((review: any) => (
          <ReviewCard
            key={review.id}
            id={review.id}
            title={review.title}
            description={review.description}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Reviews
