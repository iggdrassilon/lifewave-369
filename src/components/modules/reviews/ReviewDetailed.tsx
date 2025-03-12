/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, Video, Image as ImageIcon, AudioLines } from 'lucide-react'

import { VideoPlayer, ImageDisplay, AudioPlayer } from '@/src/components/atoms/MediaPlayer'
import usePublic from '@/src/hooks/use-lang'
import { cn } from '@/src/lib/utils'
import Spinner from '../../atoms/Spinner'

interface RouteParams {
  path: string;
  [key: string]: string | undefined;
}

const ReviewDetailed: React.FC = () => {
  const reviewsData = usePublic().REVIEWS
  const content = usePublic().CONTENT.reviews
  const links = usePublic().LINKS

  const { path } = useParams<RouteParams>()
  const [ review, setReview ] = useState<any>(null)
  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setLoading(true)

    const foundReview = reviewsData.find((r: any) => r.path === path)
  
    if (foundReview) {
      setReview(foundReview)
      document.title = `${content.main.review}: ${foundReview.title}`
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [path])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
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
        <Link 
          to="/reviews"
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          {content.main.getBack}
        </Link>
      </div>
    )
  }

  const { title, description, videos, images, audios } = review

  return (
    <>
      <div
        className={cn(
          "mb-8",
          'w-[100vw] h-[550px]',
          'flex items-end',
          'bg-cover bg-center bg-no-repeat',
        )}
        style={{
          backgroundImage: `url(${links.content.reviewsPage.background})`,
          backgroundPositionX: '65%'
        }}
      >
        <Link 
          to="/reviews"
          className={cn(
            'absolute top-[80px] left-4',
            'mt-2 mb-6 p-2 pr-4 rounded-xl',
            'text-title hover:text-description bg-cyan-100/70 font-bold',
            'inline-flex items-center transition-colors font-extrabold'
          )}
        >
          <ChevronLeft 
            className="w-4 h-4 mr-1"
          />
          {content.main.getBackSimple}
        </Link>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'py-4',
            'mx-auto w-[100%]',
            'text-4xl font-bold text-center text-title',
            'bg-white/70'
          )}
        >
          <h1 className={cn(
            'text-title font-bold',
            'text-center text-3xl md:text-4xl tracking-tight mb-2'
          )}>
            {title}
          </h1>
          <p className="text-center text-lg text-description">
            {description}
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen px-2 py-12 mt-[64px] md:px-12 lg:px-24 pt-3 md:pt-4"
      >
        <div className="max-w-4xl mx-auto">
          {videos && videos.length > 0 && (
            <motion.section 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-20"
            >
              <div className="flex text-center items-center mb-20">
                <Video className="w-5 h-5 mr-2 text-blue-500" />
                <h2 className="text-center items-center text-2xl text-title font-semibold">
                  {content.main.videos}
                </h2>
              </div>
              <div className="space-y-20">
                {videos.map((video: any, index: number) => (
                  <VideoPlayer 
                    key={`video-${index}`}
                    url={video.url}
                    thumbnail={video.thumbnail && video.thumbnail}
                    customFrame={video.customFrame}
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
              className="mb-20"
            >
              <div className="flex items-center mb-20">
                <ImageIcon className="w-5 h-5 mr-2 text-blue-500" />
                <h2 className="text-2xl font-semibold text-title">
                  {content.main.photos}
                </h2>
              </div>
              <div className="space-y-20">
                {images.map((image: any, index: number) => (
                  <ImageDisplay 
                    key={`image-${index}`}
                    url={image.url}
                    title={image.title && image.title}
                    description={image.description && image.description}
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
              <div className="flex items-center mb-20">
                <AudioLines className="w-5 h-5 mr-2 text-blue-500" />
                <h2 className="text-2xl font-semibold">
                  {content.main.audios}
                </h2>
              </div>
              <div className="space-y-16">
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
    </>
  )
}

export default ReviewDetailed
