import { ViteoLayoutT } from "@/src/types/layouts";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Dexie from 'dexie';

// Create or open an IndexedDB database
const db = new Dexie('VideoCacheDB');
db.version(1).stores({
  videos: 'url, data' // Define the schema for the videos store
});

const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover, preview } = props;

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoBlobUrl, setVideoBlobUrl] = useState(null);
  const [ref, inView] = useInView();

  useEffect(() => {
    const cacheVideo = async () => {
      try {
        // Check if the video is already in the cache
        const cachedVideo = await db.table('videos').get(link);
        if (cachedVideo) {
          console.log(cachedVideo);
          // If the video is cached, create a blob URL and set it as the video source
          const blobUrl = URL.createObjectURL(cachedVideo.data);
          setVideoBlobUrl(blobUrl);
          setIsVideoLoaded(true);
        } else {
          // If the video is not cached, download it and store it in the cache
          const response = await fetch(link);
          const videoBlob = await response.blob();
          await db.table('videos').put({ url: link, data: videoBlob });
          const blobUrl = URL.createObjectURL(videoBlob);
          setVideoBlobUrl(blobUrl);
          setIsVideoLoaded(true);
        }
      } catch (error) {
        console.error('Error caching the video:', error);
      }
    };

    if (inView && !isVideoLoaded) {
      cacheVideo();
    }
  }, [inView, link, isVideoLoaded]);

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
          {videoBlobUrl && <source src={videoBlobUrl} type="video/mp4" />}
        </video>
        <img
          src={preview}
          alt="Previews not available"
          className={`object-cover absolute top-0 left-0 -z-50 ${!cover ? 'w-full h-full' : 'w-[100%] h-[100%]'}`}
        />
      </div>
    </div>
  );
};

export default VideoLayout;