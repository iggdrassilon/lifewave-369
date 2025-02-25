import { ViteoLayoutT } from "@/src/types/layouts"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Dexie from 'dexie'

const db = new Dexie('VideoCacheDB')
db.version(3).stores({
  videos: 'url, data, blobUrl',
  images: 'url, data, blobUrl'
})

const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover, preview, customClass } = props
  const [ref, inView] = useInView()

  const [videoBlobUrl, setVideoBlobUrl] = useState(null)
  const [imgBlobUrl, setImgBlobUrl] = useState(null)

  useEffect(() => {
    const cacheVideo = async () => {
      try {
        const cachedVideo = await db.table('videos').get(link)
        if (cachedVideo) {
          if (cachedVideo.blobUrl) {
            setVideoBlobUrl(cachedVideo.blobUrl)
          } else {
            const blob = new Blob([cachedVideo.data], { type: 'video/mp4' })
            const blobUrl = URL.createObjectURL(blob)
            await db.table('videos').put({ url: link, data: cachedVideo.data, blobUrl })
            setVideoBlobUrl(blobUrl)
          }
        } else {
          const response = await fetch(link)
          const videoBlob = await response.blob()
          const blobUrl = URL.createObjectURL(videoBlob)
          await db.table('videos').put({ url: link, data: videoBlob, blobUrl })
          setVideoBlobUrl(blobUrl)
        }
      } catch (error) {
        console.error('Error caching the video:', error)
      }
    }

    const cacheImage = async () => {
      try {
        const cachedImage = await db.table('images').get(preview)
        if (cachedImage) {
          if (cachedImage.blobUrl) {
            setVideoBlobUrl(cachedImage.blobUrl)
          } else {
            const blob = new Blob([cachedImage.data], { type: 'image/png' })
            const blobUrl = URL.createObjectURL(blob)
            await db.table('images').put({ url: link, data: cachedImage.data, blobUrl })
            setVideoBlobUrl(blobUrl)
          }
        } else {
          const response = await fetch(preview)
          const imageBlob = await response.blob()
          const blobUrl = URL.createObjectURL(imageBlob)
          await db.table('images').put({ url: preview, data: imageBlob, blobUrl })
          setImgBlobUrl(blobUrl)
        }
      } catch (error) {
        console.error('Error caching the video:', error)
      }
    }

    // const cacheImage = async () => {
    //   try {
    //     const cachedImage = await db.table('images').get(preview)
    //     if (cachedImage) {
    //       console.log(cachedImage)
    //       setImgBlobUrl(cachedImage)
    //     } else {
    //       const response = await fetch(preview)
    //       const imageBlob = await response.blob()
    //       await db.table('images').put({ url: preview, data: imageBlob })
    //       const blobUrl = URL.createObjectURL(imageBlob)
    //       setImgBlobUrl(blobUrl)
    //     }
    //   } catch (error) {
    //     console.error('Error caching the image:', error)
    //   }
    // }

    if (inView) {
      if (!videoBlobUrl) {
        cacheVideo()
      }
      if (!imgBlobUrl) {
        cacheImage()
      }
    }
  }, [inView, link, preview])

  return (
    <div>
      <div ref={ref} className={`absolute inset-0 -z-50 opacity-${opacity}`}>
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline // for ios
          // eslint-disable-next-line react/no-unknown-property
          webkit-playsinline // for chrome
          disablePictureInPicture
          className={`object-cover ${customClass} -z-50 ${!cover? 'w-full h-full' : 'w-[100%] h-[100%]'}`}
          controls={false}
          tabIndex={-1} // turn off navigation
          onContextMenu={(e) => e.preventDefault()} // turn off context menu
        >
          {videoBlobUrl && <source src={videoBlobUrl} type="video/mp4" />}
        </video>
        <img
          src={imgBlobUrl || preview} // Use cached image if available, otherwise use original URL
          alt="Previews not available"
          className={`object-cover ${customClass} absolute top-0 left-0 -z-50 ${!cover? 'w-full h-full' : 'w-[100%] h-[100%]'}`}
        />
      </div>
    </div>
  )
}

export default VideoLayout