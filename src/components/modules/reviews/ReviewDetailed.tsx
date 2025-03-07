/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { use, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, Video, Image as ImageIcon, AudioLines } from 'lucide-react'

import { VideoPlayer, ImageDisplay, AudioPlayer } from '@/src/components/atoms/MediaPlayer'
import usePublic from '@/src/hooks/use-lang'

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const ReviewDetailed: React.FC = () => {
  const reviewsData = usePublic().REVIEWS
  const content = usePublic().CONTENT.reviews

  const { id } = useParams<RouteParams>()
  const [review, setReview] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    
    setLoading(true)
        
    const foundReview = reviewsData.find((r: any) => r.id === id)
    
    if (foundReview) {
      setReview(foundReview)
      document.title = `${content.main.review}: ${foundReview.title}`
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    )
  }

  if (!review) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-4">
          {content.errors.notFound}
        </h2>
        <p className="mb-8 text-center">
          {content.errors.notExist}
        </p>
        <Link to="/reviews" className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          {content.main.getBack}
        </Link>
      </div>
    )
  }

  const { title, description, videos, images, audios } = review

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen px-6 py-12 mt-[64px] md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/reviews" 
            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            {content.main.getBackSimple}
          </Link>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              {description}
            </p>
          </motion.div>
        </div>
        {videos && videos.length > 0 && (
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Video className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-2xl font-semibold">
                {content.main.videos}
              </h2>
            </div>
            <div className="space-y-8">
              {videos.map((video: any, index: number) => (
                <VideoPlayer 
                  key={`video-${index}`}
                  url={video.url}
                  thumbnail={video.thumbnail}
                  title={video.title}
                />
              ))}
            </div>
          </motion.section>
        )}

        {images && images.length > 0 && (
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <ImageIcon className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-2xl font-semibold">
                {content.main.photos}
              </h2>
            </div>
            <div className="space-y-8">
              {images.map((image: any, index: number) => (
                <ImageDisplay 
                  key={`image-${index}`}
                  url={image.url}
                  title={image.title}
                  description={image.description}
                />
              ))}
            </div>
          </motion.section>
        )}

        {audios && audios.length > 0 && (
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <AudioLines className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-2xl font-semibold">
                {content.main.audios}
              </h2>
            </div>
            <div className="space-y-4">
              {audios.map((audio: any, index: number) => (
                <AudioPlayer 
                  key={`audio-${index}`}
                  url={audio.url}
                  title={audio.title}
                />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  )
}

export default ReviewDetailed
