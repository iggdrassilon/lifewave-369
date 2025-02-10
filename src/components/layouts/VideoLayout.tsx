/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type ViteoLayoutT = {
  videoRef: any
  link: string
  opacity: string
  cover: boolean
}

const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover } = props

  return (
    <div>
      <div className={`absolute inset-0 -z-50 opacity-${opacity}`}>
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`object-cover -z-50 ${!cover ? 'w-full h-full' : 'w-[100%] h-[100%]'}`}
        >
          <source src={`${link}`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoLayout;
