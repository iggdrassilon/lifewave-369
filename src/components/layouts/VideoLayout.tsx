import { ViteoLayoutT } from "@/src/types/layouts"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/src/lib/utils"
import useCache from "@/src/hooks/useCache"

const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover, preview, customClass } = props
  const [ref, inView] = useInView()

  const videoBlobUrl = useCache(link, 'video', inView)
  const imgBlobUrl = useCache(preview, 'image', inView)

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
            'object-cover -z-50',
            `${!cover? 'w-full h-full' : 'w-[100%] h-[100%]'}`
          )}
          controls={false}
          tabIndex={-1} // turn off navigation
          onContextMenu={(e) => e.preventDefault()} // turn off context menu
        >
          {videoBlobUrl && <source src={videoBlobUrl} type="video/mp4" />}
        </video>
        <img
          src={imgBlobUrl || preview} // Use cached image if available, otherwise use original URL
          alt="Previews not available"
          className={cn(
            'object-cover',
            `${customClass}`,
            'absolute top-0 left-0 -z-50',
            `${!cover? 'w-full h-full' : 'w-[100%] h-[100%]'}`
          )}
        />
      </div>
    </div>
  )
}

export default VideoLayout