import { ViteoLayoutT } from '@/src/types/layouts'
import { useEffect, useState } from 'react'
import { cn } from '@/src/lib/utils'
import useInViewHook from '@/src/hooks/useInView'
import Dexie from 'dexie'

const db = new Dexie('VideoCacheDB')
db.version(2).stores({
  videos: 'url, data',
  images: 'url, data'
})
const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover, preview, customClass } = props

  // const videoBlobUrl = useCache(link, 'video', isInView)
  // const imgBlobUrl = useCache(preview, 'image', isInView)
  const { ref, isInView } = useInViewHook()

  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoBlobUrl, setVideoBlobUrl] = useState(null)
  const [imgBlobUrl, setImgBlobUrl] = useState(null)

  useEffect(() => {
    const cacheVideo = async () => {
      try {
        const cachedVideo = await db.table('videos').get(link)
        if (cachedVideo) {
          const blobUrl = URL.createObjectURL(cachedVideo.data)
          setVideoBlobUrl(blobUrl)
          setIsVideoLoaded(true)
        } else {
          const response = await fetch(link)
          const videoBlob = await response.blob()
          await db.table('videos').put({ url: link, data: videoBlob })
          const blobUrl = URL.createObjectURL(videoBlob)
          setVideoBlobUrl(blobUrl)
          setIsVideoLoaded(true)
        }
      } catch (error) {
        console.error('Error caching the video:', error)
      }
    }

    const cacheImage = async () => {
      try {
        const cachedImage = await db.table('images').get(preview)
        if (cachedImage) {
          const blobUrl = URL.createObjectURL(cachedImage.data)
          setImgBlobUrl(blobUrl)
        } else {
          const response = await fetch(preview)
          const imageBlob = await response.blob()
          await db.table('images').put({ url: preview, data: imageBlob })
          const blobUrl = URL.createObjectURL(imageBlob)
          setImgBlobUrl(blobUrl)
        }
      } catch (error) {
        console.error('Error caching the image:', error)
      }
    }

    if (isInView) {
      if (!videoBlobUrl) {
        cacheVideo()
      }
      if (!imgBlobUrl) {
        cacheImage()
      }
    }
  }, [isInView, link, preview])

  return (
    <div>
      <div 
        ref={ref}
        className={`absolute inset-0 -z-50 opacity-${opacity}`}
      >
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline // for ios
          // eslint-disable-next-line react/no-unknown-property
          webkit-playsinline='true' // for chrome
          disablePictureInPicture
          className={cn(
            `${customClass}`,
            'object-cover -z-49',
            `${!cover? 'w-full h-full' : 'w-[100%] h-[100%]'}`
          )}
          controls={false}
          preload="auto"
          tabIndex={-1} // turn off navigation
          onContextMenu={(e) => e.preventDefault()} // turn off context menu
          style={{ pointerEvents: 'none' }}
        >
          {videoBlobUrl && <source src={videoBlobUrl} type="video/mp4" />}
        </video>
        <img
          src={imgBlobUrl || preview} // Use cached image if available, otherwise use original URL
          alt="Previews not available"
          className={cn(
            'object-cover',
            'absolute top-0 left-0 -z-50',
            `${customClass}`,
            `${!cover? 'w-full h-full' : 'w-[100%] h-[100%]'}`
          )}
        />
      </div>
    </div>
  )
}

export default VideoLayout
