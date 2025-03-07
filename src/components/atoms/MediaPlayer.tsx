
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Image as ImageIcon, AudioLines } from 'lucide-react'

interface VideoProps {
  url: string;
  thumbnail?: string;
  title: string;
}

interface ImageProps {
  url: string;
  title: string;
  description?: string;
}

interface AudioProps {
  url: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoProps> = ({ url, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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
      className="media-container mb-8"
    >
      <div className="relative">
        <video
          ref={videoRef}
          src={url}
          poster={thumbnail}
          controls={isPlaying}
          onClick={handleVideoClick}
          className="w-full rounded-xl cursor-pointer"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-xl">
            <div className="p-3 rounded-full bg-white/90 shadow-lg cursor-pointer">
              <Play className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        )}
      </div>
      <h4 className="mt-3 text-lg font-medium">{title}</h4>
    </motion.div>
  )
}

export const ImageDisplay: React.FC<ImageProps> = ({ url, title, description }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="media-container mb-8"
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <ImageIcon className="w-8 h-8 text-gray-400" />
        </div>
        <img
          src={url}
          alt={title}
          className={`w-full object-cover transition-all duration-700 ${isLoaded ? 'lazy-image loaded' : 'lazy-image'}`}
          style={{ minHeight: '200px' }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h4 className="mt-3 text-lg font-medium">{title}</h4>
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
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
      <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
        <div className="flex-shrink-0 p-3 rounded-full bg-blue-100">
          <AudioLines className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-grow">
          <h4 className="text-lg font-medium mb-2">{title}</h4>
          <audio src={url} controls className="w-full" />
        </div>
      </div>
    </motion.div>
  )
}
