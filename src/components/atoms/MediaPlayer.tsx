
import React, { useState, useRef, useEffect } from 'react'

import { Play, Image as ImageIcon, AudioLines } from 'lucide-react'
import { motion } from 'framer-motion'

import DOMPurify from 'dompurify'

import { cn } from '@/src/lib/utils'

interface VideoProps {
  url: string;
  title: string;
  thumbnail?: string;
  customFrame?: boolean;
}

interface ImageProps {
  url: string;
  title: string;
  description?: string;
  vertical?: boolean;
}

interface AudioProps {
  url: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoProps> = ({ url, thumbnail, title, customFrame }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const min_height = 'min-h-[320px] lg:h-[500px]'

  const handleVideoClick = () => {
    if (videoRef.current) {
      console.log('tblk')
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    console.log(videoRef.current)
  }, [videoRef.current])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="media-container"
    >
      <h4 className="mt-3 text-lg font-medium text-center text-description">
        {title}
      </h4>
      <div 
        className="relative rounded-[25px]"
        style={{
          border: '1px solid rgba(1,1,1,.1)',
          boxShadow: '0 4px 15px rgba(1,1,1,.2)'
        }}
      >
        {!customFrame && (
          <div className={`aspect-w-16 aspect-h-9 h-[100%] ${min_height}`}>
          <iframe
            src={url}
            title={title}
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className={`w-[100%] h-auto ${min_height} rounded-3xl overflow-hidden`}
          />
        </div>
        )}
        {customFrame && (
          <>
            <video
              ref={videoRef}
              src={url}
              poster={thumbnail}
              controls={isPlaying}
              className="w-full rounded-xl cursor-pointer"
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-xl">
                <div className="p-3 rounded-full bg-white/90 shadow-lg cursor-pointer">
                  <Play 
                    className="w-8 h-8 text-blue-500"
                    onClick={() => handleVideoClick()}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}

export const ImageDisplay: React.FC<ImageProps> = ({ url, title, description }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const descriptionPured = DOMPurify.sanitize(description)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="media-container mb-8"
    >
      <div 
        className="relative mx-auto overflow-hidden rounded-xl max-w-[400px]"
        style={{
          border: '1px solid rgba(1,1,1,.1)',
          boxShadow: '0 4px 15px rgba(1,1,1,.2)'
        }}
      >
        <div className={cn(
          `${isLoaded ? 'opacity-0' : 'opacity-100'}`,
          'flex items-center justify-center',
          'transition-opacity duration-300',
          'absolute inset-0 bg-gray-100'
        )}>
          <ImageIcon 
            className="w-8 h-8 text-gray-400" 
          />
        </div>
        <img
          src={url}
          alt={title}
          className={cn(
            `${isLoaded ? 'lazy-image loaded' : 'lazy-image'}`,
            'w-full h-auto object-cover transition-all duration-700',
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h4 className="mt-3 text-lg font-medium text-center text-title">
        {title}
      </h4>
      {description && 
        <div 
          className="mt-1 text-sm text-description text-center"
          dangerouslySetInnerHTML={{ __html: descriptionPured }}
        >
        </div>
      }
    </motion.div>
  )
}

export const AudioPlayer: React.FC<AudioProps> = ({ url, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center gap-4 p-0 rounded-xl bg-gray-50">
        {/* <div className="flex-shrink-0 p-3 rounded-full bg-blue-100">
          <AudioLines className="w-6 h-6 text-blue-600" />
        </div> */}
        <div 
          className="flex-grow"
        >
          <h4
            className="text-lg font-medium mb-2 text-center text-description"
          >
            {title}
          </h4>
          <audio 
            src={url}
            controls
            preload='auto'
            className="w-[100%] rounded-3xl"
          />
        </div>
      </div>
    </motion.div>
  )
}
