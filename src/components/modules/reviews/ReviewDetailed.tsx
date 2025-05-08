/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import earthCopy from '/public/icons/earth-copy.svg'

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
import GetBack from './GetBack'
import styled from 'styled-components'
import { usePopup } from '../../layouts/popup'

const ReviewDetailed: React.FC = () => {
  const { path, section, index } = useParams<{ path: string; section: string; index?: string }>()

  const [ review, setReview ] = useState<any>(null)
  const [ loading, setLoading ] = useState<boolean>(true)
  const [ pageLoaded, setPageLoaded ] = useState<boolean>(false)
  const [ activeSection, setActiveSection ] = useState<string | null>(null)
  const [ activeIndex, setActiveIndex ] = useState<number | null>(null)
  const [ isNavigating, setIsNavigating ] = useState<boolean>(false)
  // const [ firstLoad, setFirstLoad ] = useState<boolean>(false)

  const elementRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const observer = useRef<IntersectionObserver | null>(null)

  const content = usePublic().CONTENT.reviews
  const UI = usePublic().UI

  const reviewsData = usePublic().REVIEWS

  const timer = useRef<NodeJS.Timeout | null>(null)

  const links = usePublic().LINKS

  const popUp = usePopup()

  const navigate = useNavigate()

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
      setIsNavigating(true)
    
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
          // setTimeout(() => {
          //   setFirstLoad(true)
          // }, 2222)
          // console.log('navigating')
        } else {
          requestAnimationFrame(checkScrollEnd)
        }
      }
    
      requestAnimationFrame(checkScrollEnd)
    } else {
      navigate(`/reviews/${path}`)
      // bad link here
      setIsNavigating(false)
      setPageLoaded(true)
      // setTimeout(() => {
      //   setFirstLoad(true)
      // }, 2222)
      // console.log('page load empty')
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

  const handleClick = (category: string, id: number) => {
    const protocol = window.location.protocol
    const domain = window.location.host
    const link = `${protocol}//${domain}/reviews/${path}/${category}/${id}`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link)
        .then(() => {
          popUp(UI.pops.copied)
        })
        .catch(err => {
          console.error('Failed to copy link: ', err)
        })
    } else {
      // Fallback for browsers that don't support the Clipboard API
      console.error('Clipboard API not available')
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
    return <GetBack content={content} />
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
            <div className="flex items-center justify-start mb-20 md:px-[50px] mt-[20px]">
              <Video className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-2xl font-semibold text-title">
                {content.main.videos}
              </h2>
            </div>
            <div className="space-y-20 md:px-[50px]">
              {videos.map((video: any, index: number) => (
                <div key={index} className='relative'>
                  <VideoPlayer
                    key={`video-${index}`}
                    url={video.url}
                    title={video.title}
                    id={`videos-${index + 1}`}
                    ref={registerRef(`videos-${index + 1}`)}
                    // className={`transition-all duration-300 rounded-3xl border-2 ${
                    //   activeIndex === index + 1 && activeSection === 'videos' && !firstLoad && 'animate-track-to'
                    // }`}
                  />
                  <CopyLinkBtn onClick={() => handleClick('videos', index + 1)} />
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
            <div className="flex items-center justify-start mb-20 md:px-[50px]">
              <ImageIcon className="w-5 h-5 mr-2 text-blue-500" />
              <h2 className="text-2xl font-semibold text-title">
                {content.main.photos}
              </h2>
            </div>
            <div className="md:px-[50px] flex flex-col items-center ">
              {images.map((image: any, index: number) => (
                <div key={index} className={cn(
                  'relative',
                  `${index !== 0 ? 'mt-[100px]' : ''}`
                )}>
                  <ImageDisplay
                    key={`image-${index}`}
                    id={`images-${index + 1}`}
                    title={image.title}
                    url={image.url}
                    ref={registerRef(`images-${index + 1}`)}
                    // className={`${index !== 0 ? 'mt-[100px]' : ''}`}
                    // className={`transition-all duration-500 ${
                    //   activeIndex === index + 1 && activeSection === 'images' && !firstLoad && 'animate-track-to'
                    // }`}
                  />
                  <CopyLinkBtn onClick={() => handleClick('images', index + 1)} />
                </div>
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
              <div className='flex items-center justify-start mb-20 md:px-[50px]'>
                <ImageIcon className='w-5 h-5 mr-2 text-blue-500' />
                <h2 className='text-2xl font-semibold text-title'>
                  {content.main.letters}
                </h2>
              </div>
              <div className='space-y-20 md:px-[50px] flex flex-col items-center'>
                {letters.map((letter: any, index: number) => (
                  <div key={index} className='relative'>
                    <LetterDisplay
                      key={`letter-${index}`}
                      id={`letters-${index + 1}`}
                      description={letter.description}
                      title={letter.title && letter.title}
                      ref={registerRef(`letters-${index + 1}`)}
                      // className={`transition-all duration-500 ${
                      //   activeIndex === index + 1 && activeSection === 'letters' && !firstLoad && 'animate-track-to'
                      // }`}
                    />
                    <CopyLinkBtn onClick={() => handleClick('letters', index + 1)} />
                  </div>
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
              <div className='flex items-center justify-start mb-20 md:px-[50px]'>
                <AudioLines className='w-5 h-5 mr-2 text-blue-500' />
                <h2 className='text-2xl font-semibold'>
                  {content.main.audios}
                </h2>
              </div>
              <div className='space-y-16 md:px-[50px]'>
                {audios.map((audio: any, index: number) => (
                  <div key={index} className='relative'>
                    <AudioPlayer
                      key={`audio-${index}`}
                      id={`audios-${index + 1}`}
                      url={audio.url}
                      title={audio.title}
                      ref={registerRef(`audios-${index + 1}`)}
                      // className={`transition-all duration-500 ${
                      //   activeIndex === index + 1 && activeSection === 'audios' && !firstLoad && 'animate-track-to'
                      // }`}
                    />
                    <CopyLinkBtn onClick={() => handleClick('audios', index + 1)} />
                  </div>
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

const CopyLinkBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: -35px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:before {
    position: absolute;
    content: url(${earthCopy});
    width: 100%;
    height: 100%;
  }
`
