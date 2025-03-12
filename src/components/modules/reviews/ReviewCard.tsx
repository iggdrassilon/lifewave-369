
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import usePublic from '@/src/hooks/use-lang'
import { cn } from '@/src/lib/utils'

interface ReviewCardProps {
  id: string;
  path: string;
  title: string;
  description: string;
  bgColor?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ id, path, title, description, bgColor }) => {
  const content = usePublic().CONTENT
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: parseInt(id) * 0.1
      }}
      className="review-card w-full"
    >
      <Link
        to={`/reviews/${path}`}
        className="block h-full"
      >
        <div 
          className={cn(
            `${bgColor}`,
            'space-y-3 h-full flex flex-col'
          )}
        >
          <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-blue-100 rounded-full" />
          <h3 className="text-xl font-medium tracking-tight">
            {title}
          </h3>
          <p className="text-sm flex-grow">
            {description}
          </p>
          <div className="pt-4 flex justify-end">
            <span
              className=" text-sm font-medium">
              {content.reviews.main.turnIt}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ReviewCard
