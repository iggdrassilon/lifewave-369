/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import {
  Video,
  Image as ImageIcon,
  AudioLines,
} from 'lucide-react'

import {
  VideoPlayer,
  ImageDisplay,
  AudioPlayer,
  LetterDisplay,
} from '@/src/components/atoms/MediaPlayer'

import { cn } from '@/src/lib/utils'
import usePublic from '@/src/hooks/use-lang'
import Spinner from '@/src/components/atoms/Spinner'
import Titles from './Titles'
import ReviewDetailedBtn from '../../atoms/ReviewDetailedBtn'

const ReviewDetailed: React.FC = () => {
  const { path, section, index } = useParams<{ path: string; section: string; index?: string }>()
  const navigate = useNavigate()

  const [review, setReview] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [ pageLoaded, setPageLoaded ] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isNavigating, setIsNavigating] = useState<boolean>(false) // Флаг для предотвращения повторной навигации

  const elementRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const observer = useRef<IntersectionObserver | null>(null)

  const content = usePublic().CONTENT.reviews
  const reviewsData = usePublic().REVIEWS

  const timer = useRef<NodeJS.Timeout | null>(null)

  const links = usePublic().LINKS

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Fetch review data
  useEffect(() => {
    setLoading(true)

    const foundReview = reviewsData.find((r: any) => r.path === path)
    if (foundReview) {
      setReview(foundReview)
      document.title = `${content.main.review}: ${foundReview.title}`
    }

    setTimeout(() => setLoading(false), 11)
  }, [path, reviewsData, content.main.review])

  const navigating = () => {
    const targetId = `${section}-${index}`
    const targetElement = elementRefs.current.get(targetId)
    console.log(targetElement)
    if (targetElement) {
      setIsNavigating(true) // Prevent other navigation during auto-scroll
    
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setActiveSection(section)
      setActiveIndex(parseInt(index, 10))
    
      const checkScrollEnd = () => {
        const targetRect = targetElement.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const targetCenter = targetRect.top + targetRect.height / 2

        if (Math.abs(targetCenter - windowHeight / 2) < 1 ||
            (targetRect.bottom >= windowHeight && targetRect.top <= windowHeight)) {
          setIsNavigating(false)
          setPageLoaded(true)
          console.log('navigating')
        } else {
          requestAnimationFrame(checkScrollEnd)
        }
      }
    
      requestAnimationFrame(checkScrollEnd)
    } else {
      setIsNavigating(false)
      setPageLoaded(true)
      console.log('page load empty')
    }
  }

  // Scroll to the element specified in the URL on initial load
  useEffect(() => {
    if (!pageLoaded) {
      timer.current = setTimeout(() => {
        navigating()
      }, 444)
      return () => {
        clearTimeout(timer.current)
      }
    }
  }, [section, index])

  // Initialize IntersectionObserver
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (isNavigating) return // Block updates if navigating programmatically

        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry && pageLoaded) {
          const [section, index] = visibleEntry.target.id.split('-')
          const parsedIndex = index ? parseInt(index) : null

          if (section !== activeSection || parsedIndex !== activeIndex) {
            setActiveSection(section)
            setActiveIndex(parsedIndex)
            navigate(`/reviews/${path}/${section}${parsedIndex !== null ? `/${parsedIndex}` : ''}`, {
              replace: true,
              state: { preventScrollReset: true },
            })
          }
        }
      },
      { threshold: 0.7 } // Trigger when 70% of the element is visible
    )

    elementRefs.current.forEach((element) => observer.current?.observe(element))

    return () => {
      observer.current?.disconnect()
    }
  }, [path, navigate, activeSection, activeIndex, isNavigating, pageLoaded])

  // Register refs
  const registerRef = (id: string) => (element: HTMLDivElement | null) => {
    if (element) {
      elementRefs.current.set(id, element)
      observer.current?.observe(element)
    } else {
      elementRefs.current.delete(id)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Spinner />
      </div>
    )
  }

  if (!review) {
    return <div>Review not found</div>
  }

  const { title, description, videos, images, audios, letters } = review || {}

  return (
   <>
    <ReviewDetailedBtn content={content} />
    <Titles title={title} links={links} description={description} />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={cn('container min-h-screen px-2 py-12 md:px-12 lg:px-24 pt-3 md:pt-4 bg-white')}
    >
      <div className="">
        {videos && videos.length > 0 && (
          <motion.section
            id="videos"
            // className='mb-20'
            className={`mb-20 py-[60px] rounded-xl transition-all duration-300 
              ${activeSection === 'videos' 
                ? 'border-2 shadow-lg' 
                : 'border-2 border-indigo-50'}
            `}
          >
            <div className="flex items-center mb-20 md:px-[50px] mt-[20px]">
              <Video className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-2xl font-semibold text-title">
                {content.main.videos}
              </h2>
            </div>
            <div className="space-y-20 md:px-[50px]">
              {videos.map((video: any, index: number) => (
                <div
                  key={`video-${index}`}
                  id={`videos-${index}`}
                  ref={registerRef(`videos-${index}`)}
                  className={`transition-all duration-300 ${
                    activeIndex === index && activeSection === 'videos' ? '' : ''
                  }`}
                >
                  <VideoPlayer {...video} />
                </div>
              ))}
            </div>
          </motion.section>
        )}
        {images && images.length > 0 && (
          <motion.section
            id="images"
            className={`mb-20 py-[60px] rounded-xl ${activeSection === 'images' 
              ? 'border-2 shadow-lg' 
              : 'border-2 border-indigo-50'} transition-all duration-300`}
          >
            <div className="flex items-center mb-20 md:px-[50px]">
              <ImageIcon className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-2xl font-semibold text-title">
                {content.main.photos}
              </h2>
            </div>
            <div className="space-y-20 md:px-[50px]">
              {images.map((image: any, index: number) => (
                <ImageDisplay
                  key={`image-${index}`}
                  id={`images-${index}`}
                  title={image.title}
                  url={image.url}
                  ref={registerRef(`images-${index}`)}
                  className={`transition-all duration-500 ${
                    activeIndex === index && activeSection === 'images' ? '' : ''
                  }`}
                />
              ))}
            </div>
          </motion.section>
        )}
        {letters && letters.length > 0 && (
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mb-20 py-[60px] rounded-xl 
                ${activeSection === 'letters' 
                  ? 'border-2 shadow-lg' 
                  : 'border-2 border-indigo-50'} transition-all duration-300
              `}
            >
              <div className='flex items-center mb-20 md:px-[50px]'>
                <ImageIcon className='w-5 h-5 mr-2 text-blue-500' />
                <h2 className='text-2xl font-semibold text-title'>
                  {content.main.letters}
                </h2>
              </div>
              <div className='space-y-20 px-[50px]'>
                {letters.map((letter: any, index: number) => (
                  <LetterDisplay 
                    key={`letter-${index}`}
                    id={`letters-${index}`}
                    description={letter.description}
                    title={letter.title && letter.title}
                    ref={registerRef(`letters-${index}`)}
                    className={`transition-all duration-500 ${
                      activeIndex === index && activeSection === 'letters' ? '' : ''
                    }`}
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
              className={`mb-20 py-[60px] rounded-xl ${activeSection === 'audios' 
                ? 'border-2 shadow-lg' 
                : 'border-2 border-indigo-50'} transition-all duration-300`}
            >
              <div className='flex items-center mb-20 md:px-[50px]'>
                <AudioLines className='w-5 h-5 mr-2 text-blue-500' />
                <h2 className='text-2xl font-semibold'>
                  {content.main.audios}
                </h2>
              </div>
              <div className='space-y-16 md:px-[50px]'>
                {audios.map((audio: any, index: number) => (
                  <AudioPlayer
                    key={`audio-${index}`}
                    id={`audios-${index}`}
                    url={audio.url}
                    title={audio.title}
                    ref={registerRef(`audios-${index}`)}
                    className={`transition-all duration-500 ${
                      activeIndex === index && activeSection === 'audios' ? '' : ''
                    }`}
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