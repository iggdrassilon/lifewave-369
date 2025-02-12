/* eslint-disable react-hooks/exhaustive-deps */
import { ViteoLayoutT } from "@/src/types/layouts";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover, preview } = props;

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    const videoElement = videoRef.current;

    if (inView) {
      console.log('video action');
      videoElement.src = link;
      videoElement.load();
      videoElement.onloadeddata = () => {
        setIsVideoLoaded(true);
      };

      return () => {
        videoElement.src = '';
        videoElement.onloadeddata = null;
      };
    }
  }, [inView]);

  return (
    <div>
      <div ref={ref} className={`absolute inset-0 -z-50 opacity-${opacity}`}>
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline // for ios
          webkit-playsinline // for chrome
          disablePictureInPicture
          className={`object-cover -z-50 ${!cover ? 'w-full h-full' : 'w-[100%] h-[100%]'}`}
          controls={false}
          tabIndex={-1} // turn off navigation
          onContextMenu={(e) => e.preventDefault()} // turn off context menu
        >
          <source type="video/mp4" />
        </video>
        {!isVideoLoaded && (
          <img
            src={preview}
            alt="Previews not available"
            className={`object-cover absolute top-0 left-0 -z-50 ${!cover ? 'w-full h-full' : 'w-[100%] h-[100%]'}`}
          />
        )}
      </div>
    </div>
  );
  };

export default VideoLayout;
