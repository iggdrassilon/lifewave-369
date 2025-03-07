
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ReviewCardProps {
  id: string;
  title: string;
  description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ id, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: parseInt(id) * 0.1 }}
      className="review-card w-full"
    >
      <Link to={`/reviews/${id}`} className="block h-full">
        <div className="space-y-3 h-full flex flex-col">
          <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-blue-100 rounded-full"></div>
          <h3 className="text-xl font-medium tracking-tight">{title}</h3>
          <p className="text-sm text-gray-500 flex-grow">{description}</p>
          <div className="pt-4 flex justify-end">
            <span className="text-blue-500 text-sm font-medium">Подробнее</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ReviewCard
