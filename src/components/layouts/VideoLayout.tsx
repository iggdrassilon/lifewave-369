import { ViteoLayoutT } from "@/src/types/layouts";

const VideoLayout = (props: ViteoLayoutT) => {
  const { videoRef, link, opacity, cover } = props

  return (
    <div>
      <div className={`absolute inset-0 -z-50 opacity-${opacity}`}>
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
          tabIndex={-1} // off navigation
          onContextMenu={(e) => e.preventDefault()} // drop context menu
        >
          <source src={`${link}`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoLayout;
