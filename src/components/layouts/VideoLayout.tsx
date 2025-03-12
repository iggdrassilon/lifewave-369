import { ViteoLayoutT } from "@/src/types/layouts"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/src/lib/utils"
import useCache from "@/src/hooks/useCache"
import useInViewHook from "@/src/hooks/useInView"

const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover, preview, customClass } = props

  const { ref, isInView } = useInViewHook()

  const videoBlobUrl = useCache(link, 'video', isInView)
  const imgBlobUrl = useCache(preview, 'image', isInView)

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
