import React, { useState, useRef } from 'react'

import { Play, Image as ImageIcon } from 'lucide-react'
import { motion } from 'framer-motion'

import DOMPurify from 'dompurify'

import { cn } from '@/src/lib/utils'

interface VideoProps {
  url: string
  title: string
  thumbnail?: string
  customFrame?: boolean
}

interface ImageProps {
  url: string
  title: string
  description?: string
  vertical?: boolean
}

interface LetterProps {
  title: string
  description?: string
  vertical?: boolean
}

interface AudioProps {
  url: string
  title?: string
}

export const VideoPlayer = React.forwardRef<HTMLDivElement, VideoProps>(({
  url,
  thumbnail,
  title,
  customFrame,
}: VideoProps , ref) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sanitizedTitle = DOMPurify.sanitize(title)

  const min_height = 'min-h-[320px] lg:h-[500px]'

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='media-container'
      ref={ref}  // forwarded up
    >
      <h4
        className='mt-3 text-lg font-medium text-center text-description'
        dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
      />
      <div
        className='relative rounded-[25px]'
        style={{
          border: '1px solid rgba(1,1,1,.1)',
          boxShadow: '0 4px 15px rgba(1,1,1,.2)',
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
              className='w-full rounded-xl cursor-pointer'
            />
            {!isPlaying && (
              <div className='absolute inset-0 flex items-center justify-center bg-black/10 rounded-xl'>
                <div className='p-3 rounded-full bg-white/90 shadow-lg cursor-pointer'>
                  <Play
                    className='w-8 h-8 text-blue-500'
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
})

VideoPlayer.displayName = 'VideoPlayer'

export const ImageDisplay = React.forwardRef<HTMLDivElement, ImageProps>(({
  url,
  title,
  description,
}, ref) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const descriptionPured = DOMPurify.sanitize(description)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='media-container mb-8'
      ref={ref}  // forwarded up
    >
      <div
        className='relative mx-auto overflow-hidden rounded-xl max-w-[400px]'
        style={{
          border: url && '1px solid rgba(1,1,1,.1)',
          boxShadow: '0 4px 15px rgba(1,1,1,.2)',
        }}
      >
        <div
          className={cn(
            `${isLoaded ? 'opacity-0' : 'opacity-100'}`,
            'flex items-center justify-center',
            'transition-opacity duration-300',
            'absolute inset-0 bg-gray-100'
          )}
        >
          <ImageIcon className='w-8 h-8 text-gray-400' />
        </div>
        <img
          src={url}
          alt={title}
          className={cn(
            `${isLoaded ? 'lazy-image loaded' : 'lazy-image'}`,
            'w-full h-auto object-cover transition-all duration-700'
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h4 className='mt-3 text-lg font-medium text-center text-title'>
        {title}
      </h4>
      {description && (
        <div
          className='mt-1 text-sm text-description text-center'
          dangerouslySetInnerHTML={{ __html: descriptionPured }}
        ></div>
      )}
    </motion.div>
  )
})

ImageDisplay.displayName = 'ImageDisplay'

export const LetterDisplay = React.forwardRef<HTMLDivElement, LetterProps>(({
  title,
  description,
}, ref) => {
  const descriptionPured = DOMPurify.sanitize(description)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='media-container mb-8'
      ref={ref}  // forwarded up
    >
      <div
        className='relative p-8 mx-auto overflow-hidden rounded-xl max-w-[400px]'
        style={{
          border: '1px solid rgba(1,1,1,.1)',
          boxShadow: '0 4px 15px rgba(1,1,1,.2)',
        }}
      >
        {title && (
          <h4 className='mt-3 text-lg font-medium text-center text-title'>
            {title}
          </h4>
        )}
        {description && (
          <div
            className='mt-1 text-sm text-description text-start'
            dangerouslySetInnerHTML={{ __html: descriptionPured }}
          ></div>
        )}
      </div>
    </motion.div>
  )
})

LetterDisplay.displayName = 'LetterDisplay'

export const AudioPlayer = React.forwardRef<HTMLDivElement, AudioProps>(({ url, title }, ref) => {
  const sanitizedTitle = DOMPurify.sanitize(title || '')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='mb-8'
      ref={ref} // forwarded up
    >
      <div className='flex items-center gap-4 p-0 rounded-xl bg-gray-50'>
        {/* <div className="flex-shrink-0 p-3 rounded-full bg-blue-100">
          <AudioLines className="w-6 h-6 text-blue-600" />
        </div> */}
        <div
          className='flex flex-col w-[100%] items-center rounded-[20px]'
          style={{
            border: '1px solid rgba(1,1,1,.1)',
            boxShadow: '0 4px 15px rgba(1,1,1,.2)',
          }}
        >
          {title && (
            <h4
              className='text-sm max-w-[478px] inline-block font-medium p-4 pt-8 text-start text-description mx-auto'
              dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
            />
          )}
          <audio
            src={url}
            controls
            preload='auto'
            className='w-[100%] md:w-calc_40 md:mx-[20px] rounded-3xl'
          />
        </div>
      </div>
    </motion.div>
  )
})

AudioPlayer.displayName = 'AudioPlayer'